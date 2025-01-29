"use client";

import React, { useEffect, useState } from "react";
import SideQuestContent from "./_components/Advanced";
import DeployContent from "./_components/DeployContent";
import SolidityContent from "./_components/SolidityContent";
import StudioContent from "./_components/StudioContent";
import SubgraphContent from "./_components/SubgraphContent";
import type { NextPage } from "next";
import { useAccount } from "wagmi";
import { useScaffoldReadContract } from "~~/hooks/scaffold-eth";

const Subgraph: NextPage = () => {
  const grixli = "/grixli.gif";
  const [activeTab, setActiveTab] = useState("solidity");

  const { address } = useAccount();
  const { data: accountMinted } = useScaffoldReadContract({
    contractName: "Validator",
    functionName: "accountMinted",
    args: [3, address],
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

  const toggleChat = () => {
    setChatVisible(!isChatVisible);
  };

  return (
    <>
      <div className="bg-base-100">
        <div className="flex justify-center top">
          <h1 className="text-4xl font-bold pt-4 text-center max-w-2xl">Mission 3</h1>
        </div>
        <div className="flex justify-center top">
          <h3 className="text-2xl pt-4 text-center max-w-2xl">Establish a Lunar Economy with $MOON Token</h3>
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
            className={`rounded-lg px-4 py-2 ${activeTab === "solidity" ? "bg-purple-500" : "text-purple-500"}`}
            onClick={() => setActiveTab("solidity")}
          >
            Part 1
          </button>
          <button
            className={`rounded-lg px-4 py-2 ${activeTab === "subgraph" ? "bg-purple-500" : "text-purple-500"}`}
            onClick={() => setActiveTab("subgraph")}
          >
            Part 2
          </button>
          <button
            className={`rounded-lg px-4 py-2 ${activeTab === "sidequest" ? "bg-purple-500" : "text-purple-500"}`}
            onClick={() => setActiveTab("sidequest")}
          >
            Part 3
          </button>
          <button
            className={`rounded-lg px-4 py-2 ${activeTab === "deploy" ? "bg-purple-500" : "text-purple-500"}`}
            onClick={() => setActiveTab("deploy")}
          >
            Part 4
          </button>
          <button
            className={`rounded-lg px-4 py-2 ${activeTab === "studio" ? "bg-purple-500" : "text-purple-500"}`}
            onClick={() => setActiveTab("studio")}
          >
            Part 5
          </button>
        </div>

        {activeTab === "solidity" && (
          <div className="justify-center top">
            <div className="flex justify-center top">
              <SolidityContent />
            </div>
            <div className="flex justify-center top">
              <button
                className="btn btn-primary"
                onClick={() => {
                  setActiveTab("subgraph");
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
              >
                Part 3
              </button>
            </div>
          </div>
        )}
        {activeTab === "subgraph" && (
          <div className="justify-center top">
            <div className="flex justify-center top">
              <SubgraphContent />
            </div>
            <div className="flex justify-center top">
              <button
                className="btn btn-primary"
                onClick={() => {
                  setActiveTab("sidequest");
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
              >
                Part 3
              </button>
            </div>
          </div>
        )}
        {activeTab === "sidequest" && (
          <div className="justify-center top">
            <div className="flex justify-center top">
              <SideQuestContent />
            </div>
            <div className="flex justify-center top">
              <button
                className="btn btn-primary"
                onClick={() => {
                  setActiveTab("deploy");
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
              >
                Part 4
              </button>
            </div>
          </div>
        )}
        {activeTab === "deploy" && (
          <div className="justify-center top">
            <div className="flex justify-center top">
              <DeployContent />
            </div>
            <div className="flex justify-center top">
              <button
                className="btn btn-primary"
                onClick={() => {
                  setActiveTab("studio");
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
              >
                Part 5
              </button>
            </div>
          </div>
        )}
        {activeTab === "studio" && <StudioContent />}

        {/* Chat Bubble Container */}
        {isChatVisible && (
          <div className="fixed top-20 right-2 max-w-lg">
            <div className="rounded-lg p-4 w-full max-w-lg">
              <div className="chat-bubble max-w-lg border-solid border-2 border-slate-700">
                <div className="chat chat-start">
                  <div className="chat-image avatar top">
                    <div className="w-20 rounded-full">
                      <img alt="Tailwind CSS chat bubble component" src={grixli} />
                    </div>
                  </div>
                  <div className="chat-header">
                    Grixl
                    {/* <time className="text-xs opacity-50 pl-2">1 minute ago</time> */}
                  </div>
                  <div className="chat-bubble">You are doing great! Have you swapped any MEME coins today? 😂</div>
                  {/* <div className="chat-footer opacity-50">Seen</div> */}
                </div>
                {!isSecondChatVisible && (
                  <div className="chat chat-start">
                    <div className="chat-header">
                      Grixl
                      {/* <time className="text-xs opacity-50 pl-2">1 minute ago</time> */}
                    </div>
                    <div className="chat-image avatar">
                      <div className="w-20 rounded-full">
                        {/* <img alt="Tailwind CSS chat bubble component" src={grixli} /> */}
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
                    <div className="chat-image avatar top">
                      <div className="w-20 rounded-full">
                        {/* <img alt="Tailwind CSS chat bubble component" src={grixli} /> */}
                      </div>
                    </div>
                    <div className="chat-header">
                      Grixl
                      {/* <time className="text-xs opacity-50">1 minute ago</time> */}
                    </div>
                    <div className="chat-bubble">
                      PS. This is one is going to be a little harder. Join the telegram channel for this mission here 👇🏼
                      <div className="">
                        <a href="https://t.me/+DEv6MCFMGx85MTU5" target="_blank" rel="noopener noreferrer">
                          🌙 Mission 3: $MOON 🚀
                        </a>
                      </div>
                    </div>
                    <div className="chat-footer opacity-50 pl-2">Seen</div>
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
        {/* Chat Avatar Button when chat is closed */}
        {!isChatVisible && (
          <div className="pt-5 fixed top-20 right-4">
            <button
              className="flex items-center justify-center w-20 h-20 bg-slate-500 rounded-full shadow-lg hover:bg-purple-500 transition"
              onClick={toggleChat}
            >
              <img alt="Chat Avatar" src={grixli} className="w-20 h-20 rounded-full" />
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default Subgraph;
