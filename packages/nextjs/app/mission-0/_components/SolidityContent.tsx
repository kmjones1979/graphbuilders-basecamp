import React from "react";
import CodeSnippet from "./CodeSnippet";

const WELCOME_CONTRACT = `//SPDX-License-Identifier: MIT
pragma solidity >=0.8.0 <0.9.0;

import "hardhat/console.sol";

contract Welcome {
  string public welcomeMessage;

  event WelcomeMessageChanged(string newMessage);

  constructor() {
    welcomeMessage = "Welcome to The Graph Builders Basecamp!";
    emit WelcomeMessageChanged(welcomeMessage);
  }
}`;

const SETUP_STEPS = [
  {
    id: 1,
    title: "Clone Repository",
    command: "git clone https://github.com/kmjones1979/graphbuilders-basecamp mission-0-orientation",
  },
  {
    id: 2,
    title: "Navigate to Directory",
    command: "cd mission-0-orientation",
  },
  {
    id: 3,
    title: "Switch Branch",
    command: "git checkout mission-0-orientation",
  },
  {
    id: 4,
    title: "Install Dependencies",
    command: "yarn install",
  },
  {
    id: 5,
    title: "Start Local Blockchain",
    command: "yarn chain",
    image: {
      src: "/orientation/1.png",
      alt: "Local blockchain output",
    },
  },
  {
    id: 6,
    title: "Deploy Contract",
    command: "yarn deploy",
    image: {
      src: "/orientation/3.png",
      alt: "Contract deployment output",
    },
  },
  {
    id: 7,
    title: "Start Frontend",
    command: "yarn start",
    image: {
      src: "/orientation/2.png",
      alt: "Frontend startup",
    },
  },
];

const SUBGRAPH_FILES = [
  {
    title: "Schema",
    path: "packages/subgraph/src/schema.graphql",
    description: "Contains the definitions for the data you will index from your smart contract",
  },
  {
    title: "Manifest",
    path: "packages/subgraph/subgraph.yaml",
    description: "High level configuration file for your subgraph",
  },
  {
    title: "Mappings",
    path: "packages/subgraph/src/mappings.ts",
    description: "Contains all of the indexing logic for your subgraph",
  },
];

const SolidityContent: React.FC = () => {
  return (
    <div className="flex justify-center">
      <div className="w-full p-4 space-y-6 max-w-[95vw] sm:max-w-4xl">
        {/* Story Section */}
        <div className="card bg-base-200 shadow-xl">
          <div className="card-body p-4 sm:p-8 prose">
            <p className="text-sm sm:text-lg italic text-base-content/80">
              The shuttle transporting you glides effortlessly through the vast emptiness, its engine humming softly as
              it decelerates toward the docking bay. Your pulse quickens, a mix of awe and anticipation flooding your
              senses, as the sprawling station looms ahead—an impossible city suspended in the void.
            </p>
            <p className="text-sm sm:text-lg italic text-base-content/80">
              Before you stretches a dazzling array of shimmering towers and crystalline domes, each one bathed in the
              cold, ethereal light of distant stars. The shuttle screeches as it arrives at the academy. You inhale
              deeply, your gaze fixed on the unknown. With a steadying breath, you step off the shuttle and into the
              hallway of the space academy. The future is waiting.
            </p>
          </div>
        </div>

        {/* Contract Section */}
        <div className="card bg-base-200 shadow-xl">
          <div className="card-body p-4 sm:p-8">
            <h2 className="card-title text-lg sm:text-2xl">Smart Contract Overview</h2>
            <p className="text-sm sm:text-base text-base-content/80">
              In each mission, you'll work with a basic smart contract and deploy script. Your task is to complete the
              outlined steps, starting with Solidity code modifications, then the subgraph, and finally deploying to a
              public network.
            </p>

            <div className="mt-4">
              <h3 className="text-base sm:text-xl font-semibold mb-2">Welcome Contract</h3>
              <p className="text-xs sm:text-sm text-base-content/70 mb-2">
                Located in <code className="badge badge-ghost text-xs">packages/hardhat/contracts</code>
              </p>
              <div className="w-full overflow-x-auto">
                <div className="mockup-code text-xs sm:text-sm">
                  <pre>
                    <code>{WELCOME_CONTRACT}</code>
                  </pre>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Setup Steps */}
        <div className="card bg-base-200 shadow-xl">
          <div className="card-body p-4 sm:p-8">
            <h2 className="card-title text-lg sm:text-2xl">Environment Setup</h2>
            <div className="space-y-6">
              {SETUP_STEPS.map(step => (
                <div key={step.id} className="space-y-2">
                  <h3 className="text-base sm:text-lg font-semibold flex items-center gap-2">
                    <span className="badge badge-primary">{step.id}</span>
                    {step.title}
                  </h3>
                  <div className="w-full overflow-x-auto">
                    <CodeSnippet code={step.command} button={true} />
                  </div>
                  {step.image && (
                    <div className="mt-4">
                      <p className="text-xs sm:text-sm text-base-content/70 mb-2">Success will look like this:</p>
                      <div className="flex justify-center">
                        <img
                          className="rounded-lg border border-base-300 max-w-md w-full h-auto"
                          src={step.image.src}
                          alt={step.image.alt}
                        />
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Subgraph Files Section */}
        <div className="card bg-base-200 shadow-xl">
          <div className="card-body p-4 sm:p-8">
            <h2 className="card-title text-lg sm:text-2xl">Subgraph Configuration</h2>
            <p className="text-sm sm:text-base text-base-content/80">
              The following files in <code className="badge badge-ghost text-xs">packages/subgraph</code> will be used
              in future missions:
            </p>
            <div className="grid gap-4 mt-4">
              {SUBGRAPH_FILES.map((file, index) => (
                <div key={index} className="card bg-base-300">
                  <div className="card-body p-4 sm:p-6">
                    <h3 className="card-title text-base sm:text-lg">{file.title}</h3>
                    <code className="text-xs sm:text-sm text-base-content/70">{file.path}</code>
                    <p className="text-sm sm:text-base text-base-content/80">{file.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Ready Section */}
        <div className="card bg-base-200 shadow-xl text-center">
          <div className="card-body p-4 sm:p-8">
            <h2 className="card-title justify-center text-lg sm:text-xl">Ready to Begin?</h2>
            <p className="text-sm sm:text-base">Continue to the next section when you're ready to start the mission!</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SolidityContent;
