import { NextResponse } from 'next/server'
import { privateKeyToAccount } from 'thirdweb/wallets'
import { createThirdwebClient } from 'thirdweb'

// Initialize thirdweb client and admin account
const adminAccount = privateKeyToAccount({
  privateKey: process.env.ADMIN_SECRET_KEY as string,
  client: createThirdwebClient({ clientId: process.env.NEXT_PUBLIC_CLIENT_ID as string }),
})

export async function POST(request: Request) {
  console.log('POST request received')
  try {
    const body = await request.json()
    console.log('body', body)
    
    // Verify this is a message and specifically a /start command
    if (!body.message?.text || body.message.text !== '/start') {
      return NextResponse.json({ ok: true })
    }

    const chatId = body.message.chat.id; // Get chat ID from the incoming message
    const username = body.message.from.id.toString();
    const expiration = Date.now() + 600_000; // valid for 10 minutes
    const message = JSON.stringify({
      username,
      expiration,
    });
    
    const authCode = await adminAccount.signMessage({
      message,
    });

    // Create the inline keyboard button with web app
    const inlineKeyboard = [
      [
        {
          text: 'Veme Whitelist App',
          web_app: {
            url: `${process.env.FRONTEND_APP_ORIGIN}/login/telegram?signature=${authCode}&message=${encodeURI(message)}`
          }
        },
      ],
      [{ text: "LEARN MORE!", url: "https://veme.com" }],
    ];
    const replyMarkup = { inline_keyboard: inlineKeyboard };
    const welcomeMessage = `Welcome to the VEME WHITELIST!
Join the Meme Army!`;

    // Prepare the response for Telegram's API
    const response = {
      method: 'sendMessage',
      chat_id: chatId,
      text: welcomeMessage,
      reply_markup: replyMarkup
    };

    // Send the response to Telegram API
    await fetch(`https://api.telegram.org/bot${process.env.BOT_TOKEN}/sendMessage`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(response),
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error('Webhook error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
