import { NextResponse } from 'next/server'
import { privateKeyToAccount } from 'thirdweb/wallets'
import { createThirdwebClient } from 'thirdweb'

// Initialize thirdweb client and admin account
const adminAccount = privateKeyToAccount({
  privateKey: process.env.ADMIN_SECRET_KEY as string,
  client: createThirdwebClient({ clientId: process.env.THIRDWEB_CLIENT_ID as string }),
})

export async function POST(request: Request) {
  try {
    const body = await request.json()
    console.log('body', body)
    
    // Verify this is a message and specifically a /start command
    if (!body.message?.text || body.message.text !== '/start') {
      return NextResponse.json({ ok: true })
    }

    const username = body.message.from.id.toString()
    const expiration = Date.now() + 600_000 // valid for 10 minutes
    const message = JSON.stringify({
      username,
      expiration,
    })
    
    const authCode = await adminAccount.signMessage({
      message,
    })

    // Create the inline keyboard button with web app
    const keyboard = {
      inline_keyboard: [[
        {
          text: 'Veme Whitelist App',
          web_app: {
            url: `${process.env.FRONTEND_APP_ORIGIN}/login/telegram?signature=${authCode}&message=${encodeURI(message)}`
          }
        }
      ]]
    }

    // Prepare the response for Telegram's API
    const response = {
      method: 'sendMessage',
      chat_id: body.message.chat.id,
      text: 'Pick an app to launch.',
      reply_markup: keyboard
    }

    return NextResponse.json(response)
  } catch (error) {
    console.error('Webhook error:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
