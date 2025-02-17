import React from "react";
import CodeSnippet from "./CodeSnippet";

const DEPLOY_OUTPUT = `
deploying "Moon" (tx: 0x2dea4c89a5f26850d3049c864c8151983b938568bef6668a950375ce97ee3d57)...
deployed at 0xaF938C165A25327D8884d85f4dd156736144c987 with 143057 gas
📝 Updated TypeScript contract definition file on ../nextjs/contracts/deployedContracts.ts`;

const VERIFY_OUTPUT = `
verifying Moon (0xaF938C165A25327D8884d85f4dd156736144c987) ...
waiting for result...
 => contract Moon is now verified`;

const DeployContent: React.FC = () => {
  return (
    <div className="flex justify-center">
      <div className="w-full p-4 space-y-6 max-w-[95vw] sm:max-w-4xl">
        {/* Header Card */}
        <div className="card bg-base-200 shadow-xl">
          <div className="card-body text-center space-y-4">
            <h1 className="text-3xl sm:text-3xl font-bold">Smart Contract Deployment</h1>
            <p className="text-base sm:text-xl">
              In this part of the mission you will deploy your smart contract to the network and configure the frontend
              to use the proper network.
            </p>
          </div>
        </div>

        {/* Generate Deployer Key */}
        <div className="card bg-base-200 shadow-xl">
          <div className="card-body p-4 sm:p-8">
            <h2 className="card-title text-xl sm:text-2xl mb-4">1. Generate Deployer Key</h2>
            <p className="text-sm sm:text-base text-base-content/80 mb-4">
              First, generate a new deployer key - we don't want to use the keys that come shipped with our local chain:
            </p>
            <CodeSnippet code="yarn run generate" button={true} />

            <div className="mt-6">
              <p className="text-sm sm:text-base italic mb-4">
                We will need to fund our deployer account with some testnet funds. Quick tip, use the following command
                to check your balance and display a QR code to scan with your wallet:
              </p>
              <CodeSnippet code="yarn account" button={true} />
            </div>
          </div>
        </div>

        {/* Contract Deployment */}
        <div className="card bg-base-200 shadow-xl">
          <div className="card-body p-4 sm:p-8">
            <h2 className="card-title text-xl sm:text-2xl mb-4">2. Deploy Contract</h2>
            <p className="text-sm sm:text-base text-base-content/80 mb-4">
              Next you will need to deploy your smart contract to the network. In our case we will deploy to
              baseSepolia. You can either edit your hardhat configuration file to use the defaultNetwork as baseSepolia,
              or use the following command:
            </p>

            <div className="alert bg-base-300 border border-base-content/10 mb-6">
              <div className="space-y-4">
                <p className="text-sm sm:text-base text-base-content/80">
                  If you need some baseSepolia ETH, you can get some from one of the faucets listed here:{" "}
                  <a
                    href="https://docs.base.org/docs/tools/network-faucets/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link link-primary"
                  >
                    Base Network Faucets
                  </a>
                </p>
                <p className="text-sm sm:text-base text-base-content/80">
                  Alternatively, you can use SUPERBRIDGE to bridge ETH from Sepolia to Base Sepolia:{" "}
                  <a
                    href="https://superbridge.app/base"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link link-primary"
                  >
                    Base Testnet Bridge
                  </a>
                </p>
              </div>
            </div>

            <CodeSnippet code="yarn deploy --network baseSepolia" button={true} />

            <div className="mt-6">
              <p className="text-sm sm:text-base italic mb-2">✅ Success will look like this:</p>
              <div className="mockup-code text-xs sm:text-sm w-full">
                <pre className="pl-8">
                  <code>{DEPLOY_OUTPUT}</code>
                </pre>
              </div>
            </div>
          </div>
        </div>

        {/* Contract Verification */}
        <div className="card bg-base-200 shadow-xl">
          <div className="card-body p-4 sm:p-8">
            <h2 className="card-title text-xl sm:text-2xl mb-4">3. Verify Contract</h2>
            <p className="text-sm sm:text-base text-base-content/80 mb-4">
              Last step we will want to verify our contract. This will make it easier for us to interact with it in the
              future.
            </p>
            <CodeSnippet code="yarn verify --network baseSepolia" button={true} />

            <div className="mt-6">
              <p className="text-sm sm:text-base italic mb-2">✅ Success will look like this:</p>
              <div className="mockup-code text-xs sm:text-sm w-full">
                <pre className="pl-8">
                  <code>{VERIFY_OUTPUT}</code>
                </pre>
              </div>
            </div>
          </div>
        </div>

        {/* Frontend Configuration */}
        <div className="card bg-base-200 shadow-xl">
          <div className="card-body p-4 sm:p-8">
            <h2 className="card-title text-xl sm:text-2xl mb-4">4. Configure Frontend</h2>
            <p className="text-sm sm:text-base text-base-content/80 mb-4">
              Next configure the frontend to use the proper network. To do this edit the{" "}
              <code className="badge badge-ghost text-xs">scaffold.config.ts</code> configuration file which is located
              in the <code className="badge badge-ghost text-xs">packages/nextjs</code> folder.
            </p>

            <div className="alert bg-base-300 border border-base-content/10">
              <p className="text-sm sm:text-base text-base-content/80">
                To make the frontend point to baseSepolia, change the targetNetworks to use{" "}
                <code className="badge badge-ghost text-xs">chains.baseSepolia</code>. You will get kicked out of the
                burner wallet and from now on any interactions with the smart contract should be done with a wallet you
                control, such as Metamask or a Wallet Connect enabled wallet like Rainbow wallet. You should use the
                same one that you used to sign into The Graph Builders Basecamp portal.
              </p>
            </div>

            <p className="text-sm sm:text-base mt-6">
              If you were successful, continue with the next part of the mission.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeployContent;
