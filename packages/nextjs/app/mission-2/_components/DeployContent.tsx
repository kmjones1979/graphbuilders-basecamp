import React from "react";
import CodeSnippet from "./CodeSnippet";

const DeployContent: React.FC = () => {
  return (
    <>
      {/* Part 3 */}
      <div className="flex justify-center">
        <div className="max-w-sm sm:max-w-2xl w-full p-4">
          <div className="flex justify-center text-center top pt-4">
            <h1 className="text-3xl pt-4 max-w-2xl italic font-bold">Smart Contract Deployment</h1>
          </div>
          <div className="flex justify-center top">
            <p className="text-lg text-left max-w-2xl">
              Up to this point we have been doing local first development. In this part of the mission you will deploy
              your smart contract to a public network. This way we can index the data on The Graph's decentralized
              network.
            </p>
          </div>
          <div className="flex justify-center top mt-4 mb-4">
            <p className="text-lg max-w-2xl font-bold">
              1. In order to do this you will need to run the following command to generate a deployer key, we do not
              want to use the keys that come shipped with our local chain:
            </p>
          </div>
          <CodeSnippet code="yarn run generate" button={true} />

          <div className="flex justify-center top mt-4 mb-4">
            <p className="text-lg max-w-2xl italic">
              We will need to fund our deployer account with some testnet funds. Quick tip, use the following command to
              check your balance and display a QR code to scan with your wallet:
            </p>
          </div>
          <CodeSnippet code="yarn account" button={true} />
          <div className="flex justify-center top mt-4 mb-4">
            <p className="text-lg max-w-2xl font-bold">
              2. Next you will need to deploy your smart contract to the network. In our case we will deploy to
              baseSepolia. You can either edit your hardhat configuration file to use the defaultNetwork as baseSepolia,
              or you can use the following command.
            </p>
          </div>
          <div className="flex justify-center top mt-4 mb-4">
            <p className="text-lg max-w-2xl italic">
              If you need some baseSepolia ETH, you can get some from one of the faucets listed on this page:{" "}
              <span className="link">
                {" "}
                <a href="https://docs.base.org/docs/tools/network-faucets/" target="_blank">
                  Base Network Faucets
                </a>{" "}
              </span>
            </p>
          </div>
          <div className="flex justify-center top mt-4 mb-4">
            <p className="text-lg max-w-2xl italic">
              Alternatively, you can use SUPERBRIDGE to bridge ETH from Sepolia to Base Sepolia.
              <span className="link">
                {" "}
                <a href="https://superbridge.app/base" target="_blank">
                  Base Testnet Bridge
                </a>
              </span>
            </p>
          </div>
          <CodeSnippet code="yarn deploy --network baseSepolia" button={true} />
          <div className="flex justify-center top mt-4 mb-4">
            <p className="text-lg max-w-2xl italic">✅ Success will look like the following: 👇🏼</p>
          </div>
          <div className="flex justify-center top mt-4 mb-4">
            <div className="bg-gray-800 text-white p-4 rounded-lg overflow-auto mb-4">
              <pre>
                <code className="language-solidity">
                  {`deploying "Comms" (tx: 0xc71a6af1adb8f896b521a42b85ff1cae500d6debc0443ed42d53f3952c58ebca)...: 
deployed at 0x26b255424D71f00Efc718e2B182714957d76Cc64 with 375810 gas
📝 Updated TypeScript contract definition file on ../nextjs/contracts/deployedContracts.ts
`}
                </code>
              </pre>
            </div>
          </div>

          <div className="flex justify-center top mt-4 mb-4">
            <p className="text-lg max-w-2xl font-bold">
              3. Last step we will want to verify our contract. This will make it easier for us to interact with it in
              the future.
            </p>
          </div>
          <CodeSnippet code="yarn verify --network baseSepolia" button={true} />
          <div className="flex justify-center top mt-4 mb-4">
            <p className="text-lg max-w-2xl italic">✅ Success will look like the following: 👇🏼</p>
          </div>
          <div className="flex justify-center top mt-4 mb-4">
            <div className="bg-gray-800 text-white p-4 rounded-lg overflow-auto mb-4">
              <pre>
                <code className="language-solidity">
                  {`verifying Comms (0x26b255424D71f00Efc718e2B182714957d76Cc64) ...
waiting for result...
 => contract Comms is now verified`}
                </code>
              </pre>
            </div>
          </div>
          <div className="flex justify-center top mt-4 mb-4">
            <p className="text-lg max-w-2xl font-bold">
              4. Next configure the frontend to use the proper network. To do this edit the{" "}
              <span className="highlight-code">scaffold.config.ts</span> configuration file which is located in the{" "}
              <span className="highlight-code">packages/nextjs</span> folder.
            </p>
          </div>
          <div className="flex justify-center top mt-4 mb-4">
            <p className="text-lg max-w-2xl italic">
              To make the frontend point to baseSepolia, change the targetNetworks to use{" "}
              <span className="highlight-code">chains.baseSepolia</span>. You will get kicked out of the burner wallet
              and from now on any interactions with the smart contract should be done with a wallet you control, such as
              Metamask or a Wallet Connect enabled wallet like Rainbow wallet. You should use the same one that you used
              to sign into The Graph Builders Basecamp portal.
            </p>
          </div>
          <div className="flex justify-center top">
            <p className="text-lg text-left max-w-2xl">
              If you were successful, continue with the next part of the mission.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default DeployContent;
