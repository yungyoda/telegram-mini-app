"use client";

import React from "react";
import Image from "next/image";
import logo from "../assets/logo.svg";
import Link from "next/link";
import { useActiveAccount } from "thirdweb/react";
import { shortenAddress } from "thirdweb/utils";

export default function Home() {
  const account = useActiveAccount();

  return (
    <div
      className="min-h-screen flex items-center justify-center p-4"
      style={{
        background: "url(/background.png)",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      <div className="bg-white rounded-3xl p-4 md:p-8 max-w-2xl w-full text-center relative">
        <Image
          src={logo}
          alt="Meme Army logo"
          width={120}
          height={120}
          className="mx-auto mb-6"
        />

        <h2 className="text-2xl mb-4 font-black font-army">
          <span className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-transparent bg-clip-text">
            Join The{" "}
          </span>
          <span className="bg-gradient-to-r from-pink-400 to-purple-500 text-transparent bg-clip-text">
            Meme.Army
          </span>
        </h2>

        <h1 className="text-3xl lg:text-5xl font-extrabold mb-4 text-black font-army">
          Imagine <span className="text-pink-500">100M</span> people
          <br />
          unlocking the meme
          <br />
          economy together?
        </h1>

        <p className="text-black mb-2 md:mb-8 max-w-lg mx-auto text-sm font-semibold">
          The Meme.Army more than just a new meme token launchpad. It&apos;s a
          place where you will unlock financial freedom in the new Meme Economy.
        </p>

        <div className="flex flex-col md:flex-row items-center justify-between p-4 rounded-xl">
          <p className="text-sm text-black font-semibold text-center md:text-left">
            We are opening our early Whitelist: those who
            <br className="hidden md:block" />
            sign up will get{" "}
            <span className="text-[#AA014A]">
              first access to mint new
              <br className="hidden md:block" />
              tokens and kickstart the movement.
            </span>
          </p>

          {
            account ? (
              <p className="text-sm text-zinc-400">All Set! Your Whitelisted Account: {shortenAddress(account.address)}</p>
            ) : (
          <Link
            href="https://t.me/VemeWhitelistBot"
            target="_blank"
            className="bg-black text-white px-6 py-3 rounded-full flex items-center mt-4 md:mt-0 gap-2"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12.5625 5.25L19.3125 12L12.5625 18.75M18.375 12H4.6875"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>

              <span>Whitelist Now</span>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
