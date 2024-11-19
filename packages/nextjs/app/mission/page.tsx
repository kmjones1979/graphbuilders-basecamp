"use client";

import React, { useState } from "react";
import CodeSnippet from "./_components/CodeSnippet";
import GetEnlisted from "./_components/GetEnlisted";
import SolidityContent from "./_components/SolidityContent";
import StudioContent from "./_components/StudioContent";
import SubgraphContent from "./_components/SubgraphContent";
import type { NextPage } from "next";

const Subgraph: NextPage = () => {
  const [activeTab, setActiveTab] = useState("solidity");

  return (
    <>
      <div className="flex justify-center top">
        <h1 className="text-3xl font-bold pt-4 text-center max-w-2xl">Mission 1</h1>
      </div>
      <div className="flex justify-center mt-4">
        <button
          className={`rounded-lg px-4 py-2 ${activeTab === "solidity" ? "bg-purple-500" : "text-purple-500 text-purple-300"}`}
          onClick={() => setActiveTab("solidity")}
        >
          Solidity
        </button>
        <button
          className={`rounded-lg px-4 py-2 ${activeTab === "subgraph" ? "bg-purple-500" : "text-purple-500 text-purple-300"}`}
          onClick={() => setActiveTab("subgraph")}
        >
          Subgraph
        </button>
        <button
          className={`rounded-lg px-4 py-2 ${activeTab === "studio" ? "bg-purple-500" : "text-purple-500 text-purple-300"}`}
          onClick={() => setActiveTab("studio")}
        >
          Studio
        </button>
      </div>

      {activeTab === "solidity" && <SolidityContent />}
      {activeTab === "subgraph" && <SubgraphContent />}
      {activeTab === "studio" && <StudioContent />}
    </>
  );
};

export default Subgraph;
