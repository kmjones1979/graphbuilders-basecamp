import React, { useState } from "react";
import CodeSnippet from "./CodeSnippet";
import javaScriptSourceCode from "./JavaScriptSourceCode";
import { useAccount } from "wagmi";
import { gasLimit, subscriptionId } from "~~/app/config/constants";
import ClickableImage from "~~/components/ClickableImage";
import SuccessModal from "~~/components/SuccessModal";
import { useScaffoldReadContract, useScaffoldWriteContract } from "~~/hooks/scaffold-eth";

const NETWORKS_JSON = `{
  "localhost": {
    "Moon": {
      "address": "0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512"
    }
  },
  "base-sepolia": {
    "Moon": {
      "address": "0xeF938C265A15327D8884d83f4dd154736144c987"
    }
  }
}`;

const GRAPHQL_QUERY = `{
  holders(first: 1, orderDirection: desc, orderBy: blockTimestamp) {
    balance
    blockNumber
    blockTimestamp
    id
    transactionHash
    transfers(first: 1) {
      from
      to {
        id
      }
    }
  }
}`;

const StudioContent: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [queryURL, setQueryURL] = useState("");
  const [isValidated, setIsValidated] = useState(false);
  const [responseMessage, setResponseMessage] = useState("");
  const currentMission = 3;

  const { writeContractAsync: writeValidatorAsync } = useScaffoldWriteContract("Validator");
  const { address } = useAccount();
  const { data: accountMinted } = useScaffoldReadContract({
    contractName: "Validator",
    functionName: "accountMinted",
    args: [3, address],
  });

  const handleSubmit = async () => {
    try {
      await writeValidatorAsync({
        functionName: "validateMission",
        args: [currentMission, javaScriptSourceCode, BigInt(subscriptionId), gasLimit, queryURL],
      });
      setIsModalOpen(false);
    } catch (e) {
      console.error("Error submitting URL:", e);
    }
  };

  const handlePrecheck = async () => {
    try {
      const account = address?.toLowerCase();
      const response = await fetch(queryURL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ query: GRAPHQL_QUERY }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(`Error ${response.status}: ${errorData.message || "An error occurred"}`);
      }

      const data = await response.json();
      console.log("GraphQL Response:", data);

      const subgraphData = data.data.holders[0]?.transfers[0].to.id.toLowerCase();
      if (subgraphData === account) {
        setIsValidated(true);
        setResponseMessage('Success! Click "Submit" to validate your results onchain.');
      } else {
        setIsValidated(false);
        setResponseMessage("Failed! Please check your subgraph code and try again.");
      }
    } catch (e) {
      console.error("Error during precheck:", e);
      setResponseMessage(
        e instanceof Error ? `Error during precheck: ${e.message}` : "An unexpected error occurred. Please try again.",
      );
    }
  };

  return (
    <div className="flex justify-center">
      <div className="w-full p-4 space-y-6 max-w-[95vw] sm:max-w-4xl">
        {/* Header Card */}
        <div className="card bg-base-200 shadow-xl">
          <div className="card-body text-center space-y-4">
            <h1 className="text-3xl sm:text-3xl font-bold">Subgraph Studio</h1>
            <p className="text-base sm:text-xl">
              In this part of the mission you will deploy your subgraph to The Graph Subgraph Studio. The studio is a
              place where you can create, test, and deploy subgraphs before you publish them to the decentralized
              network.
            </p>
          </div>
        </div>

        {/* Studio Setup */}
        <div className="card bg-base-200 shadow-xl">
          <div className="card-body p-4 sm:p-8">
            <h2 className="card-title text-xl sm:text-2xl mb-4">1. Create Subgraph in Studio</h2>
            <p className="text-sm sm:text-base text-base-content/80 mb-4">
              First, create a subgraph in the studio by visiting:
            </p>
            <a
              href="https://thegraph.com/studio/"
              target="_blank"
              rel="noopener noreferrer"
              className="link link-primary text-sm sm:text-base"
            >
              🚀 https://thegraph.com/studio/
            </a>

            <div className="space-y-6 mt-6">
              <div>
                <p className="text-sm sm:text-base italic mb-2">
                  Connect your wallet to the studio. Click the "Connect" button on the top right:
                </p>
                <ClickableImage src="/studio/01.png" alt="Studio Connect" caption="Click to enlarge" />
              </div>

              <div>
                <p className="text-sm sm:text-base italic mb-2">Choose your wallet type:</p>
                <ClickableImage src="/studio/02.png" alt="Wallet Selection" caption="Click to enlarge" />
              </div>

              <div>
                <p className="text-sm sm:text-base italic mb-2">Confirm the connection in your wallet:</p>
                <ClickableImage src="/studio/03.png" alt="Wallet Confirmation" caption="Click to enlarge" />
              </div>

              <div>
                <p className="text-sm sm:text-base italic mb-2">Sign the message to connect:</p>
                <ClickableImage src="/studio/04.png" alt="Sign Message" caption="Click to enlarge" />
              </div>

              <div>
                <p className="text-sm sm:text-base italic mb-2">Click "Create a Subgraph" on your dashboard:</p>
                <ClickableImage src="/studio/05.png" alt="Create Subgraph" caption="Click to enlarge" />
              </div>

              <p className="text-sm sm:text-base italic">Name your subgraph and click "Create Subgraph"</p>
            </div>
          </div>
        </div>

        {/* Configuration */}
        <div className="card bg-base-200 shadow-xl">
          <div className="card-body p-4 sm:p-8">
            <h2 className="card-title text-xl sm:text-2xl mb-4">2. Update Configuration</h2>
            <p className="text-sm sm:text-base text-base-content/80 mb-4">
              Now that we have a subgraph in the studio, update your{" "}
              <code className="badge badge-ghost text-xs">networks.json</code> configuration to reference your newly
              deployed contract on base-sepolia. This file is located in{" "}
              <code className="badge badge-ghost text-xs">packages/subgraph</code>:
            </p>

            <div className="mockup-code text-xs sm:text-sm w-full">
              <pre>
                <code>{NETWORKS_JSON}</code>
              </pre>
            </div>

            <div className="mt-6">
              <p className="text-sm sm:text-base text-base-content/80">
                Next, update the deploy command in{" "}
                <code className="badge badge-ghost text-xs">packages/subgraph/package.json</code> to use your subgraph
                name:
              </p>
              <div className="mockup-code text-xs sm:text-sm w-full mt-2">
                <pre>
                  <code>graph deploy mymission</code>
                </pre>
              </div>
            </div>

            <div className="alert bg-base-300 border border-base-content/10 mt-6">
              <p className="text-sm sm:text-base text-base-content/80">
                Update your <code className="badge badge-ghost text-xs">subgraph.yaml</code> to include the proper
                network (e.g. base-sepolia). Consider adding the startBlock from the contract creation transaction
                (found in the block explorer).
              </p>
            </div>
          </div>
        </div>

        {/* Deployment */}
        <div className="card bg-base-200 shadow-xl">
          <div className="card-body p-4 sm:p-8">
            <h2 className="card-title text-xl sm:text-2xl mb-4">3. Deploy to Studio</h2>
            <p className="text-sm sm:text-base text-base-content/80 mb-4">Deploy your subgraph to the studio with:</p>
            <CodeSnippet code="yarn studio-ship" button={true} />

            <div className="mt-6">
              <p className="text-sm sm:text-base italic mb-2">
                If successful, you should see your subgraph syncing or already synced in the studio:
              </p>
              <ClickableImage src="/studio/08-3.png" alt="Studio Deploy" caption="Click to enlarge" />
            </div>

            <p className="text-sm sm:text-base text-base-content/80 mt-6">
              Congratulations! You have now successfully deployed your subgraph to the studio! To complete the mission,
              navigate to the Endpoints tab on your subgraph and submit your QueryURL.
            </p>
          </div>
        </div>

        {/* Validation */}
        <div className="card bg-base-200 shadow-xl">
          <div className="card-body p-4 sm:p-8">
            <h2 className="card-title text-xl sm:text-2xl mb-4">Validation</h2>
            <div className="alert alert-warning">
              <p className="text-sm sm:text-base">
                <span className="font-bold">Important:</span> For proper validation, the{" "}
                <code className="badge badge-ghost text-xs">id</code> in{" "}
                <code className="badge badge-ghost text-xs">holders.transfers.to</code> must match the address you
                submit from.
              </p>
            </div>

            <div className="mockup-code text-xs sm:text-sm w-full mt-6">
              <pre>
                <code className="language-graphql">{GRAPHQL_QUERY}</code>
              </pre>
            </div>

            <div className="card-actions justify-center mt-6">
              {accountMinted ? (
                <div className="badge badge-success badge-lg">Mission Complete</div>
              ) : (
                <button className="btn btn-primary" onClick={() => setIsModalOpen(true)}>
                  Submit Mission
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Support Section */}
        <div className="card bg-base-200 shadow-xl text-center">
          <div className="card-body p-4 sm:p-8">
            <h2 className="card-title justify-center text-lg sm:text-xl">Need Help?</h2>
            <p className="text-sm sm:text-base text-base-content/80">
              If you have any issues, reach out on our Telegram channel:
            </p>
            <div className="card-actions justify-center">
              <a
                href="https://t.me/+fafK-afX2aM0ZWZh"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary btn-sm sm:btn-md"
              >
                👉 Scaffold-ETH Subgraph Extension Support
              </a>
            </div>
          </div>
        </div>

        {/* Validation Modal */}
        {isModalOpen && (
          <div className="modal modal-open">
            <div className="modal-box w-11/12 max-w-xl p-4 sm:p-6">
              <h2 className="font-bold text-lg sm:text-xl mb-4">Submit Query URL</h2>
              <p className="text-sm sm:text-base text-base-content/80">
                Enter your subgraph Query URL from the Endpoints tab in Subgraph Studio.
              </p>
              <div className="alert alert-warning mt-4">
                <p className="text-sm sm:text-base">
                  Note: The validation will take a few minutes. Please be patient and only submit once.
                </p>
              </div>
              <input
                type="text"
                placeholder="Enter URL"
                className="input input-bordered w-full mt-4"
                value={queryURL}
                onChange={e => setQueryURL(e.target.value)}
              />
              <p className="mt-2 text-sm sm:text-base text-base-content/80">{responseMessage}</p>
              <div className="modal-action">
                <button className="btn btn-sm sm:btn-md" onClick={handlePrecheck}>
                  Precheck
                </button>
                <button
                  className={`btn btn-sm sm:btn-md ${isValidated ? "btn-success" : ""}`}
                  disabled={!isValidated}
                  onClick={handleSubmit}
                >
                  Submit
                </button>
                <button className="btn btn-sm sm:btn-md" onClick={() => setIsModalOpen(false)}>
                  Close
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
      <SuccessModal accountMinted={accountMinted ?? false} mission={currentMission} />
    </div>
  );
};

export default StudioContent;
