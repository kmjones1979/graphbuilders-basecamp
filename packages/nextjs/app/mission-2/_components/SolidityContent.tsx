import React from "react";
import CodeSnippet from "./CodeSnippet";

const CONTRACT_CODE = `
contract Comms {

	uint8 public channel;
	uint8 public attempt;
	bool public isCommsEstablished = false;

	event CommsEstablished(address indexed _address, bool isCommsEstablished);

	constructor() {
		channel = uint8(block.prevrandao % 6) + 1;
	}

	function establishComms() public {
		require(!isCommsEstablished, "Comms already established");

		attempt = uint8(block.prevrandao % 6) + 1;
		console.log("Attempt: %s", attempt);
		require(attempt == channel, "Attempt failed: Invalid channel, try again");

		isCommsEstablished = true;
		emit CommsEstablished(msg.sender, isCommsEstablished);
	}

	receive() external payable {}
}`;

const SolidityContent: React.FC = () => {
  return (
    <div className="flex justify-center">
      <div className="w-full p-4 space-y-6 max-w-[95vw] sm:max-w-4xl">
        {/* Mission Overview */}
        <div className="card bg-base-200 shadow-xl">
          <div className="card-body text-center space-y-4">
            <p className="text-sm sm:text-lg italic text-base-content/80">
              Congratulations on joining the Academy! Your first job as a junior cadet is to establish communications
              with the lunar base. To do this you will need to first take ownership of a special comms smart contract.
              Once you have done that you will need to establish a connection with the base by randomly generating the
              proper communication code. After that task is complete you will index all of the data into The Graph for
              the basecamp to see your success.
            </p>
          </div>
        </div>

        {/* Header Card */}
        <div className="card bg-base-200 shadow-xl">
          <div className="card-body text-center space-y-4">
            <h1 className="text-3xl sm:text-3xl font-bold">Smart Contract</h1>
            <p className="text-base sm:text-xl">
              In this part of the mission you will be creating a smart contract to establish communications with the
              lunar base.
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
                  code="git clone https://github.com/kmjones1979/graphbuilders-basecamp mission-2-comms"
                  button={true}
                />
              </div>

              <div>
                <p className="text-sm sm:text-base italic mb-2">Navigate into the project directory:</p>
                <CodeSnippet code="cd mission-2-comms" button={true} />
              </div>

              <div>
                <p className="text-sm sm:text-base italic mb-2">Checkout the branch:</p>
                <CodeSnippet code="git checkout mission-2-comms" button={true} />
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

            <div className="mockup-code text-xs sm:text-sm w-full overflow-x-auto">
              <pre className="pl-8">
                <code className="language-solidity">{CONTRACT_CODE}</code>
              </pre>
            </div>

            <p className="text-sm sm:text-base text-base-content/80 mt-6">
              This smart contract uses <code className="badge badge-ghost text-xs">block.prevrandao</code> to generate a
              random number at the time of deployment. Then by calling the{" "}
              <code className="badge badge-ghost text-xs">establishComms</code> function we can attempt to generate
              another random number and compare it to the number generated during the contract deployment. If they match
              we can establish communications with the base.
            </p>
          </div>
        </div>

        {/* Task Section */}
        <div className="card bg-base-200 shadow-xl">
          <div className="card-body p-4 sm:p-8">
            <h2 className="card-title text-xl sm:text-2xl mb-4">
              <span className="badge badge-primary">1</span>Take ownership of the contract with OpenZeppelin Ownable
            </h2>

            <p className="text-sm sm:text-base font-bold mb-4">To complete this task, follow these steps:</p>

            <ul className="list-disc list-inside space-y-2 text-sm sm:text-base text-base-content/80">
              <li>Import the Ownable contract from OpenZeppelin</li>
              <li>Inherit the contract from Ownable</li>
              <li>Pass your address to the Ownable constructor</li>
              <li>Deploy the contract</li>
            </ul>

            <div className="mt-6">
              <a
                target="_blank"
                href="https://docs.openzeppelin.com/contracts/2.x/access-control"
                className="link link-primary text-sm sm:text-base"
              >
                👉🏼 Look at this page if you get lost... OpenZeppelin (Access Control) 🔎
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
                  <code>deployed at 0x0165878A594ca255338adfa4d48449f69242Eb8F with 378023 gas</code>
                </pre>
              </div>
            </div>

            <div className="alert bg-base-300 border border-base-content/10 mt-6">
              <p className="text-sm sm:text-base text-base-content/80">
                Once you deploy your changes navigate to the "Debug Contracts" tab and call the{" "}
                <code className="badge badge-ghost text-xs">establishComms</code> function to test the functionality.
                You will need to attempt to call the function multiple times until the channel matches your attempt.
                When testing on your local network you can use the Faucet button to simulate a new block. You will know
                you are successful when the <code className="badge badge-ghost text-xs">isCommsEstablished</code>{" "}
                variable is set to true.
              </p>
            </div>
          </div>
        </div>

        {/* Support Section */}
        <div className="card bg-base-200 shadow-xl text-center">
          <div className="card-body p-4 sm:p-8">
            <h2 className="card-title justify-center text-lg sm:text-xl">Need Help?</h2>
            <p className="text-sm sm:text-base text-base-content/80">Join our Telegram support channel:</p>
            <div className="card-actions justify-center">
              <a
                href="https://t.me/+-INXFlFQJyBiYTIx"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary btn-sm sm:btn-md"
              >
                🔊 Mission 2: Comms 🚀
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SolidityContent;
