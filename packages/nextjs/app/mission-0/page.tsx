"use client";

import React, { useEffect, useState } from "react";
import AdminContent from "./_components/AdminContent";
import DeployContent from "./_components/DeployContent";
import SolidityContent from "./_components/SolidityContent";
import StudioContent from "./_components/StudioContent";
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
    args: [0, address],
  });
  const [isChatVisible, setChatVisible] = useState(false);
  const [isSecondChatVisible, setSecondChatVisible] = useState(false);

  const adminRole = "0xa49807205ce4d355092ef5a8a18f56e8913cf4a201fbe287825b095693c21775";

  const { data: hasAdminRole } = useScaffoldReadContract({
    contractName: "Validator",
    functionName: "hasRole",
    args: [adminRole, address],
  });

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
          <h1 className="text-4xl font-bold pt-4 text-center max-w-2xl sm:max-w-xl">Mission 0</h1>
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
          {hasAdminRole && (
            <button
              className={`rounded-lg px-4 py-2 ${activeTab === "admin" ? "bg-purple-500" : "text-purple-500"}`}
              onClick={() => setActiveTab("admin")}
            >
              Admin
            </button>
          )}
          <button
            className={`rounded-lg px-4 py-2 ${activeTab === "solidity" ? "bg-purple-500" : "text-purple-500"}`}
            onClick={() => setActiveTab("solidity")}
          >
            Part 1
          </button>
          <button
            className={`rounded-lg px-4 py-2 ${activeTab === "deploy" ? "bg-purple-500" : "text-purple-500"}`}
            onClick={() => setActiveTab("deploy")}
          >
            Part 2
          </button>
          <button
            className={`rounded-lg px-4 py-2 ${activeTab === "studio" ? "bg-purple-500" : "text-purple-500"}`}
            onClick={() => setActiveTab("studio")}
          >
            Part 3
          </button>
        </div>

        {activeTab === "admin" && (
          <div className="justify-center top">
            <div className="flex justify-center top">
              <AdminContent />
            </div>
          </div>
        )}
        {activeTab === "solidity" && (
          <div className="justify-center top">
            <div className="flex justify-center top">
              <SolidityContent />
            </div>
            <div className="flex justify-center top">
              <button
                className="btn btn-primary"
                onClick={() => {
                  setActiveTab("deploy");
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
              >
                Part 2
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
                Part 3
              </button>
            </div>
          </div>
        )}
        {activeTab === "studio" && (
          <div className="flex justify-center top">
            <StudioContent />
          </div>
        )}

        {/* Chat Bubble Container */}
        {isChatVisible && (
          <div className="fixed top-20 right-2 max-w-lg">
            <div className="rounded-lg p-4 w-full max-w-lg">
              <div className="chat-bubble max-w-lg border-solid border-2 border-slate-700">
                <div className="chat chat-start">
                  <div className="chat-image avatar">
                    <div className="w-20 rounded-full">
                      <img alt="Tailwind CSS chat bubble component" src={grixli} />
                    </div>
                  </div>
                  <div className="chat-header">Grixl</div>
                  <div className="chat-bubble">Yo, how is it going? You look new here!</div>
                </div>
                {!isSecondChatVisible && (
                  <div className="chat chat-start">
                    <div className="chat-header">Grixl</div>
                    <div className="chat-image avatar">
                      <div className="w-20 rounded-full"></div>
                    </div>
                    <div className="chat-bubble">
                      <span className="loading loading-dots loading-sm"></span>
                    </div>
                  </div>
                )}
                {isSecondChatVisible && (
                  <div className="chat chat-start">
                    <div className="chat-header">Grixl</div>
                    <div className="chat-image avatar">
                      <div className="w-20 rounded-full"></div>
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

        {/* Chat Avatar Button when chat is closed */}
        {!isChatVisible && (
          <div className="pt-5 fixed top-20 right-4">
            <button
              className="flex items-center justify-center w-20 h-20 bg-slate-500 rounded-full shadow-lg hover:bg-purple-500 transition"
              onClick={toggleChat}
            >
              <img src={grixli} alt="Chat Avatar" className="w-20 h-20 rounded-full" />
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default Subgraph;
