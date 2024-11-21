import React from "react";
import CodeSnippet from "./CodeSnippet";

const SolidityContent: React.FC = () => {
  return (
    <>
      {/* Part 1 */}
      <div className="flex justify-center top">
        <p className="text-lg text-center max-w-2xl">
          Welcome to the Academy! Your first job as a junior cadet is to establish communications with the lunar base.
          To do this you will need to establish ownership of a special comms smart contract and then establish a
          connection with the base by randomly generating the proper communication code. After that task is complete you
          will index all of the data into The Graph for the basecamp to see.
        </p>
      </div>
      <div className="flex justify-center top">
        <h3 className="text-2xl pt-4 text-center max-w-2xl">Environment Setup</h3>
      </div>
      <div className="flex justify-center top">
        <p className="text-lg text-center italic">Before you begin, make sure you are in the proper branch.</p>
      </div>
      <CodeSnippet code="git checkout mission-2-comms" button={true} />
      <div className="flex justify-center top">
        <p className="text-lg text-center italic">Then be sure to install the dependencies.</p>
      </div>
      <CodeSnippet code="yarn install" button={true} />
      <div className="flex justify-center top">
        <p className="text-lg text-center italic">Start your local blockchain.</p>
      </div>
      <CodeSnippet code="yarn chain" button={true} />
      <div className="flex justify-center top">
        <p className="text-lg text-center italic">Then start your frontend, in a new terminal.</p>
      </div>
      <CodeSnippet code="yarn start" button={true} />
      <div className="flex justify-center top">
        <h3 className="text-2xl pt-4 text-center max-w-2xl">Mission Steps:</h3>
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

contract Comms {

	uint8 public secret;
	uint8 public attempt;
	bool public isCommsEstablished = false;

	event CommsEstablished(address indexed _address, bool isCommsEstablished);

	constructor() {
		secret = uint8(block.prevrandao % 6) + 1;
	}
	
	function establishComms() public {
		require(!isCommsEstablished, "Comms already established");

		attempt = uint8(block.prevrandao % 6) + 1;
		console.log("Attempt: %s", attempt);
		require(attempt == secret, "Attempt failed: Invalid secret");

		isCommsEstablished = true;
		emit CommsEstablished(msg.sender, isCommsEstablished);
	}
}
`}
            </code>
          </pre>
        </div>
      </div>
      <div className="flex justify-center top mt-4 mb-4">
        <p className="text-lg max-w-2xl italic">Placeholder</p>
      </div>
      <h1 className="flex justify-center text-2xl font-bold">
        {" "}
        📝 Task 1: Take ownership of the contract with OpenZeppelin Ownable 📝
      </h1>
      <div className="flex justify-center top mt-4 mb-4 ">
        <p className="text-lg font-bold max-w-2xl mb-4">To complete this task, follow these steps:</p>
      </div>
      <div className="flex justify-center top mt-4 mb-4">
        <ul className="list-disc list-inside mb-4">
          <li>One</li>
          <li>Two</li>
          <li>Three</li>
        </ul>
      </div>
      <div className="flex justify-center top mt-4 mb-4">
        <ul>
          <li>
            <a target="_blank" href="https://docs.openzeppelin.com/contracts/2.x/access-control">
              {" "}
              👉🏼 Look at this page if you get lost... OpenZeppelin (Access Control) 🔎
            </a>
          </li>
        </ul>
      </div>
      <div className="flex justify-center top mt-4 mb-4">
        <p className="text-lg max-w-2xl italic">Deploy your changes...</p>
      </div>
      <CodeSnippet code="yarn deploy --reset" button={true} />
      <div className="flex justify-center top mt-4 mb-4">
        <p className="text-lg max-w-2xl italic">✅ Success will look like this: 👇🏼</p>
      </div>

      <div className="flex justify-center top mt-4 mb-4">
        <div className="bg-black p-4 rounded max-w-6xl flex justify-center">
          <pre>
            <code className="language-solidity">
              {`deployed at 0x0165878A594ca255338adfa4d48449f69242Eb8F with 378023 gas`}
            </code>
          </pre>
        </div>
      </div>
      <div className="flex justify-center top">
        <p className="text-lg text-center max-w-2xl">
          Once you deploy your changes navigate to the "Debug Contracts" tab and call the establishComms function to
          test the functionality. You will need to attempt to call the function multiple times until the secret matches
          your attempt.
        </p>
      </div>
    </>
  );
};

export default SolidityContent;
