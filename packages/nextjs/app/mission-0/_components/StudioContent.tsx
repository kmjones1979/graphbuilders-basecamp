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

  const subscriptionId = 266;
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
      <div className="flex justify-center">
        <div className="max-w-sm sm:max-w-2xl w-full p-4">
          <div className="flex justify-center top pt-4">
            <h1 className="text-3xl pt-4 text-left max-w-2xl italic font-bold">Subgraph Studio</h1>
          </div>
          <div className="flex justify-center top">
            <p className="text-lg text-left max-w-2xl">
              In this part of the mission you will scaffold out and deploy your subgraph to The Graph Subgraph Studio.
              The studio is a place where you can create, test, and deploy subgraphs before you publish them to the
              decentralized network.
            </p>
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
              You will need to connect your wallet to the studio to create a subgraph. Click the "Connect" button on the
              top right of the screen.
            </p>
          </div>
          <div className="flex justify-center">
            <img className="max-h-96 w-full h-auto rounded-lg" src="/studio/01.png" alt="Studio Connect" />
          </div>
          <div className="flex justify-center top mt-4 mb-4">
            <p className="text-lg max-w-2xl italic">Choose the wallet type you would like to connect.</p>
          </div>
          <div className="flex justify-center">
            <img className="max-w-80 w-full h-auto rounded-lg" src="/studio/02.png" alt="Studio Connect" />
          </div>
          <div className="flex justify-center top mt-4 mb-4">
            <p className="text-lg max-w-2xl italic">Confirm the connection in your wallet.</p>
          </div>
          <div className="flex justify-center">
            <img className="max-w-80 w-full h-auto rounded-lg" src="/studio/03.png" alt="Studio Connect" />
          </div>
          <div className="flex justify-center top mt-4 mb-4">
            <p className="text-lg max-w-2xl italic">Sign the message to connect your wallet.</p>
          </div>
          <div className="flex justify-center">
            <img className="max-w-4xl w-full h-auto rounded-lg" src="/studio/04.png" alt="Studio Connect" />
          </div>
          <div className="flex justify-center top mt-4 mb-4 ">
            <p className="text-lg max-w-2xl italic">
              On your main subgraph dashboard, click the "Create a Subgraph" button.
            </p>
          </div>
          <div className="flex justify-center">
            <img className="max-w-80 w-full h-auto rounded-lg" src="/studio/05.png" alt="Studio Connect" />
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
          <div className="flex justify-center top mt-4 mb-4">
            <p className="text-lg max-w-2xl font-italic italic">
              Note: Since this is a new project. You will want to run this command outside of the current project so it
              does not conflict with the current project.
            </p>
          </div>
          <CodeSnippet code="graph init mymission" button={true} />
          <div className="flex justify-center top mt-4 mb-4">
            <p className="text-lg max-w-2xl italic">
              You will need to input all of the details for the contract that you deployed in the previous section.
            </p>
          </div>
          <div className="flex justify-center top mt-4 mb-4">
            <p className="text-lg max-w-2xl font-italic italic">
              Note: You can get the Start Block from the block explorer of the network you deployed to. The ABI for your
              smart contract should be located in the folder of The Graph Builders Basecamp at{" "}
              <span className="highlight-code">/packages/hardhat/deployments/NETWORK_NAME/CONTRACT_NAME.json</span>
            </p>
          </div>
          <div className="flex justify-center top mt-4 mb-4">
            <div className="bg-gray-800 text-white p-4 rounded-lg overflow-auto mb-4">
              <pre>
                <code className="language-solidity">
                  {`✔ Network · Base Sepolia Testnet · base-sepolia · https://sepolia.basescan.org
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
✔ Add another contract? (y/N) · false

`}
                </code>
              </pre>
            </div>
          </div>
          <div className="flex justify-center top mt-4 mb-4">
            <p className="text-lg max-w-2xl font-bold">
              4. Authenticate to the Subgraph Studio from your terminal. You can find your{" "}
              <span className="highlight-code">AUTH_KEY</span> in the Studio under Deploy Key section.
            </p>
          </div>
          <CodeSnippet code="graph auth <AUTH_KEY>" button={true} />
          <div className="flex justify-center top mt-4 mb-4">
            <p className="text-lg max-w-2xl font-bold">
              5. Navigate into the subgraph directory and run the following command to generate the types for your
              subgraph and build the wasm.
            </p>
          </div>
          <CodeSnippet code="graph codegen && graph build" button={true} />
          <div className="flex justify-center top mt-4 mb-4">
            <p className="text-lg max-w-2xl font-bold">
              6. Finally deploy your subgraph to the studio by running the following command where you replace{" "}
              <span className="highlight-code">SUBGRAPH_NAME</span> with the name of your subgraph. with the name of
              your subgraph.
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
            <img
              className="max-w-2xl items-center w-full h-auto rounded-lg"
              src="/orientation/7.png"
              alt="yarn chain"
            />
          </div>
          <div className="flex justify-center top mt-4 mb-4">
            <p className="text-lg max-w-2xl italic">
              Congratulations! You have now successfully deployed your subgraph to the studio! To complete the mission
              navigate to the Endpoints tab on your subgraph and submit your QueryURL.
            </p>
          </div>
          <div className="flex justify-center top pt-4">
            <h1 className="text-3xl pt-4 text-left max-w-2xl italic font-bold">Validation</h1>
          </div>
          <div className="flex justify-center top mt-4 mb-4">
            <p className="text-lg max-w-2xl">
              <span className="font-bold">Important:</span> In order for your mission to be properly validated, the
              following value for <span className="highlight-code">newMessage</span> will need to successfully return
              the string <span className="italic">Welcome to The Graph Builders Basecamp!</span>
            </p>
          </div>
          <div className="flex justify-center top mt-4 mb-4">
            <div className="bg-gray-800 text-white p-4 rounded-lg overflow-auto mb-4">
              <pre>
                <code className="language-graphql">
                  {`{
  welcomeMessageChangeds(first: 1) {
    id
    newMessage
    blockNumber
    blockTimestamp
    transactionHash
  }
}`}
                </code>
              </pre>
            </div>
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
              If you have any issues submitting your results, please reach out to us on the official Telegram channel
              for the Scaffold-ETH Subgraph Extension.
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
                <p className="text-red-400">
                  Note: The validation will take a few minutes to complete. Please be patient and only submit once.
                </p>
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
        </div>
      </div>
    </>
  );
};

export default StudioContent;
