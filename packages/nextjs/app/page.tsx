"use client";

import { useRouter } from "next/navigation";
import type { NextPage } from "next";
import { useAccount } from "wagmi";
import { RainbowKitCustomConnectButton } from "~~/components/scaffold-eth";
import { useScaffoldReadContract, useScaffoldWriteContract } from "~~/hooks/scaffold-eth";

const Home: NextPage = () => {
  const { address: connectedAddress } = useAccount();
  const router = useRouter();

  const { data: isEnlisted } = useScaffoldReadContract({
    contractName: "Enlist",
    functionName: "isEnlisted",
    args: [connectedAddress],
  });

  const { writeContractAsync: writeContractAsync } = useScaffoldWriteContract("Enlist");

  const handleEnlist = async () => {
    try {
      await writeContractAsync({
        functionName: "enlist",
      });
    } catch (e) {
      console.error("Error enlisting:", e);
    }
  };

  return (
    <>
      <div className="justify-center p-1">
        <div
          className="hero min-h-screen"
          style={{
            backgroundImage:
              "url(https://img.freepik.com/free-photo/galactic-night-sky-astronomy-science-combined-generative-ai_188544-9656.jpg)",
          }}
        >
          <div className="hero-overlay bg-opacity-30"></div>
          <div className="hero-content text-neutral-content text-center">
            <div className="max-w-md items-center">
              <h1 className="mb-5 text-3xl font-bold text-white">Welcome to</h1>
              <h1 className="mb-5 text-5xl font-bold text-white">The Graph Builders Basecamp</h1>
              <p className="mb-5 text-white">
                A series of missions where you will test your ability to write smart contracts and develop subgraphs on
                The Graph protocol.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
