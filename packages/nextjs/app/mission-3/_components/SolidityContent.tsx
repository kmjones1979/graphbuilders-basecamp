import React from "react";
import CodeSnippet from "./CodeSnippet";

const CONTRACT_CODE = `
contract Moon is Ownable{

    address public burner = 0x0000000000000000000000000000000000000000;

    constructor() Ownable(burner) {}

    receive() external payable {}
}`;

const SolidityContent: React.FC = () => {
  return (
    <div className="flex justify-center">
      <div className="w-full p-4 space-y-6 max-w-[95vw] sm:max-w-4xl">
        {/* Header Card */}
        <div className="card bg-base-200 shadow-xl">
          <div className="card-body text-center space-y-4">
            <h1 className="text-3xl sm:text-3xl font-bold">Smart Contract</h1>
            <p className="text-base sm:text-xl">
              In this part of the mission you will be creating a token on the Base network and then indexing the data
              into The Graph. This mission will be a little more complex than the previous ones, but don't worry, we
              will walk you through it step by step.
            </p>
          </div>
        </div>

        {/* Environment Setup */}
        <div className="card bg-base-200 shadow-xl">
          <div className="card-body p-4 sm:p-8">
            <h2 className="card-title text-xl sm:text-2xl">
              <span className="badge badge-primary">1</span>Environment Setup
            </h2>
            <p className="text-sm sm:text-base italic mb-4">
              Before you begin, make sure you are in the proper branch.
            </p>

            <div className="space-y-4">
              <div>
                <p className="text-sm sm:text-base italic mb-2">Clone the repository:</p>
                <CodeSnippet
                  code="git clone https://github.com/kmjones1979/graphbuilders-basecamp mission-3-moon"
                  button={true}
                />
              </div>

              <div>
                <p className="text-sm sm:text-base italic mb-2">Navigate into the project directory:</p>
                <CodeSnippet code="cd mission-3-moon" button={true} />
              </div>

              <div>
                <p className="text-sm sm:text-base italic mb-2">Checkout the branch:</p>
                <CodeSnippet code="git checkout mission-3-moon" button={true} />
              </div>

              <div>
                <p className="text-sm sm:text-base italic mb-2">Install the dependencies:</p>
                <CodeSnippet code="yarn install" button={true} />
              </div>

              <div>
                <p className="text-sm sm:text-base italic mb-2">Start your local blockchain:</p>
                <CodeSnippet code="yarn chain" button={true} />
              </div>

              <div>
                <p className="text-sm sm:text-base italic mb-2">Deploy your contract (in a new terminal):</p>
                <CodeSnippet code="yarn deploy" button={true} />
              </div>

              <div>
                <p className="text-sm sm:text-base italic mb-2">Start your frontend (in a new terminal):</p>
                <CodeSnippet code="yarn start" button={true} />
              </div>
            </div>

            <p className="text-sm sm:text-base italic mt-6">
              Now that our environment is setup, let's begin the mission.
            </p>
          </div>
        </div>

        {/* Contract Code */}
        <div className="card bg-base-200 shadow-xl">
          <div className="card-body p-4 sm:p-8">
            <h2 className="card-title text-xl sm:text-2xl mb-4">
              <span className="badge badge-primary">2</span>Starting Contract Code
            </h2>
            <p className="text-sm sm:text-base italic mb-4">
              The starting smart contract code for this mission is as follows:
            </p>

            <div className="mockup-code text-xs sm:text-sm w-full">
              <pre className="pl-8">
                <code className="language-solidity">{CONTRACT_CODE}</code>
              </pre>
            </div>

            <p className="text-sm sm:text-base text-base-content/80 mt-6">
              Next, we will be updating the smart contract to inherit the ERC-20 standard. The ERC-20 standard is the
              most popular standard for creating a token on Ethereum. It defines a set of functions that a token
              contract must implement.
            </p>
          </div>
        </div>

        {/* Task Section */}
        <div className="card bg-base-200 shadow-xl">
          <div className="card-body p-4 sm:p-8">
            <h2 className="card-title text-xl sm:text-2xl mb-4">
              <span className="badge badge-primary">1</span>Add the ERC-20 Standard to the Moon Contract
            </h2>

            <p className="text-sm sm:text-base font-bold mb-4">To complete this task, follow these steps:</p>

            <ul className="list-disc list-inside space-y-2 text-sm sm:text-base text-base-content/80">
              <li>Import the ERC-20 contract from OpenZeppelin</li>
              <li>Inherit the ERC-20 contract from OpenZeppelin</li>
              <li>Initialize the ERC-20 contract with the name and symbol</li>
              <li>Mint the initial supply to your wallet</li>
            </ul>

            <div className="mt-6">
              <a
                target="_blank"
                href="https://docs.openzeppelin.com/contracts/4.x/erc20"
                className="link link-primary text-sm sm:text-base"
              >
                👉🏼 Look at this page if you get lost... OpenZeppelin (ERC-20) 🔎
              </a>
            </div>

            <div className="mt-6">
              <p className="text-sm sm:text-base italic mb-2">Deploy your changes:</p>
              <CodeSnippet code="yarn deploy --reset" button={true} />
            </div>

            <div className="mt-6">
              <p className="text-sm sm:text-base italic mb-2">✅ Success will look like this:</p>
              <div className="mockup-code text-xs sm:text-sm w-full">
                <pre>
                  <code>deployed at 0xCf7Ed3AccA5a467e9e704C703E8D87F634fB0Fc9 with 747494 gas</code>
                </pre>
              </div>
            </div>

            <div className="alert bg-base-300 border border-base-content/10 mt-6">
              <p className="text-sm sm:text-base text-base-content/80">
                You can then navigate to the "Debug Contracts" tab in Scaffold-ETH and perform some transactions with
                your token. You should test the <code className="badge badge-ghost text-xs">approve</code> function as
                well as the <code className="badge badge-ghost text-xs">transfer</code> function.
              </p>
            </div>

            <p className="text-sm sm:text-base mt-6">
              Now that your contract is deployed, let's create an extended subgraph.
            </p>
          </div>
        </div>

        {/* Support Section */}
        <div className="card bg-base-200 shadow-xl text-center">
          <div className="card-body p-4 sm:p-8">
            <h2 className="card-title justify-center text-lg sm:text-xl">Need Help?</h2>
            <p className="text-sm sm:text-base text-base-content/80">Join our Telegram support channel:</p>
            <div className="card-actions justify-center">
              <a
                href="https://t.me/+DEv6MCFMGx85MTU5"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary btn-sm sm:btn-md"
              >
                🌙 Mission 3: $MOON 🚀
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SolidityContent;
