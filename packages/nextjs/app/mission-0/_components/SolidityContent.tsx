import React from "react";
import CodeSnippet from "./CodeSnippet";

const SolidityContent: React.FC = () => {
  return (
    <>
      {/* Part 1 */}
      <div className="flex justify-center">
        <div className="max-w-sm sm:max-w-2xl w-full p-4">
          <div className="flex justify-center top">
            <p className="text-lg text-left italic font-thin">
              The shuttle transporting you glides effortlessly through the vast emptiness, its engine humming softly as
              it decelerates toward the docking bay. Your pulse quickens, a mix of awe and anticipation flooding your
              senses, as the sprawling station looms ahead—an impossible city suspended in the void. The hull of the
              shuttle vibrates under you, a gentle tremor signaling your approach.
            </p>
          </div>
          <div className="flex justify-center top">
            <p className="text-lg text-left italic font-thin">
              Before you stretches a dazzling array of shimmering towers and crystalline domes, each one bathed in the
              cold, ethereal light of distant stars. Far off, a massive spacecraft drifts by, its side emblazoned with
              the logo The Graph, a silent testament to the scale of this place. The shuttle screeches as it arrives at
              the academy. You inhale deeply, your gaze fixed on the unknown. With a steadying breath, you step off the
              shuttle and into the hallway of the space academy. The future is waiting.
            </p>
          </div>
          <div className="flex justify-center top pt-4">
            <h1 className="text-3xl pt-4 text-left max-w-2xl italic font-bold">Solidity</h1>
          </div>
          <div className="flex justify-center top">
            <p className="text-lg text-left ">
              In each of these missions, you will be given a basic smart contract and a working deploy script for
              hardhat. You will also be given a starting subgraph configuration. Your task is to complete all the tasks
              outlined in each section, starting first by modifying the Solidity code and then the subgraph and
              eventually deploying your smart contract and subgraph to a public network. The results from your subgraph
              will then be checked to ensure you completed the tasks successfully.
            </p>
          </div>
          <div className="flex justify-center top">
            <h3 className="text-large pt-4 text-left italic">
              As an example, here is the Welcome.sol contract for this mission located in{" "}
              <span className="highlight-code">packages/hardhat/contracts</span>
            </h3>
          </div>
          <div className="flex justify-center top mt-4 mb-4">
            <div className="bg-gray-800 text-white p-4 rounded-lg overflow-auto mb-4">
              <pre>
                <code className="language-solidity text-xs sm:text-base">
                  {`//SPDX-License-Identifier: MIT
pragma solidity >=0.8.0 <0.9.0;

import "hardhat/console.sol";

contract Welcome {

	string public welcomeMessage;

	event WelcomeMessageChanged(string newMessage);

	constructor() {
		welcomeMessage = "Welcome to The Graph Builders Basecamp!";
		emit WelcomeMessageChanged(welcomeMessage);
	}

}
`}
                </code>
              </pre>
            </div>
          </div>
          <div className="flex justify-center top">
            <p className="text-lg text-left max-w-2xl italic">Let's get started!</p>
          </div>
          <div className="flex justify-center top">
            <h3 className="text-2xl pt-4 text-left max-w-2xl">Environment Setup</h3>
          </div>
          <div className="flex justify-center top">
            <p className="text-lg text-left italic">Before you begin, make sure you are in the proper branch.</p>
          </div>
          <CodeSnippet
            code="git clone https://github.com/kmjones1979/graphbuilders-basecamp mission-0-orientation"
            button={true}
          />
          <div className="flex justify-center top">
            <p className="text-lg text-left italic">Navigate into the project directory.</p>
          </div>
          <CodeSnippet code="cd mission-0-orientation" button={true} />
          <div className="flex justify-center top">
            <p className="text-lg text-left italic">Checkout the branch.</p>
          </div>
          <CodeSnippet code="git checkout mission-0-orientation" button={true} />
          <div className="flex justify-center top">
            <p className="text-lg text-left italic">Then be sure to install the dependencies.</p>
          </div>
          <CodeSnippet code="yarn install" button={true} />
          <div className="flex justify-center top">
            <p className="text-lg text-left italic">Start your local blockchain.</p>
          </div>
          <CodeSnippet code="yarn chain" button={true} />
          <div className="flex justify-center top">
            <p className="text-lg text-left italic">Success will look like the following: 👇🏼</p>
          </div>
          <div className="flex justify-center top">
            <img
              className="max-w-2xl items-center w-full h-auto rounded-lg"
              src="/orientation/1.png"
              alt="yarn chain"
            />
          </div>
          <div className="flex justify-center top">
            <p className="text-lg text-left italic">Then start your frontend, in a new terminal.</p>
          </div>
          <CodeSnippet code="yarn start" button={true} />
          <div className="flex justify-center top">
            <p className="text-lg text-left italic">Success will look like the following: 👇🏼</p>
          </div>
          <div className="flex justify-center top">
            <img
              className="max-w-2xl items-center w-full h-auto rounded-lg"
              src="/orientation/2.png"
              alt="yarn chain"
            />
          </div>
          <div className="flex justify-center top">
            <p className="text-lg text-left italic">Then deploy your contract, in a new terminal.</p>
          </div>
          <CodeSnippet code="yarn deploy" button={true} />
          <div className="flex justify-center top">
            <p className="text-lg text-left italic">Success will look like the following: 👇🏼</p>
          </div>
          <div className="flex justify-center top">
            <img
              className="max-w-2xl items-center w-full h-auto rounded-lg"
              src="/orientation/3.png"
              alt="yarn chain"
            />
          </div>
          <div className="flex justify-center top">
            <p className="text-lg text-left max-w-2xl">
              Since this is the first mission, you will not need to modify any of the code.
            </p>
          </div>
          <div className="flex justify-center top">
            <p className="text-lg text-left max-w-2xl">
              Instead for this mission we will have you deploy the <span className="highlight-code">Welcome.sol</span>{" "}
              contract to a public network using the hardhat deploy script and then index the contract using The Graph
              Studio and The Graph CLI in the final section.
            </p>
          </div>
          <div className="flex justify-center top pt-4">
            <h1 className="text-3xl pt-4 text-left max-w-2xl italic font-bold">Subgraph Configurations</h1>
          </div>
          <div className="flex justify-center top">
            <p className="text-lg text-left max-w-2xl">
              The subgraph configuration files for future missions are located in the{" "}
              <span className="highlight-code">packages/subgraph</span> folder. In this mission you will need to
              generate your own subgraph using The Graph CLI. Steps for this will be outlined in the final section.
              However for future missions the subgraph files and locations are as follows:
            </p>
          </div>
          <div className="flex justify-center top">
            <h3 className="text-large pt-4 text-left max-w-2xl italic">
              The schema for this mission is located in{" "}
              <span className="highlight-code">packages/subgraph/schema.graphql</span>. This file contains the
              definitions for the data you will index from your smart contract.
            </h3>
          </div>
          <div className="flex justify-center top">
            <h3 className="text-large pt-4 text-left max-w-2xl italic">
              The subgraph manifest for this mission is located in{" "}
              <span className="highlight-code">packages/subgraph/subgraph.yaml</span>. This file is the high level
              configuration file for your subgraph.
            </h3>
          </div>
          <div className="flex justify-center top">
            <h3 className="text-large pt-4 text-left max-w-2xl italic">
              The subgraph handlers for this mission is located in{" "}
              <span className="highlight-code">packages/subgraph/src/mappings.ts</span>. This file contains all of the
              indexing logic for your subgraph.
            </h3>
          </div>
          <div className="flex justify-center top pt-10">
            <div className="flex justify-center top">Stuck? Join the telegram channel for this mission... </div>
            <div className="">
              <a href="https://t.me/+vbvAPzHXj08wMGUx" target="_blank" rel="noopener noreferrer">
                🏫 Mission 0: Orientation 🚀
              </a>
            </div>
          </div>
          <div className="flex justify-center top">
            <p className="text-lg text-left max-w-2xl italic">Ready to move on?</p>
          </div>{" "}
        </div>
      </div>
    </>
  );
};

export default SolidityContent;
