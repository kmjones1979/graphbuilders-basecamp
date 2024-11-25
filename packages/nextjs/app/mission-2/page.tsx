"use client";

import React, { useState } from "react";
import DeployContent from "./_components/DeployContent";
import SolidityContent from "./_components/SolidityContent";
import StudioContent from "./_components/StudioContent";
import SubgraphContent from "./_components/SubgraphContent";
import type { NextPage } from "next";

const Subgraph: NextPage = () => {
  const [activeTab, setActiveTab] = useState("solidity");

  return (
    <>
      <div className="flex justify-center top">
        <h1 className="text-4xl font-bold pt-4 text-center max-w-2xl">Mission 2</h1>
      </div>
      <div className="flex justify-center top">
        <h3 className="text-2xl pt-4 text-center max-w-2xl">Establish Comms with the Lunar Base</h3>
      </div>
      <div className="flex justify-center mt-4">
        <button
          className={`rounded-lg px-4 py-2 ${activeTab === "solidity" ? "bg-purple-500" : "text-purple-500 text-purple-300"}`}
          onClick={() => setActiveTab("solidity")}
        >
          Part 1
        </button>
        <button
          className={`rounded-lg px-4 py-2 ${activeTab === "subgraph" ? "bg-purple-500" : "text-purple-500 text-purple-300"}`}
          onClick={() => setActiveTab("subgraph")}
        >
          Part 2
        </button>
        <button
          className={`rounded-lg px-4 py-2 ${activeTab === "deploy" ? "bg-purple-500" : "text-purple-500 text-purple-300"}`}
          onClick={() => setActiveTab("deploy")}
        >
          Part 3
        </button>
        <button
          className={`rounded-lg px-4 py-2 ${activeTab === "studio" ? "bg-purple-500" : "text-purple-500 text-purple-300"}`}
          onClick={() => setActiveTab("studio")}
        >
          Part 4
        </button>
      </div>

      {activeTab === "solidity" && <SolidityContent />}
      {activeTab === "subgraph" && <SubgraphContent />}
      {activeTab === "deploy" && <DeployContent />}
      {activeTab === "studio" && <StudioContent />}
    </>
  );
};

export default Subgraph;
