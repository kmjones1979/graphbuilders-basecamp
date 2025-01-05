"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import type { NextPage } from "next";
import { useTheme } from "next-themes";
import { resolve } from "path";
import { useAccount } from "wagmi";

const Home: NextPage = () => {
  const { address: connectedAddress } = useAccount();
  const router = useRouter();

  const { resolvedTheme } = useTheme();

  useEffect(() => {}, [resolvedTheme]);

  return (
    <>
      <div className="justify-center p-1 bg-base-100">
        <div
          className="hero min-h-screen"
          style={{
            backgroundImage: resolvedTheme === "light" ? "url(/bg-light.png)" : "url(/bg-dark.png)",
          }}
        >
          <div className="hero-overlay bg-opacity-20"></div>
          <div className="hero-content text-neutral-content flex flex-col items-center justify-center w-full h-screen px-4 sm:px-8">
            <div className="max-w-1xl text-center">
              <p className="mb-7 text-lg sm:text-xl text-violet-300 the-graph-text">Welcome to</p>
              <h1 className="mb-7 text-3xl sm:text-5xl text-white the-graph-text font-bold">The Graph</h1>
              <h1 className="mb-5 text-3xl sm:text-5xl text-white builders-basecamp-text">Builders Basecamp</h1>
              <div className="flex flex-col items-center">
                <p className="mb-10 max-w-lg text-center text-sm sm:text-xl text-violet-300 the-graph-text">
                  A series of missions where you will test your ability to write smart contracts and develop subgraphs
                  on The Graph protocol. To get started click the button below.
                </p>
                <div className="flex items-center justify-center">
                  <button
                    className="btn btn-primary text-lg sm:text-base py-2 px-4"
                    onClick={() => router.push("/mission-0")}
                  >
                    Begin
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
