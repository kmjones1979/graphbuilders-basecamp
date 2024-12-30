"use client";

import { useRouter } from "next/navigation";
import type { NextPage } from "next";
import { useAccount } from "wagmi";

const Home: NextPage = () => {
  const { address: connectedAddress } = useAccount();
  const router = useRouter();

  return (
    <>
      <div className="justify-center p-1">
        <div
          className="hero min-h-screen"
          style={{
            backgroundImage: "url(/bg-v5.png)",
          }}
        >
          <div className="hero-overlay bg-opacity-20"></div>
          <div className="hero-content text-neutral-content flex flex-col items-center justify-center w-full h-screen px-4 sm:px-8">
            <div className="max-w-1xl text-center">
              <h2 className="mb-7 font-bold text-2xl text-white">Welcome to</h2>
              <h1 className="mb-4 text-4xl sm:text-6xl text-white welcome-text">The Graph</h1>
              <h1 className="mb-3 text-4xl sm:text-6xl text-white welcome-text">Builders Basecamp</h1>
              <div className="flex flex-col items-center">
                <p className="mb-10 max-w-lg text-center text-white text-sm sm:text-xl">
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
