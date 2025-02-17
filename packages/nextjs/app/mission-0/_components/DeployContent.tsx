import React from "react";
import CodeSnippet from "./CodeSnippet";

const DEPLOYMENT_STEPS = [
  {
    id: 1,
    title: "Generate Deployer Key",
    description: "Generate a new deployer key (don't use the local chain keys)",
    command: "yarn run generate",
    image: {
      src: "/orientation/4.png",
      alt: "Generate deployer key success",
    },
  },
  {
    id: 2,
    title: "Fund Your Account",
    description: "Check your balance and get a QR code for funding",
    command: "yarn account",
    image: {
      src: "/orientation/5.png",
      alt: "Account balance check",
    },
    resources: [
      {
        text: "Base Network Faucets",
        url: "https://docs.base.org/docs/tools/network-faucets/",
        description: "Get testnet ETH from Base faucets",
      },
      {
        text: "Base Testnet Bridge",
        url: "https://superbridge.app/base",
        description: "Bridge ETH from Sepolia to Base Sepolia",
      },
    ],
  },
  {
    id: 3,
    title: "Deploy to Base Sepolia",
    description: "Deploy your contract to the Base Sepolia network",
    command: "yarn deploy --network baseSepolia",
    output: `deploying "Welcome" (tx: 0x1e0f9c6d9ae147ff475169b240d226529874d921c86371cecaef8acf6c09e728)...: 
deployed at 0xeAa2c3ae9a2Ee1dD3df0374A71C52E7335D552ac with 221179 gas
📝 Updated TypeScript contract definition file on ../nextjs/contracts/deployedContracts.ts`,
  },
  {
    id: 4,
    title: "Verify Contract",
    description: "Verify your contract on Base Sepolia for better interaction",
    command: "yarn verify --network baseSepolia",
    output: `verifying Welcome (0xeAa2c3ae9a2Ee1dD3df0374A71C52E7335D552ac) ...
waiting for result...
 => contract Welcome is now verified`,
  },
];

const FRONTEND_CONFIG = {
  title: "Configure Frontend",
  description: "Update the frontend to use Base Sepolia network",
  file: "scaffold.config.ts",
  path: "packages/nextjs",
  steps: [
    "Change targetNetworks to use chains.baseSepolia",
    "Reconnect with your own wallet (e.g., MetaMask)",
    "Use the same wallet you used to sign into The Graph Builders Basecamp portal",
  ],
};

const DeployContent: React.FC = () => {
  return (
    <div className="flex justify-center">
      <div className="w-full p-4 space-y-6 max-w-[95vw] sm:max-w-4xl">
        {/* Header */}
        <div className="text-center space-y-4">
          <h1 className="text-3xl sm:text-4xl font-bold">Smart Contract Deployment</h1>
          <p className="text-base sm:text-xl text-base-content/80">
            Deploy your smart contract to Base Sepolia to index the data on The Graph's decentralized network.
          </p>
        </div>

        {/* Deployment Steps */}
        <div className="space-y-6">
          {DEPLOYMENT_STEPS.map(step => (
            <div key={step.id} className="card bg-base-200 shadow-xl">
              <div className="card-body p-4 sm:p-8">
                <h2 className="card-title text-lg sm:text-xl flex flex-wrap items-center gap-2">
                  <span className="badge badge-primary">{step.id}</span>
                  {step.title}
                </h2>
                <p className="text-sm sm:text-base text-base-content/80">{step.description}</p>

                <div className="w-full overflow-x-auto mt-4">
                  <CodeSnippet code={step.command} button={true} />
                </div>

                {step.resources?.map((resource, index) => (
                  <div key={index} className="alert bg-base-300 border border-base-content/10 mt-4">
                    <div>
                      <p className="text-sm sm:text-base text-base-content/80">
                        {resource.description}{" "}
                        <a href={resource.url} target="_blank" rel="noopener noreferrer" className="link link-primary">
                          {resource.text}
                        </a>
                      </p>
                    </div>
                  </div>
                ))}

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
              </div>
            </div>
          ))}
        </div>

        {/* Frontend Configuration */}
        <div className="card bg-base-200 shadow-xl">
          <div className="card-body p-4 sm:p-8">
            <h2 className="card-title text-lg sm:text-xl flex flex-wrap items-center gap-2">
              <span className="badge badge-primary">5</span>
              {FRONTEND_CONFIG.title}
            </h2>
            <p className="text-sm sm:text-base text-base-content/80">{FRONTEND_CONFIG.description}</p>

            <div className="mt-4">
              <p className="text-xs sm:text-sm text-base-content/70">
                Edit <code className="badge badge-ghost text-xs">{FRONTEND_CONFIG.file}</code> in{" "}
                <code className="badge badge-ghost text-xs">{FRONTEND_CONFIG.path}</code>
              </p>

              <div className="alert bg-base-300 border border-base-content/10 mt-4">
                <div>
                  <p className="font-bold text-sm sm:text-base">Required Changes:</p>
                  <ul className="list-disc pl-6 mt-2 text-sm sm:text-base">
                    {FRONTEND_CONFIG.steps.map((step, index) => (
                      <li key={index} className="text-base-content/80">
                        {step}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Next Section */}
        <div className="card bg-base-200 shadow-xl text-center">
          <div className="card-body p-4 sm:p-8">
            <h2 className="card-title justify-center text-lg sm:text-xl">Ready to Continue?</h2>
            <p className="text-sm sm:text-base">
              Once you've completed these steps successfully, proceed to the next part of the mission.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeployContent;
