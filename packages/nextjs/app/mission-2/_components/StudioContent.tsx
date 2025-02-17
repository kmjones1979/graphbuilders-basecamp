import React, { useState } from "react";
import CodeSnippet from "./CodeSnippet";
import javaScriptSourceCode from "./JavaScriptSourceCode";
import { useAccount } from "wagmi";
import { gasLimit, subscriptionId } from "~~/app/config/constants";
import SuccessModal from "~~/components/SuccessModal";
import { useScaffoldReadContract, useScaffoldWriteContract } from "~~/hooks/scaffold-eth";

const NETWORKS_JSON = `{
  "localhost": {
    "Comms": {
      "address": "0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512"
    }
  },
  "base-sepolia": {
    "Comms": {
      "address": "0x26b255424D71f00Efc718e2B182714957d76Cc64"
    }
  }
}`;

const GRAPHQL_QUERY = `{
  commsEstablisheds(first: 1) {
    account
    blockNumber
    blockTimestamp
    id
    isCommsEstablished
    transactionHash
  }
}`;

const StudioContent: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [queryURL, setQueryURL] = useState("");
  const [isValidated, setIsValidated] = useState(false);
  const [responseMessage, setResponseMessage] = useState("");
  const currentMission = 2;
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
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          query: GRAPHQL_QUERY,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(`Error ${response.status}: ${errorData.message || "An error occurred"}`);
      }

      const data = await response.json();

      console.log("GraphQL Response:", data);

      const subgraphData = data.data.commsEstablisheds[0]?.account.toLowerCase();
      if (subgraphData === account) {
        setIsValidated(true);
        setResponseMessage('Success! Click "Submit" to validate your results onchain.');
        console.log('Success! Click "Submit" to validate your results onchain.');
      } else {
        setIsValidated(false);
        setResponseMessage("Failed! Please check your subgraph code and try again.");
        console.log("Failed! Please check your subgraph code and try again.");
      }
    } catch (e) {
      console.error("Error during precheck:", e);

      if (e instanceof Error) {
        setResponseMessage(`Error during precheck: ${e.message}`);
      } else {
        setResponseMessage("An unexpected error occurred. Please try again.");
      }
    }
  };

  const { writeContractAsync: writeValidatorAsync } = useScaffoldWriteContract("Validator");

  const { address } = useAccount();
  const { data: accountMinted } = useScaffoldReadContract({
    contractName: "Validator",
    functionName: "accountMinted",
    args: [2, address],
  });

  return (
    <div className="flex justify-center">
      <div className="w-full p-4 space-y-6 max-w-[95vw] sm:max-w-4xl">
        {/* Header Card */}
        <div className="card bg-base-200 shadow-xl">
          <div className="card-body text-center space-y-4">
            <h1 className="text-3xl sm:text-3xl font-bold">Subgraph Studio</h1>
            <p className="text-base sm:text-xl">
              In this part of the mission you will deploy your subgraph to The Graph Subgraph Studio.
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
                  You will need to connect your wallet to the studio to create a subgraph. Click the "Connect" button on
                  the top right of the screen.
                </p>
                <img className="rounded-lg border border-base-300" src="/studio/01.png" alt="Studio Connect" />
              </div>

              <div>
                <p className="text-sm sm:text-base italic mb-2">Choose the wallet type you would like to connect.</p>
                <img className="rounded-lg border border-base-300" src="/studio/02.png" alt="Wallet Selection" />
              </div>

              <div>
                <p className="text-sm sm:text-base italic mb-2">Confirm the connection in your wallet.</p>
                <img className="rounded-lg border border-base-300" src="/studio/03.png" alt="Wallet Confirmation" />
              </div>

              <div>
                <p className="text-sm sm:text-base italic mb-2">Sign the message to connect your wallet.</p>
                <img className="rounded-lg border border-base-300" src="/studio/04.png" alt="Message Signing" />
              </div>

              <div>
                <p className="text-sm sm:text-base italic mb-2">
                  On your main subgraph dashboard, click the "Create a Subgraph" button.
                </p>
                <img className="rounded-lg border border-base-300" src="/studio/05.png" alt="Create Subgraph" />
              </div>

              <div>
                <p className="text-sm sm:text-base italic mb-2">Name your subgraph and click "Create Subgraph".</p>
              </div>
            </div>
          </div>
        </div>

        {/* Configuration */}
        <div className="card bg-base-200 shadow-xl">
          <div className="card-body p-4 sm:p-8">
            <h2 className="card-title text-xl sm:text-2xl mb-4">2. Update Configuration</h2>
            <p className="text-sm sm:text-base text-base-content/80 mb-4">
              Now that we have a subgraph in the studio available to deploy to, we want to update our{" "}
              <code className="badge badge-ghost text-xs">networks.json</code> configuration file to reference our newly
              deployed contract to base-sepolia. The Graph configures this as{" "}
              <code className="badge badge-ghost text-xs">base-sepolia</code>. This file is located in the{" "}
              <code className="badge badge-ghost text-xs">packages/subgraph</code> folder.
            </p>

            <div className="mockup-code text-xs sm:text-sm w-full">
              <pre>
                <code>{NETWORKS_JSON}</code>
              </pre>
            </div>
          </div>
        </div>

        {/* Deployment */}
        <div className="card bg-base-200 shadow-xl">
          <div className="card-body p-4 sm:p-8">
            <h2 className="card-title text-xl sm:text-2xl mb-4">3. Deploy to Studio</h2>
            <p className="text-sm sm:text-base text-base-content/80 mb-4">
              Next, we need to update the deploy command for our subgraph package to use the name we configured in the
              studio. Update the "graph deploy" command in{" "}
              <code className="badge badge-ghost text-xs">packages/subgraph/package.json</code> to use the name of your
              subgraph. In my case it is "mission2":
            </p>

            <CodeSnippet code="graph deploy <SUBGRAPH_NAME>" button={false} />

            <div className="alert bg-base-300 border border-base-content/10 mt-6">
              <p className="text-sm sm:text-base text-base-content/80">
                You will need to update your <code className="badge badge-ghost text-xs">subgraph.yaml</code> file to
                include the proper network (e.g. base-sepolia). You also might want to add the startBlock to the
                subgraph manifest. You can get this from the block explorer and look at the contract creation
                transaction.
              </p>
            </div>

            <div className="mt-6">
              <p className="text-sm sm:text-base italic mb-2">Deploy your subgraph to the studio:</p>
              <CodeSnippet code="yarn studio-ship" button={true} />
            </div>

            <div className="mt-6">
              <p className="text-sm sm:text-base italic mb-2">
                If you did this part correctly, you should see your subgraph syncing or potentially already synced in
                the studio:
              </p>
              <img
                className="rounded-lg border border-base-300 mt-2"
                src="/studio/08-2.png"
                alt="Studio Deploy Success"
              />
            </div>
          </div>
        </div>

        {/* Validation */}
        <div className="card bg-base-200 shadow-xl">
          <div className="card-body p-4 sm:p-8">
            <h2 className="card-title text-xl sm:text-2xl mb-4">4. Submit for Validation</h2>
            <p className="text-sm sm:text-base text-base-content/80 mb-4">
              Congratulations! You have now successfully deployed your subgraph to the studio! To complete the mission
              navigate to the Endpoints tab on your subgraph and submit your QueryURL.
            </p>

            <div className="alert alert-warning mb-6">
              <p className="text-sm sm:text-base">
                <span className="font-bold">Important:</span> In order for your mission to be properly validated, the
                value of <code className="badge badge-ghost text-xs">account</code> in this query will need to
                successfully return the address of the account you submit the mission from.
              </p>
            </div>

            <div className="mockup-code text-xs sm:text-sm w-full mb-6">
              <pre>
                <code className="language-graphql">{GRAPHQL_QUERY}</code>
              </pre>
            </div>

            <div className="card-actions justify-center">
              {accountMinted ? (
                <div className="badge badge-success badge-lg">Mission Complete</div>
              ) : (
                <button className="btn btn-primary btn-sm sm:btn-md" onClick={() => setIsModalOpen(true)}>
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
              If you have any issues submitting your results, please reach out to us on the official Telegram channel:
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
              <div className="alert alert-warning mt-4 text-sm sm:text-base">
                <p>
                  Note: The validation will take a few minutes to complete. Please be patient and only submit once.
                  (Check the browser console output to troubleshoot)
                </p>
              </div>
              <input
                type="text"
                placeholder="Enter URL"
                className="input input-bordered w-full mt-4 text-sm"
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

        <SuccessModal accountMinted={accountMinted ?? false} mission={currentMission} />
      </div>
    </div>
  );
};

export default StudioContent;
