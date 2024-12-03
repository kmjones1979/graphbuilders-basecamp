import React from "react";
import CodeSnippet from "./CodeSnippet";

const DeployContent: React.FC = () => {
  return (
    <>
      {/* Part 3 */}
      <div className="flex justify-center top pt-4">
        <h1 className="text-3xl pt-4 text-left max-w-2xl italic font-bold">Smart Contract Deployment</h1>
      </div>
      <div className="flex justify-center top">
        <p className="text-lg text-text-left max-w-2xl">
          Up to this point we have been doing local first development. In this next part of the mission you will deploy
          your smart contract to a public network. This way we can index the data on The Graph's decentralized network.
        </p>
      </div>
      <div className="flex justify-center top mt-4 mb-4">
        <p className="text-lg max-w-2xl font-bold">
          1. In order to do this you will need to run the following command to generate a deployer key, we do not want
          to use the keys that come shipped with our local chain:
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
          2. Next you will need to deploy your smart contract to the network. In our case we will deploy to Sepolia. You
          can either edit your hardhat configuration file to use the defaultNetwork as Sepolia, or you can use the
          following command.
        </p>
      </div>
      <div className="flex justify-center top mt-4 mb-4">
        <p className="text-lg max-w-2xl italic">
          If you need some Sepolia ETH, you can get some from the following faucets:{" "}
          <span className="link">
            {" "}
            <a
              href="https://cloud.google.com/application/web3/faucet/ethereum/sepolia"
              target="_blank"
              className="text-purple-400"
            >
              Google Cloud Sepolia Faucet
            </a>{" "}
          </span>
          or
          <span className="link">
            {" "}
            <a href="https://www.infura.io/faucet/sepolia" target="_blank" className="text-purple-400">
              Infura Sepolia Faucet
            </a>
          </span>
        </p>
      </div>
      <CodeSnippet code="yarn deploy --network sepolia" button={true} />
      <div className="flex justify-center top mt-4 mb-4">
        <p className="text-lg max-w-2xl italic">✅ Success will look like the following: 👇🏼</p>
      </div>
      <div className="flex justify-center top mt-4 mb-4">
        <div className="bg-black p-4 rounded max-w-6xl flex justify-center">
          <pre>
            <code className="language-solidity">
              {`deploying "Moon" (tx: 0x2dea4c89a5f26850d3049c864c8151983b938568bef6668a950375ce97ee3d57)...
deployed at 0xaF938C165A25327D8884d85f4dd156736144c987 with 143057 gas
📝 Updated TypeScript contract definition file on ../nextjs/contracts/deployedContracts.ts
`}
            </code>
          </pre>
        </div>
      </div>

      <div className="flex justify-center top mt-4 mb-4">
        <p className="text-lg max-w-2xl font-bold">
          3. Last step we will want to verify our contract. This will make it easier for us to interact with it in the
          future.
        </p>
      </div>
      <CodeSnippet code="yarn verify --network sepolia" button={true} />
      <div className="flex justify-center top mt-4 mb-4">
        <p className="text-lg max-w-2xl italic">✅ Success will look like the following: 👇🏼</p>
      </div>
      <div className="flex justify-center top mt-4 mb-4">
        <div className="bg-black p-4 rounded max-w-6xl flex justify-center">
          <pre>
            <code className="language-solidity">
              {`verifying Moon (0xaF938C165A25327D8884d85f4dd156736144c987) ...
waiting for result...
 => contract Moon is now verified`}
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
          To make the frontend point to Sepolia, change the targetNetworks to use{" "}
          <span className="highlight-code">chains.sepolia</span>. You will get kicked out of the burner wallet and from
          now on any interactions with the smart contract should be done with a wallet you control, such as Metamask or
          a Wallet Connect enabled wallet like Rainbow wallet. You should use the same one that you used to sign into
          The Graph Builders Basecamp portal.
        </p>
      </div>
      <div className="flex justify-center top mt-4 mb-4">
        <p className="text-lg max-w-2xl italic">
          While in this configuration file you should also update your alchemy api key to do this, update the
          <span className="highlight-code">alchemyApiKey</span> configuration with your API key. You can get one for
          free from the
          <span className="link">
            {" "}
            <a href="https://dashboard.alchemy.com/" target="_blank">
              Alchemy
            </a>{" "}
          </span>{" "}
          website.
        </p>
      </div>
      <div className="flex justify-center top">
        <p className="text-lg text-left max-w-2xl">
          If you you were successful, go back to the top of the page and continue with the next part of the mission.
        </p>
      </div>
    </>
  );
};

export default DeployContent;
