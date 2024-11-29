import React, { useState } from "react";
import CodeSnippet from "./CodeSnippet";
import { useAccount } from "wagmi";
import { useScaffoldReadContract, useScaffoldWriteContract } from "~~/hooks/scaffold-eth";

const StudioContent: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [queryURL, setQueryURL] = useState("");

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
        welcomeMessageChangeds(first: 1) {
          id
          newMessage
          blockNumber
          blockTimestamp
          transactionHash
        }
      }
    \`,
  },
})

const check = "Welcome to The Graph Builders Basecamp!"

const [graphResponse] = await Promise.all([graphRequest])
let newMessage = []
if (!graphResponse.error) {
  for (let i = 0; i < 1; i++) {
    newMessage.push(graphResponse.data.data.welcomeMessageChangeds[i].newMessage)
    console.log(i)
  }
} else {
  console.log("graphResponse Error, ", graphResponse)
}

if (newMessage[0] === check) {
  console.log(newMessage[0])
  return Functions.encodeUint256(1)
} else {
  console.log(newMessage[0])
  return Functions.encodeUint256(0)
}`;

  const subscriptionId = 4027;
  const gasLimit = 100_000;

  const handleSubmit = async () => {
    try {
      await writeValidatorAsync({
        functionName: "validateMission",
        args: [0, javaScriptSourceCode, BigInt(subscriptionId), gasLimit, queryURL],
      });
      setIsModalOpen(false);
    } catch (e) {
      console.error("Error submitting URL:", e);
    }
  };

  const { writeContractAsync: writeValidatorAsync } = useScaffoldWriteContract("Validator");

  const { address } = useAccount();
  const { data: accountMinted } = useScaffoldReadContract({
    contractName: "Validator",
    functionName: "accountMinted",
    args: [0, address],
  });

  return (
    <>
      {/* Part 4 */}
      <div className="flex justify-center top">
        <p className="text-lg text-left max-w-2xl">
          In this next part of the mission you will scaffold out and deploy your subgraph to The Graph Subgraph Studio.
          The studio is a place where you can create, test, and deploy subgraphs before you publish them to the
          decentralized network.
        </p>
      </div>
      <div className="flex justify-center top pt-4">
        <h1 className="text-3xl pt-4 text-left max-w-2xl italic font-bold">Subgraph Studio</h1>
      </div>
      <div className="flex justify-center top mt-4 mb-4 ">
        <p className="text-lg font-bold max-w-2xl">
          1. First, create a subgraph in the studio by visiting the following url:
        </p>
      </div>
      <div className="flex justify-center top mt-4 mb-4">
        <a target="_blank" href="https://thegraph.com/studio/">
          🚀 https://thegraph.com/studio/
        </a>
      </div>
      <div className="flex justify-center top mt-4 mb-4">
        <p className="text-lg max-w-2xlitalic">
          You will need to connect your wallet to the studio to create a subgraph. Click the "Connect" button on the top
          right of the screen.
        </p>
      </div>
      <div className="flex justify-center">
        <img className="max-h-96" src="/studio/01.png" alt="Studio Connect" />
      </div>
      <div className="flex justify-center top mt-4 mb-4">
        <p className="text-lg max-w-2xl italic">Choose the wallet type you would like to connect.</p>
      </div>
      <div className="flex justify-center">
        <img className="max-w-80" src="/studio/02.png" alt="Studio Connect" />
      </div>
      <div className="flex justify-center top mt-4 mb-4">
        <p className="text-lg max-w-2xl italic">Confirm the connection in your wallet.</p>
      </div>
      <div className="flex justify-center">
        <img className="max-w-80" src="/studio/03.png" alt="Studio Connect" />
      </div>
      <div className="flex justify-center top mt-4 mb-4">
        <p className="text-lg max-w-2xl italic">Sign the message to connect your wallet.</p>
      </div>
      <div className="flex justify-center">
        <img className="max-w-4xl" src="/studio/04.png" alt="Studio Connect" />
      </div>
      <div className="flex justify-center top mt-4 mb-4 ">
        <p className="text-lg max-w-2xl italic">
          On your main subgraph dashboard, click the "Create a Subgraph" button.
        </p>
      </div>
      <div className="flex justify-center">
        <img className="max-w-80" src="/studio/05.png" alt="Studio Connect" />
      </div>
      <div className="flex justify-center top mt-4 mb-4 ">
        <p className="text-lg max-w-2xl italic">Name your subgraph and click "Create Subgraph".</p>
      </div>
      <div className="flex justify-center top mt-4 mb-4">
        <p className="text-lg max-w-2xl font-bold">
          Open a new terminal and navigate to your home directory or where you prefer to create projects.
        </p>
      </div>
      <div className="flex justify-center top pt-4">
        <h1 className="text-3xl pt-4 text-left max-w-2xl italic font-bold">The Graph CLI</h1>
      </div>
      <div className="flex justify-center top mt-4 mb-4">
        <p className="text-lg max-w-2xl font-bold">2. Install The Graph CLI either using npm or yarn.</p>
      </div>
      <CodeSnippet code="npm install -g @graphprotocol/graph-cli" button={true} />
      <CodeSnippet code="yarn global add @graphprotocol/graph-cli" button={true} />
      <div className="flex justify-center top mt-4 mb-4">
        <p className="text-lg max-w-2xl font-bold">3. Run the following command to initialize your subgraph.</p>
      </div>
      <CodeSnippet code="graph init mymission" button={true} />
      <div className="flex justify-center top mt-4 mb-4">
        <p className="text-lg max-w-2xl italic">
          You will need to input all of the details for the contract that you want to index.
        </p>
      </div>

      <div className="flex justify-center top mt-4 mb-4">
        <div className="bg-black p-4 rounded max-w-6xl flex justify-center">
          <pre>
            <code className="language-solidity">
              {`✔ Ethereum network · sepolia
✔ Contract address · 0xeAa2c3ae9a2Ee0dD3df0274A71C52E7335D652ec
✖ Failed to fetch ABI from Etherscan: ABI not found, try loading it from a local file
✔ Do you want to retry? (Y/n) · false
✖ Failed to fetch Start Block: Failed to fetch contract creation transaction hash
✔ Do you want to retry? (Y/n) · false
✔ ABI file (path) · /Users/user/mission-0-orientation/packages/hardhat/deployments/sepolia/Welcome.json
✔ Start Block · 7159204
✔ Contract Name · Welcome
✔ Index contract   const encryptedSecretsRef = "0xa266736c6f744964006776657273696f6e1a65540efa";
s as entities (Y/n) · true
  Generate subgraph
  Write subgraph to directory
✔ Create subgraph scaffold
✔ Initialize networks config
✔ Initialize subgraph repository
✔ Install dependencies with yarn
✔ Generate ABI and schema types with yarn codegen
`}
            </code>
          </pre>
        </div>
      </div>
      <div className="flex justify-center top mt-4 mb-4">
        <p className="text-lg max-w-2xl font-bold">
          4. Authenticate to the Subgraph Studio from your terminal. You can find your{" "}
          <span className="highlight-code">AUTH_KEY</span> in the Studio.
        </p>
      </div>
      <CodeSnippet code="graph auth <AUTH_KEY>" button={true} />
      <div className="flex justify-center top mt-4 mb-4">
        <p className="text-lg max-w-2xl font-bold">
          5. Navigate into the subgraph directory and run the following command to generate the types for your subgraph
          and build the wasm.
        </p>
      </div>
      <CodeSnippet code="graph codegen && graph build" button={true} />
      <div className="flex justify-center top mt-4 mb-4">
        <p className="text-lg max-w-2xl font-bold">
          6. Finally deploy your subgraph to the studio by running the following command where you replace{" "}
          <span className="highlight-code">SUBGRAPH_NAME</span> with the name of your subgraph. with the name of your
          subgraph.
        </p>
      </div>
      <CodeSnippet code="graph deploy <SUBGRAPH_NAME>" button={true} />

      <div className="flex justify-center top mt-4 mb-4">
        <p className="text-lg max-w-2xl italic">
          If you did this part correctly, you should see your subgraph syncing or potentially already synced in the
          studio.
        </p>
      </div>
      <div className="flex justify-center top">
        <img className="max-w-2xl items-center" src="/orientation/7.png" alt="yarn chain" />
      </div>
      <div className="flex justify-center top mt-4 mb-4">
        <p className="text-lg max-w-2xl italic">
          Congratulations! You have now successfully deployed your subgraph to the studio! To complete the mission
          navigate to the Endpoints tab on your subgraph and submit your QueryURL.
        </p>
      </div>
      <div className="flex justify-center top">
        {accountMinted ? (
          <div className="bg-slate-700 text-green-400 px-4 py-2 rounded-lg">Mission Complete</div>
        ) : (
          <button className="bg-purple-500 text-white px-4 py-2 rounded-lg" onClick={() => setIsModalOpen(true)}>
            Submit Mission
          </button>
        )}
      </div>
      <div className="flex justify-center top mt-4 mb-4">
        <p className="text-lg max-w-2xl italic">
          If you have any issues submitting your results, please reach out to us on the official Telegram channel for
          the Scaffold-ETH Subgraph Extension.
        </p>
      </div>
      <div className="flex justify-center top">
        {" "}
        <a target="_blank" href="https://t.me/+fafK-afX2aM0ZWZh">
          👉 👩‍🚀 🏗 Scaffold-ETH Subgraph Extension Support
        </a>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="modal modal-open">
          <div className="modal-box">
            <h2 className="font-bold text-lg">Please enter your subgraph Query URL</h2>
            <p>This can be found in the Endpoints tab of your subgraph in the Subgraph Studio.</p>
            <input
              type="text"
              placeholder="Enter URL"
              className="input input-bordered w-full mt-2"
              value={queryURL}
              onChange={e => setQueryURL(e.target.value)}
            />
            <div className="modal-action">
              <button className="btn" onClick={handleSubmit}>
                Submit
              </button>
              <button className="btn" onClick={() => setIsModalOpen(false)}>
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default StudioContent;
