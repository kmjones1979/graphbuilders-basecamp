import React from "react";
import CodeSnippet from "./CodeSnippet";

const SolidityContent: React.FC = () => {
  return (
    <>
      {/* Part 1 */}
      <div className="flex justify-center top">
        <p className="text-lg text-center max-w-2xl">
          You have arrived at The Graph Builders Academy, adventure awaits you in the skies above! In order to travel to
          the outer limits of the galaxy you will first need to enlist the Academy and prove your worth with a basic
          deployment of a subgraph. In this first mission you will, edit a basic smart contract, create a basic
          AssemblyScript handler to process event data and then publish that subgraph to your local machine as well as
          the Subgraph Studio. Once you have completed this mission you will be able to move on to the next mission and
          travel to the stars!
        </p>
      </div>
      <div className="flex justify-center top mt-4 mb-4">
        <p className="text-lg max-w-2xl italic">The starting smart contract code for this mission is as follows:</p>
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

   constructor() {}

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
          This basic contract allows a wallet to enlist themselves. You can check the current enlistment of a wallet by
          using the "Debug Contracts" tab in the header and checking the isEnlisted mappings value for your wallet
          address. You can also call the enlist function on that page as well.
        </p>
      </div>
      <h1 className="flex justify-center text-2xl font-bold"> 📝 Task: Add an event to track enlistments 📝</h1>
      <div className="flex justify-center top mt-4 mb-4 ">
        <p className="text-lg font-bold max-w-2xl">
          To get started, open your editor and navigate to{" "}
          <span className="highlight-code">packages/hardhat/contracts</span> and open
          <span className="highlight-code">enlist.sol</span>. Your task is to add an event called
          <span className="highlight-code">"Enlisted"</span> and an emit statement for that event.
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
      <CodeSnippet code="yarn deploy --reset" button={true} />
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
          Since this will be a new contract that is deployed, you will need to enlist on the main page or using "Debug
          Contracts" tab. If you you were successful with these steps, go back to the top of the page and continue with
          the next part of the mission.
        </p>
      </div>
    </>
  );
};

export default SolidityContent;
