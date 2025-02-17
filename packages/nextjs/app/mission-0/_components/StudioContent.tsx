import React, { useState } from "react";
import CodeSnippet from "./CodeSnippet";
import javaScriptSourceCode from "./JavaScriptSourceCode";
import { useAccount } from "wagmi";
import { gasLimit, subscriptionId } from "~~/app/config/constants";
import ClickableImage from "~~/components/ClickableImage";
import SuccessModal from "~~/components/SuccessModal";
import { useScaffoldReadContract, useScaffoldWriteContract } from "~~/hooks/scaffold-eth";

const STUDIO_STEPS = [
  {
    id: 1,
    title: "Create Subgraph in Studio",
    description: "Login and create your subgraph in The Graph Studio",
    link: {
      text: "🚀 The Graph Studio",
      url: "https://thegraph.com/studio/",
    },
    images: [
      {
        src: "/studio/01.png",
        alt: "Studio Connect",
        caption: "Connect your wallet to the studio",
      },
      {
        src: "/studio/02.png",
        alt: "Choose Wallet",
        caption: "Choose your preferred wallet type",
      },
      {
        src: "/studio/03.png",
        alt: "Confirm Connection",
        caption: "Confirm the connection in your wallet",
      },
      {
        src: "/studio/04.png",
        alt: "Sign Message",
        caption: "Sign the message to connect your wallet",
      },
      {
        src: "/studio/05.png",
        alt: "Create Subgraph",
        caption: "Click 'Create a Subgraph' on your dashboard",
      },
    ],
  },
  {
    id: 2,
    title: "Install The Graph CLI",
    description: "Install the CLI tool using npm or yarn",
    commands: ["npm install -g @graphprotocol/graph-cli", "yarn global add @graphprotocol/graph-cli"],
  },
  {
    id: 3,
    title: "Initialize Subgraph",
    description: "Create a new subgraph project outside the current project",
    command: "graph init mission0-test",
    output: `
✔ Network · Base Sepolia Testnet · base-sepolia · https://sepolia.basescan.org
✔ Source · Smart Contract · ethereum
✔ Subgraph slug · mission0-test
✔ Directory to create the subgraph in · mission0-test
✔ Contract address · 0x9D8E026b45Ec6DB59C543E7C3AF731ca3B2298e5
✔ Start block · 21199258
✔ Contract name · Welcome
✔ Index contract events as entities (Y/n) · true
  Generate subgraph
  Write subgraph to directory
✔ Create subgraph scaffold
✔ Initialize networks config
✔ Initialize subgraph repository
✔ Install dependencies with yarn
✔ Generate ABI and schema types with yarn codegen
✔ Add another contract? (y/N) · false`,
  },
  {
    id: 4,
    title: "Navigate to Subgraph Directory",
    description: "Navigate to the subgraph directory",
    command: "cd mission0-test",
  },
  {
    id: 5,
    title: "Authenticate to Studio",
    description: "Use your deploy key from the Studio",
    command: "graph auth <AUTH_KEY>",
  },
  {
    id: 6,
    title: "Generate Types and Build",
    description: "Generate types and build the WASM bundle",
    command: "graph codegen && graph build",
  },
  {
    id: 7,
    title: "Deploy Subgraph",
    description: "Deploy to the studio with your subgraph name",
    command: "graph deploy <SUBGRAPH_NAME>",
    image: {
      src: "/orientation/7.png",
      alt: "Successful deployment",
      caption: "Your subgraph should be syncing or synced in the studio",
    },
  },
];

const VALIDATION_QUERY = `
{
  welcomeMessageChangeds(first: 1) {
    id
    newMessage
    blockNumber
    blockTimestamp
    transactionHash
  }
}`;

const StudioContent: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [queryURL, setQueryURL] = useState("");
  const [isValidated, setIsValidated] = useState(false);
  const [responseMessage, setResponseMessage] = useState("");
  const currentMission = 0;

  const { writeContractAsync: writeValidatorAsync } = useScaffoldWriteContract("Validator");
  const { address } = useAccount();
  const { data: accountMinted } = useScaffoldReadContract({
    contractName: "Validator",
    functionName: "accountMinted",
    args: [0, address],
  });

  const handlePrecheck = async () => {
    try {
      const response = await fetch(queryURL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ query: `{ welcomeMessageChangeds(first: 1) { newMessage } }` }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(`Error ${response.status}: ${errorData.message || "An error occurred"}`);
      }

      const data = await response.json();
      const newMessage = data.data.welcomeMessageChangeds[0]?.newMessage;

      if (newMessage === "Welcome to The Graph Builders Basecamp!") {
        setIsValidated(true);
        setResponseMessage('Success! Click "Submit" to validate your results onchain.');
      } else {
        setIsValidated(false);
        setResponseMessage("Failed! Please check your subgraph code and try again.");
      }
    } catch (e) {
      console.error("Error during precheck:", e);
      setResponseMessage(e instanceof Error ? `Error during precheck: ${e.message}` : "An unexpected error occurred");
      setIsValidated(false);
    }
  };

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

  return (
    <div className="flex justify-center">
      <div className="w-full p-4 space-y-6 max-w-[95vw] sm:max-w-4xl">
        {/* Header Card */}
        <div className="card bg-base-200 shadow-xl">
          <div className="card-body text-center space-y-4">
            <h1 className="text-3xl sm:text-3xl font-bold">Subgraph Studio</h1>
            <p className="text-base sm:text-xl">
              In this part of the mission you will need to create a subgraph in The Graph Studio and then deploy it to
              the network.
            </p>
          </div>
        </div>

        {/* Studio Steps */}
        <div className="space-y-6">
          {STUDIO_STEPS.map(step => (
            <div key={step.id} className="card bg-base-200 shadow-xl">
              <div className="card-body p-4 sm:p-8">
                <h2 className="card-title text-lg sm:text-xl flex flex-wrap items-center gap-2">
                  <span className="badge badge-primary">{step.id}</span>
                  {step.title}
                </h2>
                <p className="text-sm sm:text-base text-base-content/80">{step.description}</p>

                {step.link && (
                  <div className="mt-4">
                    <a
                      href={step.link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-primary btn-sm sm:btn-md"
                    >
                      {step.link.text}
                    </a>
                  </div>
                )}

                {step.commands?.map((command, index) => (
                  <div key={index} className="w-full overflow-x-auto mt-4">
                    <CodeSnippet code={command} button={true} />
                  </div>
                ))}

                {step.command && (
                  <div className="w-full overflow-x-auto mt-4">
                    <CodeSnippet code={step.command} button={true} />
                  </div>
                )}

                {step.output && (
                  <div className="mt-4">
                    <p className="text-xs sm:text-sm text-base-content/70 mb-2">Expected output:</p>
                    <div className="mockup-code text-xs sm:text-sm">
                      <pre>
                        <code>{step.output}</code>
                      </pre>
                    </div>
                  </div>
                )}

                {step.images?.map((image, index) => (
                  <div key={index} className="mt-4">
                    <p className="text-xs sm:text-sm text-base-content/70 mb-2">{image.caption}</p>
                    <div className="max-w-xl mx-auto">
                      <ClickableImage src={image.src} alt={image.alt} caption="Click to enlarge" />
                    </div>
                  </div>
                ))}

                {step.image && (
                  <div className="mt-4">
                    <p className="text-xs sm:text-sm text-base-content/70 mb-2">{step.image.caption}</p>
                    <div className="max-w-xl mx-auto">
                      <ClickableImage
                        src={step.image.src}
                        alt={step.image.alt}
                        caption={step.image.caption}
                        className="max-w-xl w-full"
                      />
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Validation Section */}
        <div className="card bg-base-200 shadow-xl">
          <div className="card-body p-4 sm:p-8">
            <h2 className="card-title text-lg sm:text-2xl">Validation</h2>
            <div className="alert bg-base-300 border border-base-content/10 mt-4">
              <div>
                <p className="font-bold text-sm sm:text-base">Important:</p>
                <p className="text-sm sm:text-base text-base-content/80">
                  Your subgraph must return the string "Welcome to The Graph Builders Basecamp!" for the{" "}
                  <code className="badge badge-ghost text-xs">newMessage</code> field.
                </p>
              </div>
            </div>

            <div className="mt-4">
              <p className="text-xs sm:text-sm text-base-content/70 mb-2">Validation Query:</p>
              <div className="mockup-code text-xs sm:text-sm">
                <pre className="pl-8">
                  <code>{VALIDATION_QUERY}</code>
                </pre>
              </div>
            </div>

            <div className="card-actions justify-center mt-6">
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
              If you have any issues, reach out in our Telegram support channel:
            </p>
            <div className="card-actions justify-center">
              <a
                href="https://t.me/+fafK-afX2aM0ZWZh"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary btn-sm sm:btn-md"
              >
                👩‍🚀 Scaffold-ETH Subgraph Extension Support
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
      </div>
    </div>
  );
};

export default StudioContent;
