import React, { useState } from "react";
import CodeSnippet from "./CodeSnippet";
import { useAccount } from "wagmi";
import { gasLimit, subscriptionId } from "~~/app/config/constants";
import SuccessModal from "~~/components/SuccessModal";
import { useScaffoldReadContract, useScaffoldWriteContract } from "~~/hooks/scaffold-eth";

const StudioContent: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [queryURL, setQueryURL] = useState("");
  const [isValidated, setIsValidated] = useState(false);
  const [responseMessage, setResponseMessage] = useState("");
  const currentMission = 1;
  const javaScriptSourceCode = `
const account = args[0].toLowerCase()
const query_url = args[1]

const graphRequest = Functions.makeHttpRequest({
  url: \`\${query_url}\`,
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },

  data: {
    query: \`
      {
        enlisteds(
          first: 1
          orderBy: blockTimestamp
          orderDirection: desc
          where: { account: "\${account}" }
        ) {
          id
          account
          blockNumber
          blockTimestamp
          transactionHash
        }
      }
    \`,
  },
})

const [graphResponse] = await Promise.all([graphRequest])
let id = []
if (!graphResponse.error) {
  for (let i = 0; i < 1; i++) {
    id.push(graphResponse.data.data.enlisteds[i].account.toLowerCase())
  }
} else {
  console.log("graphResponse Error, ", graphResponse)
}

if (id[0] === account) {
  return Functions.encodeUint256(1)
} else {
  return Functions.encodeUint256(0)
}
`;

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
          query: `
          {
            enlisteds(
              first: 1
              orderBy: blockTimestamp
              orderDirection: desc
              where: { account: "${account?.toLowerCase()}" }
            ) {
              id
              account
              blockNumber
              blockTimestamp
              transactionHash
            }
          }
          `,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(`Error ${response.status}: ${errorData.message || "An error occurred"}`);
      }

      const data = await response.json();

      console.log("GraphQL Response:", data);

      const id = data.data.enlisteds[0]?.account.toLowerCase();
      if (id === account) {
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
    args: [1, address],
  });

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
              First, you'll need to create a new subgraph in the Subgraph Studio:
            </p>
            <div className="space-y-4">
              <a
                href="https://thegraph.com/studio/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary btn-sm sm:btn-md"
              >
                🚀 Open Subgraph Studio
              </a>
            </div>
          </div>
        </div>

        {/* Authentication */}
        <div className="card bg-base-200 shadow-xl">
          <div className="card-body p-4 sm:p-8">
            <h2 className="card-title text-xl sm:text-2xl mb-4">2. Authenticate CLI</h2>
            <p className="text-sm sm:text-base text-base-content/80 mb-4">
              Get your deploy key from the Subgraph Studio and authenticate the Graph CLI:
            </p>
            <CodeSnippet code="graph auth --studio <DEPLOY_KEY>" button={true} />
          </div>
        </div>

        {/* Deployment */}
        <div className="card bg-base-200 shadow-xl">
          <div className="card-body p-4 sm:p-8">
            <h2 className="card-title text-xl sm:text-2xl mb-4">3. Deploy to Studio</h2>
            <p className="text-sm sm:text-base text-base-content/80 mb-4">
              Deploy your subgraph to the Subgraph Studio. Make sure you're in the subgraph directory:
            </p>
            <div className="space-y-4">
              <div>
                <p className="text-sm sm:text-base italic mb-2">First, navigate into your subgraph directory:</p>
                <CodeSnippet code="cd mission1-test" button={true} />
              </div>
              <div>
                <p className="text-sm sm:text-base italic mb-2">Build your subgraph:</p>
                <CodeSnippet code="graph codegen && graph build" button={true} />
              </div>

              <div>
                <p className="text-sm sm:text-base italic mb-2">Deploy to the studio:</p>
                <CodeSnippet code="graph deploy --studio <SUBGRAPH_NAME>" button={true} />
              </div>
            </div>

            <div className="mt-6">
              <p className="text-sm sm:text-base italic mb-2">✅ Success will look like this:</p>
              <div className="mockup-code text-xs sm:text-sm">
                <pre className="pl-8">
                  <code>{`
Build completed: QmYour1pfsHash...
  
Deployed to https://api.studio.thegraph.com/query/<YOUR_ID>/<SUBGRAPH_NAME>
  
Subgraph endpoints:
Queries (HTTP):     https://api.studio.thegraph.com/query/<YOUR_ID>/<SUBGRAPH_NAME>/version/latest`}</code>
                </pre>
              </div>
            </div>
          </div>
        </div>

        {/* Testing */}
        <div className="card bg-base-200 shadow-xl">
          <div className="card-body p-4 sm:p-8">
            <h2 className="card-title text-xl sm:text-2xl mb-4">4. Test Your Deployment</h2>
            <p className="text-sm sm:text-base text-base-content/80 mb-4">
              Once deployed, you can test your subgraph in the Subgraph Studio's playground. Try the same query we used
              locally:
            </p>

            <div className="mockup-code text-xs sm:text-sm">
              <pre className="pl-8">
                <code>{`
query MyQuery {
  enlisteds(first: 10, orderBy: blockTimestamp, orderDirection: asc) {
    id
    account
    blockNumber
    blockTimestamp
    transactionHash
  }
}`}</code>
              </pre>
            </div>

            <div className="alert bg-base-300 border border-base-content/10 mt-6">
              <div>
                <p className="text-sm sm:text-base text-base-content/80">
                  <span className="font-bold">Note:</span> Make sure to save the Query URL from the Playground - you'll
                  need it for the next step!
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Validation */}
        <div className="card bg-base-200 shadow-xl">
          <div className="card-body p-4 sm:p-8">
            <h2 className="card-title text-xl sm:text-2xl mb-4">5. Submit for Validation</h2>
            <p className="text-sm sm:text-base text-base-content/80 mb-4">
              Once you've confirmed your subgraph is working correctly in the Studio, submit your Query URL for
              validation.
            </p>

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
                  Note: Click "Precheck" first then "Submit". Validation will take anywhere from 1-5 minutes. (Check the
                  browser console output to troubleshoot)
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

        {/* Support Section */}
        <div className="card bg-base-200 shadow-xl text-center">
          <div className="card-body p-4 sm:p-8">
            <h2 className="card-title justify-center text-lg sm:text-xl">Need Help?</h2>
            <p className="text-sm sm:text-base text-base-content/80">Join our Telegram support channel:</p>
            <div className="card-actions justify-center">
              <a
                href="https://t.me/+ZZIgax5l1dI1YjQx"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary btn-sm sm:btn-md"
              >
                🗒 Mission 1: Alpha Centauri Support
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudioContent;
