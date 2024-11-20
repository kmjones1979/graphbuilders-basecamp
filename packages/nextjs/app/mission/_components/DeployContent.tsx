import React from "react";
import CodeSnippet from "./CodeSnippet";

const DeployContent: React.FC = () => {
  return (
    <>
      {/* Part 3 */}
      <div className="flex justify-center top">
        <p className="text-lg text-center max-w-2xl">
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
      <CodeSnippet code="yarn deploy --network sepolia" button={true} />
      <div className="flex justify-center top mt-4 mb-4">
        <p className="text-lg max-w-2xl italic">
          If you need some Sepolia ETH, you can get some from the following faucets:{" "}
          <span className="link">
            {" "}
            <a href="https://cloud.google.com/application/web3/faucet/ethereum/sepolia" target="_blank">
              Google Cloud Sepolia Faucet
            </a>{" "}
          </span>
          or
          <span className="link">
            {" "}
            <a href="https://www.infura.io/faucet/sepolia" target="_blank">
              Infura Sepolia Faucet
            </a>
          </span>
        </p>
      </div>
      <div className="flex justify-center top mt-4 mb-4">
        <p className="text-lg max-w-2xl font-bold">
          3. Last step we will want to verify our contract. This will make it easier for us to interact with it in the
          future.
        </p>
      </div>
      <CodeSnippet code="yarn verify --network sepolia" button={true} />
    </>
  );
};

export default DeployContent;
