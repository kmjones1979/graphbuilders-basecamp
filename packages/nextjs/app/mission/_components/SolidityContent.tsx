import React from "react";
import CodeSnippet from "./CodeSnippet";

const SolidityContent: React.FC = () => {
  return (
    <>
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
          This contract allows you to enlist yourself to the smart contract. You should have done this on the main page
          of this application. You can check your status by using the "Debug Contracts" tab in the header and checking
          the isEnlisted mappings value for your wallet address. You can also call the enlist function on that page as
          well.
        </p>
      </div>
      <div className="flex justify-center top mt-4 mb-4 ">
        <p className="text-lg font-bold max-w-2xl">
          1. To get started with the first part of this mission, open up your editor and navigate to the enlist.sol file
          in the hardhat/contracts folder. Your task is to add an event called "Enlisted" and an emit statement for that
          event within the enlist function. We will need this in order to properly index the data in the following
          section. Once this is done you will need to redeploy the contract to hardhat.
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
          If you you were successful, go back to the top of the page and click on the Subgraph tab to continue with the
          next part of the mission.
        </p>
      </div>
    </>
  );
};

export default SolidityContent;
