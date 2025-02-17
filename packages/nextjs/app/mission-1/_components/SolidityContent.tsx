import React from "react";
import CodeSnippet from "./CodeSnippet";

const SolidityContent: React.FC = () => {
  return (
    <div className="flex justify-center">
      <div className="w-full p-4 space-y-6 max-w-[95vw] sm:max-w-4xl">
        {/* Story Section */}
        <div className="card bg-base-200 shadow-xl">
          <div className="card-body p-4 sm:p-8">
            <p className="text-sm sm:text-lg italic text-base-content/80">
              You pause for a moment, breathing in the crisp, recycled air of the space academy. A sense of pride stirs
              within you, paired with the eagerness to move on to the next mission. Your eyes wander to a poster hanging
              on the hallway wall nearby: it depicts a massive space station orbiting a ringed planet, with three moons
              gleaming in the distance. Bold text beneath the image reads: "Enlist for Project Alpha Centauri today!"
            </p>
          </div>
        </div>

        {/* Mission Overview */}
        <div className="card bg-base-200 shadow-xl">
          <div className="card-body p-4 sm:p-8">
            <h1 className="card-title text-2xl sm:text-3xl mb-4">Solidity</h1>
            <p className="text-sm sm:text-base text-base-content/80">
              Congratulations on your progress thus far, your next step is to write a smart contract to enlist for the
              outpost in Alpha Centauri. In this mission you will, edit a basic smart contract, create a basic
              AssemblyScript handler to process event data and then publish that subgraph to your local machine as well
              as the Subgraph Studio. Once you have completed this mission you will be able to move on.
            </p>
          </div>
        </div>

        {/* Environment Setup */}
        <div className="card bg-base-200 shadow-xl">
          <div className="card-body p-4 sm:p-8">
            <h2 className="card-title text-xl sm:text-2xl">1. Environment Setup</h2>
            <p className="text-sm sm:text-base italic mb-4">
              Before you begin, make sure you are in the proper branch.
            </p>

            <div className="space-y-4">
              <div>
                <p className="text-sm sm:text-base italic mb-2">Clone the repository:</p>
                <CodeSnippet
                  code="git clone https://github.com/kmjones1979/graphbuilders-basecamp mission-1-enlist"
                  button={true}
                />
              </div>

              <div>
                <p className="text-sm sm:text-base italic mb-2">Navigate into the project directory:</p>
                <CodeSnippet code="cd mission-1-enlist" button={true} />
              </div>

              <div>
                <p className="text-sm sm:text-base italic mb-2">Checkout the branch:</p>
                <CodeSnippet code="git checkout mission-1-enlist" button={true} />
              </div>

              <div>
                <p className="text-sm sm:text-base italic mb-2">Install the dependencies:</p>
                <CodeSnippet code="yarn install" button={true} />
              </div>

              <div>
                <p className="text-sm sm:text-base italic mb-2">Start your local blockchain:</p>
                <CodeSnippet code="yarn chain" button={true} />
              </div>
            </div>
          </div>
        </div>

        {/* Deployment Steps */}
        <div className="card bg-base-200 shadow-xl">
          <div className="card-body p-4 sm:p-8">
            <h2 className="card-title text-xl sm:text-2xl">2. Deploy Contract</h2>
            <p className="text-sm sm:text-base italic mb-2">(In a new terminal)</p>
            <CodeSnippet code="yarn deploy" button={true} />

            <h2 className="card-title text-xl sm:text-2xl mt-6">3. Start Frontend</h2>
            <p className="text-sm sm:text-base italic mb-2">(In a new terminal)</p>
            <CodeSnippet code="yarn start" button={true} />
          </div>
        </div>

        {/* Contract Code */}
        <div className="card bg-base-200 shadow-xl">
          <div className="card-body p-4 sm:p-8">
            <h2 className="card-title text-xl sm:text-2xl mb-4">Starting Contract Code</h2>
            <p className="text-sm sm:text-base italic mb-4">
              The starting smart contract code for this mission is as follows:
            </p>

            <div className="mockup-code text-xs sm:text-sm w-full overflow-x-auto">
              <pre>
                <code className="language-solidity">
                  {`contract Enlist {

    mapping(address => bool) public isEnlisted;

    function enlist() public {
        require(!isEnlisted[msg.sender], "You are already enlisted");
        isEnlisted[msg.sender] = true;
    }

}`}
                </code>
              </pre>
            </div>

            <p className="text-sm sm:text-base italic mt-4">
              This basic contract allows a wallet to enlist themselves. You can check the current enlistment of a wallet
              by using the "Debug Contracts" tab in the header and checking the{" "}
              <code className="badge badge-ghost text-xs">isEnlisted</code> mappings value for your wallet address. You
              can also call the <code className="badge badge-ghost text-xs">enlist()</code> function on that page as
              well.
            </p>
          </div>
        </div>

        {/* Task Section */}
        <div className="card bg-base-200 shadow-xl">
          <div className="card-body p-4 sm:p-8">
            <h2 className="card-title text-xl sm:text-2xl mb-4">
              📝 Task 1: Add an event to track addresses which have enlisted
            </h2>

            <p className="text-sm sm:text-base font-bold mb-4">To complete this task, follow these steps:</p>

            <ul className="list-disc list-inside space-y-2 text-sm sm:text-base text-base-content/80">
              <li>
                Navigate to <code className="badge badge-ghost text-xs">packages/hardhat/contracts</code> and open the
                file <code className="badge badge-ghost text-xs">Enlist.sol</code>
              </li>
              <li>
                Add an event called <code className="badge badge-ghost text-xs">Enlisted</code> that will emit an{" "}
                <code className="badge badge-ghost text-xs">address</code>
              </li>
              <li>
                Use the event by calling the <code className="badge badge-ghost text-xs">emit</code> keyword inside the{" "}
                <code className="badge badge-ghost text-xs">enlist()</code> function
              </li>
            </ul>

            <div className="mt-6">
              <a
                target="_blank"
                href="https://solidity-by-example.org/events/"
                className="link link-primary text-sm sm:text-base"
              >
                👉🏼 Look at this page if you get lost... Solidity-by-Example (Events) 🔎
              </a>
            </div>

            <div className="mt-6">
              <p className="text-sm sm:text-base italic mb-2">Deploy your changes:</p>
              <CodeSnippet code="yarn deploy --reset" button={true} />
            </div>

            <div className="mt-6">
              <p className="text-sm sm:text-base italic mb-2">✅ Success will look like this:</p>
              <div className="mockup-code text-xs sm:text-sm">
                <pre>
                  <code>deployed at 0x2279B7A0a67DB372996a5FaB50D91eAA73d2eBe6 with 283218 gas</code>
                </pre>
              </div>
            </div>

            <p className="text-sm sm:text-base mt-6">
              Since this will be a new contract that is deployed, you will need to enlist on the main page or using
              "Debug Contracts" tab. If you were successful, continue with the next part of the mission.
            </p>
          </div>
        </div>

        {/* Support Section */}
        <div className="card bg-base-200 shadow-xl text-center">
          <div className="card-body p-4 sm:p-8">
            <h2 className="card-title justify-center text-lg sm:text-xl">Need Help?</h2>
            <p className="text-sm sm:text-base text-base-content/80">Join the telegram channel for this mission:</p>
            <div className="card-actions justify-center">
              <a
                href="https://t.me/+ZZIgax5l1dI1YjQx"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary btn-sm sm:btn-md"
              >
                🗒 Mission 1: Alpha Centauri 🚀
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SolidityContent;
