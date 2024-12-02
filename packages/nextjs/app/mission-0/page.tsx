"use client";

import React, { useEffect, useState } from "react";
import DeployContent from "./_components/DeployContent";
import SolidityContent from "./_components/SolidityContent";
import StudioContent from "./_components/StudioContent";
// import SubgraphContent from "./_components/SubgraphContent";
import type { NextPage } from "next";
import { useAccount } from "wagmi";
import { useScaffoldReadContract } from "~~/hooks/scaffold-eth";

const Subgraph: NextPage = () => {
  const [activeTab, setActiveTab] = useState("solidity");
  const { address } = useAccount();
  const { data: accountMinted } = useScaffoldReadContract({
    contractName: "Validator",
    functionName: "accountMinted",
    args: [0, address],
  });
  const [isChatVisible, setChatVisible] = useState(false);
  const [isSecondChatVisible, setSecondChatVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setChatVisible(true);
    }, 1000);

    const secondTimer = setTimeout(() => {
      setSecondChatVisible(true);
    }, 5000);

    return () => {
      clearTimeout(timer);
      clearTimeout(secondTimer);
    };
  }, []);

  return (
    <>
      <div className="flex justify-center top">
        <h1 className="text-4xl font-bold pt-4 text-center max-w-2xl">Welcome to The Graph Builders Basecamp!</h1>
      </div>
      <div className="flex justify-center top">
        <h3 className="text-2xl pt-4 text-center max-w-2xl">Orientation</h3>
      </div>
      <div className="flex justify-center top p-5">
        {accountMinted ? (
          <div className="bg-slate-700 text-green-400 rounded-lg badge">Mission Complete</div>
        ) : (
          <div className="bg-yellow-700 text-white rounded-lg badge">Mission Incomplete</div>
        )}
      </div>
      <div className="flex justify-center mt-4">
        <button
          className={`rounded-lg px-4 py-2 ${activeTab === "solidity" ? "bg-purple-500" : "text-purple-500 text-purple-300"}`}
          onClick={() => setActiveTab("solidity")}
        >
          Part 1
        </button>
        {/* <button
          className={`rounded-lg px-4 py-2 ${activeTab === "subgraph" ? "bg-purple-500" : "text-purple-500 text-purple-300"}`}
          onClick={() => setActiveTab("subgraph")}
        >
          Part 2
        </button> */}
        <button
          className={`rounded-lg px-4 py-2 ${activeTab === "deploy" ? "bg-purple-500" : "text-purple-500 text-purple-300"}`}
          onClick={() => setActiveTab("deploy")}
        >
          Part 2
        </button>
        <button
          className={`rounded-lg px-4 py-2 ${activeTab === "studio" ? "bg-purple-500" : "text-purple-500 text-purple-300"}`}
          onClick={() => setActiveTab("studio")}
        >
          Part 3
        </button>
      </div>

      {activeTab === "solidity" && <SolidityContent />}
      {/* {/* {activeTab === "subgraph" && <SubgraphContent />} */}
      {activeTab === "deploy" && <DeployContent />}
      {activeTab === "studio" && <StudioContent />}

      {/* Chat Bubble Container */}
      {isChatVisible && (
        <div className="fixed top-20 right-2 max-w-lg">
          <div className="rounded-lg p-4 w-full max-w-lg">
            <div className="chat-bubble max-w-lg border-solid border-2 border-slate-700">
              <div className="chat chat-start">
                <div className="chat-image avatar">
                  <div className="w-10 rounded-full">
                    <img
                      alt="Tailwind CSS chat bubble component"
                      src="https://imgcdn.stablediffusionweb.com/2024/5/1/11583918-7338-4165-9052-a7cd8aaec83d.jpg"
                    />
                  </div>
                </div>
                <div className="chat-header">
                  Ghost0764
                  <time className="text-xs opacity-50 pl-2">1 minute ago</time>
                </div>
                <div className="chat-bubble">Yo, how is it going? You look new here!</div>
                <div className="chat-footer opacity-50">Seen</div>
              </div>
              {!isSecondChatVisible && (
                <div className="chat chat-start">
                  <div className="chat-header">
                    Ghost0764
                    <time className="text-xs opacity-50 pl-2">1 minute ago</time>
                  </div>
                  <div className="chat-image avatar">
                    <div className="w-10 rounded-full">
                      <img
                        alt="Tailwind CSS chat bubble component"
                        src="https://imgcdn.stablediffusionweb.com/2024/5/1/11583918-7338-4165-9052-a7cd8aaec83d.jpg"
                      />
                    </div>
                  </div>
                  <div className="chat-bubble">
                    <span className="loading loading-dots loading-sm"></span>
                  </div>
                  <div className="chat-footer opacity-50">Seen</div>
                </div>
              )}
              {isSecondChatVisible && (
                <div className="chat chat-start">
                  <div className="chat-header">
                    Ghost0764
                    <time className="text-xs opacity-50 pl-2">1 minute ago</time>
                  </div>
                  <div className="chat-image avatar">
                    <div className="w-10 rounded-full">
                      <img
                        alt="Tailwind CSS chat bubble component"
                        src="https://imgcdn.stablediffusionweb.com/2024/5/1/11583918-7338-4165-9052-a7cd8aaec83d.jpg"
                      />
                    </div>
                  </div>
                  <div className="chat-bubble">
                    Having any trouble? Join the telegram channel for this mission 👇🏼
                    <div className="">
                      <a href="https://t.me/+vbvAPzHXj08wMGUx" target="_blank" rel="noopener noreferrer">
                        🏫 Mission 0: Orientation 🚀
                      </a>
                    </div>
                  </div>
                  <div className="chat-footer opacity-50">Seen</div>
                </div>
              )}

              <button
                className="btn btn-sm btn-circle absolute top-2 right-2 bg-slate-700 text-white hover:bg-slate-600"
                onClick={() => setChatVisible(false)}
              >
                ✕
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Subgraph;
