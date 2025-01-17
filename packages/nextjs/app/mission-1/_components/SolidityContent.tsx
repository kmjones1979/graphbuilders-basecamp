import React from "react";
import CodeSnippet from "./CodeSnippet";

const SolidityContent: React.FC = () => {
  return (
    <>
      {/* Part 1 */}
      <div className="flex justify-center">
        <div className="max-w-sm sm:max-w-2xl w-full p-4">
          <div className="flex justify-center top">
            <p className="text-lg text-left max-w-2xl italic">
              You pause for a moment, breathing in the crisp, recycled air of the space academy. A sense of pride stirs
              within you, paired with the eagerness to move on to the next mission. Your eyes wander to a poster hanging
              on the hallway wall nearby: it depicts a massive space station orbiting a ringed planet, with three moons
              gleaming in the distance. Bold text beneath the image reads: "Enlist for Project Alpha Centauri today!"
            </p>
          </div>
          <div className="flex justify-center top pt-4">
            <h1 className="text-3xl pt-4 text-left max-w-2xl italic font-bold">Solidity</h1>
          </div>
          <div className="flex justify-center top">
            <p className="text-lg text-left max-w-2xl">
              Congratulations on your progress thus far, your next step is to enlist for Project Alpha Centauri. In this
              mission you will, edit a basic smart contract, create a basic AssemblyScript handler to process event data
              and then publish that subgraph to your local machine as well as the Subgraph Studio. Once you have
              completed this mission you will be able to move on.
            </p>
          </div>
          <div className="flex justify-center top">
            <h3 className="text-2xl pt-4 text-left max-w-2xl">Environment Setup</h3>
          </div>
          <div className="flex justify-center top">
            <p className="text-lg text-left italic">Before you begin, make sure you are in the proper branch.</p>
          </div>
          <CodeSnippet
            code="git clone https://github.com/kmjones1979/graphbuilders-basecamp mission-1-enlist"
            button={true}
          />
          <div className="flex justify-center top">
            <p className="text-lg text-left italic">Navigate into the project directory.</p>
          </div>
          <CodeSnippet code="cd mission-1-enlist" button={true} />
          <div className="flex justify-center top">
            <p className="text-lg text-left italic">Checkout the branch.</p>
          </div>
          <CodeSnippet code="git checkout mission-1-enlist" button={true} />
          <div className="flex justify-center top">
            <p className="text-lg text-left italic">Then be sure to install the dependencies.</p>
          </div>
          <CodeSnippet code="yarn install" button={true} />
          <div className="flex justify-center top">
            <p className="text-lg text-left italic">Start your local blockchain.</p>
          </div>
          <CodeSnippet code="yarn chain" button={true} />
          <div className="flex justify-center top">
            <p className="text-lg text-left italic">Then deploy your contract, in a new terminal.</p>
          </div>
          <CodeSnippet code="yarn deploy" button={true} />
          <div className="flex justify-center top">
            <p className="text-lg text-left italic">Then start your frontend, in a new terminal.</p>
          </div>
          <CodeSnippet code="yarn start" button={true} />
          <div className="flex justify-center top">
            <h3 className="text-2xl pt-4 text-left max-w-2xl">Mission Steps:</h3>
          </div>
          <div className="flex justify-center top mt-4 mb-4">
            <p className="text-lg max-w-2xl italic">The starting smart contract code for this mission is as follows:</p>
          </div>
          <div className="flex justify-center top mt-4 mb-4">
            <div className="bg-gray-800 text-white p-4 rounded-lg overflow-auto mb-4">
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
          </div>
          <div className="flex justify-center top mt-4 mb-4">
            <p className="text-lg max-w-2xl italic">
              This basic contract allows a wallet to enlist themselves. You can check the current enlistment of a wallet
              by using the "Debug Contracts" tab in the header and checking the{" "}
              <span className="highlight-code">isEnlisted</span> mappings value for your wallet address. You can also
              call the <span className="highlight-code">enlist()</span> function on that page as well.
            </p>
          </div>
          <h1 className="flex justify-center text-2xl font-bold">
            {" "}
            📝 Task 1: Add an event to track addresses which have enlisted 📝
          </h1>
          <div className="flex justify-center top mt-4 mb-4 ">
            <p className="text-lg font-bold max-w-2xl mb-4">To complete this task, follow these steps:</p>
          </div>
          <div className="flex justify-center top mt-4 mb-4">
            <ul className="list-disc list-inside mb-4">
              <li>
                Navigate to <span className="highlight-code">packages/hardhat/contracts</span> and open the file{" "}
                <span className="highlight-code">Enlist.sol</span>
              </li>
              <li>
                Add an event called <span className="highlight-code">Enlisted</span> that will emit an{" "}
                <span className="highlight-code">address</span>
              </li>
              <li>
                Use the event by calling the <span className="highlight-code">emit</span> keyword inside the
                <span className="highlight-code">enlist()</span> function
              </li>
            </ul>
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
            <p className="text-lg max-w-2xl italic">✅ Success will look like this: 👇🏼</p>
          </div>

          <div className="flex justify-center top mt-4 mb-4">
            <div className="bg-gray-800 text-white p-4 rounded-lg overflow-auto mb-4">
              <pre>
                <code className="language-solidity">
                  {`deployed at 0x2279B7A0a67DB372996a5FaB50D91eAA73d2eBe6 with 283218 gas`}
                </code>
              </pre>
            </div>
          </div>
          <div className="flex justify-center top">
            <p className="text-lg text-left max-w-2xl">
              Since this will be a new contract that is deployed, you will need to enlist on the main page or using
              "Debug Contracts" tab. If you were successful, continue with the next part of the mission.
            </p>
          </div>
          <div className="flex justify-center top pt-10">
            <div className="flex justify-center top">Stuck? Join the telegram channel for this mission... </div>
            <div className="">
              <a href="https://t.me/+ZZIgax5l1dI1YjQx" target="_blank" rel="noopener noreferrer">
                🗒 Mission 1: Alpha Centauri 🚀
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SolidityContent;
