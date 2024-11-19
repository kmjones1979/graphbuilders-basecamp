"use client";

import React, { useState } from "react";
import CodeSnippet from "./_components/CodeSnippet";
import GetEnlisted from "./_components/GetEnlisted";
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
      </div>

      {activeTab === "solidity" && (
        <>
          <div className="flex justify-center top">
            <p className="text-lg text-center max-w-2xl">
              You have arrived at The Graph builders Academy, adventure awaits you in the skies above but before you get
              started you will need to setup your local development environment so that you can begin your mission. You
              will then process your enlistment status and transmit the data to The Graph's decentralized network.
            </p>
          </div>
          <div className="flex justify-center top mt-4 mb-4">
            <p className="text-lg max-w-2xl italic">The smart contract code for this mission is as follows:</p>
          </div>
          <div className="flex justify-center top mt-4 mb-4">
            <div className="bg-black p-4 rounded max-w-6xl flex justify-center">
              <pre>
                <code className="language-solidity">
                  {`//SPDX-License-Identifier: MIT
pragma solidity >=0.8.0 <0.9.0;

import "hardhat/console.sol";

contract Enlist {

	mapping(address => bool) public isEnlisted;

	constructor() {
	}

	function enlist() public {
		require(!isEnlisted[msg.sender], "You are already enlisted");
		isEnlisted[msg.sender] = true;
	}

	receive() external payable {}
}
`}
                </code>
              </pre>
            </div>
          </div>
          <div className="flex justify-center top mt-4 mb-4">
            <p className="text-lg max-w-2xl italic">
              This contract allows you to enlist yourself to the Enlist contract. You should have done this on the main
              page of this application. You can check your status by using the "Debug Contract" button and checking the
              isEnlisted mapping for your wallet address. You can also call the enlist function on that page as well.
            </p>
          </div>
          <div className="flex justify-center top mt-4 mb-4 ">
            <p className="text-lg font-bold max-w-2xl">
              1. To get started with the first part of this mission, open up your editor and navigate to the enlist.sol
              file in the hardhat/contracts folder. Your task is to add an event and an emit statement for the Enlisted
              event within the contract. We will need this in order to properly index the data. Once this is done you
              will need to deploy the contract to the network.
            </p>
          </div>
          <div className="flex justify-center top mt-4 mb-4">
            <ul>
              <li>
                <a target="_blank" href="https://solidity-by-example.org/events/">
                  {" "}
                  👉🏼 Look at this page if you get lost... Solidity-by-Example (Events) 🔎
                </a>
              </li>
            </ul>
          </div>
          <div className="flex justify-center top mt-4 mb-4">
            <p className="text-lg max-w-2xl italic">Deploy your changes...</p>
          </div>
          <CodeSnippet code="yarn deploy" button={true} />
          <div className="flex justify-center top mt-4 mb-4">
            <p className="text-lg max-w-2xl italic">Success will look like this:</p>
          </div>

          <div className="flex justify-center top mt-4 mb-4">
            <div className="bg-black p-4 rounded max-w-6xl flex justify-center">
              <pre>
                <code className="language-solidity">
                  {`deployed at 0x2279B7A0a67DB372996a5FaB50D91eAA73d2eBe6 with 283218 gas`}
                </code>
              </pre>
            </div>
          </div>
          <div className="flex justify-center top">
            <p className="text-lg text-center max-w-2xl">
              If you you were successful, go back to the top of the page and click on the Subgraph tab to continue with
              the next part of the mission.
            </p>
          </div>
        </>
      )}

      {activeTab === "subgraph" && (
        <>
          <div className="flex justify-center top">
            <p className="text-lg text-center max-w-2xl">
              In this next part of the mission you will need to setup your local development environment so that you can
              index the data from the smart contract.
            </p>
          </div>
          <div className="flex justify-center top mt-4 mb-4 ">
            <p className="text-lg font-bold max-w-2xl">
              1. To get started, open up a new terminal and run the following command to spin up your local Graph Node
              inside of docker:
            </p>
          </div>
          <CodeSnippet code="yarn run-node" button={true} />
          <div className="flex justify-center top mt-4 mb-4">
            <p className="text-lg max-w-2xl italic">
              You will know graph-node is ready when you see the following message:
            </p>
          </div>
          <CodeSnippet
            code="INFO Downloading latest blocks from Ethereum, this may take a few minutes..."
            button={false}
          />
          <div className="flex justify-center top mt-4 mb-4">
            <p className="text-lg font-bold  max-w-2xl">
              2. Next you will need to create a subgraph configuration inside your graph-node instance.
            </p>
          </div>
          <CodeSnippet code="yarn local-create" button={true} />
          <div className="flex justify-center top mt-4 mb-4">
            <p className="text-lg font-bold  max-w-2xl">
              3. Now you will need to complete the code for the handler to process the event data coming off the smart
              contract. Open up your project in a text editor and navigate to the handler in
              packages/subgraph/src/mapping.ts.
            </p>
          </div>
          <CodeSnippet code="code ." button={true} />
          <div className="flex justify-center top mt-4 mb-4">
            <p className="text-lg max-w-2xl italic">
              In our case we have an event called Enlisted that we want to process and save to the database. In our case
              the schema is called Enlisted and we have a function called handleEnlisted. In this function we will save
              the event data to the database. Update the function to save the event data to the database, it should look
              like this:
            </p>
          </div>
          <div className="flex justify-center top mt-4 mb-4">
            <div className="bg-black p-4 rounded max-w-4xl flex justify-center">
              <pre>
                <code className="language-typescript">
                  {`import { Enlisted as EnlistedEvent } from "../generated/Enlist/Enlist";
import { Enlisted } from "../generated/schema";

export function handleEnlisted(event: EnlistedEvent): void {
    let entity = new Enlisted(
        event.transaction.hash.concatI32(event.logIndex.toI32())
    );
    entity.account = event.params.account;

    entity.blockNumber = event.block.number;
    entity.blockTimestamp = event.block.timestamp;
    entity.transactionHash = event.transaction.hash;

    entity.save();
}`}
                </code>
              </pre>
            </div>
          </div>

          <div className="flex justify-center top mt-4 mb-4">
            <p className="text-lg font-bold  max-w-2xl">4. Now ship your changes...</p>
          </div>
          <CodeSnippet code="yarn local-ship" button={true} />
          <div className="flex justify-center top mt-4 mb-4">
            <p className="text-lg max-w-2xl italic">When prompted, enter the following version label:</p>
          </div>
          <CodeSnippet code='Which version label to use? (e.g. "v0.0.1"):' button={false} />

          <div className="flex justify-center top mt-4 mb-4">
            <p className="text-lg max-w-2xl italic">Success will look like this:</p>
          </div>

          <div className="flex justify-center top mt-4 mb-4">
            <div className="bg-black p-4 rounded max-w-4xl flex justify-center">
              <pre>
                <code className="language-typescript">
                  {`Build completed: QmSPR7AmLy1FHX4aPdSKNn7GHXy5xGxz6xR6YuD6UMcfAc

Deployed to http://localhost:8000/subgraphs/name/scaffold-eth/your-contract/graphql

Subgraph endpoints:
Queries (HTTP):     http://localhost:8000/subgraphs/name/scaffold-eth/your-contract`}
                </code>
              </pre>
            </div>
          </div>
          <div className="flex justify-center top mt-4 mb-4">
            <p className="text-lg font-bold  max-w-2xl">5. Open up the GraphiQL IDE to view your data.</p>
          </div>

          <div className="flex justify-center top mt-4 mb-4">
            {" "}
            <a target="_blank" href="http://localhost:8000/subgraphs/name/scaffold-eth/your-contract">
              🚀 http://localhost:8000/subgraphs/name/scaffold-eth/your-contract
            </a>
          </div>
          <div className="flex justify-center top mt-4 mb-4">
            <p className="text-lg max-w-2xl italic">Try out the following query to see if your data is being saved:</p>
          </div>
          <div className="flex justify-center top mt-4 mb-4">
            <div className="bg-black p-4 rounded max-w-4xl flex justify-center">
              <pre>
                <code className="language-typescript">
                  {`query MyQuery {
  enlisteds(first: 10, orderBy: blockTimestamp, orderDirection: asc) {
    account
    blockNumber
    blockTimestamp
    id
    transactionHash
  }
}`}
                </code>
              </pre>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Subgraph;
