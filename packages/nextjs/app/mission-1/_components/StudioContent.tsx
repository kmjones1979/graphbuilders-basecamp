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
    id.push(graphResponse.data.data.enlisteds[i].id.toLowerCase())
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

  const subscriptionId = 4048;
  const gasLimit = 100_000;

  const handleSubmit = async () => {
    try {
      await writeValidatorAsync({
        functionName: "validateMission",
        args: [1, javaScriptSourceCode, BigInt(subscriptionId), gasLimit, queryURL],
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
    args: [1, address],
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
              In this next part of the mission you will deploy your subgraph to The Graph Subgraph Studio. The studio is
              a place where you can create, test, and deploy subgraphs before you publish them to the decentralized
              network.
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
              2. Now that we have a subgraph in the studio available to deploy to, we want to update our{" "}
              <span className="highlight-code">networks.json</span> configuration file to reference our newly deployed
              contract to Sepolia in the previous section of the mission. This file is located in the{" "}
              <span className="highlight-code">packages/subgraph</span> folder.
            </p>
          </div>

          <div className="flex justify-center top mt-4 mb-4">
            <div className="bg-gray-800 text-white p-4 rounded-lg overflow-auto mb-4">
              <pre>
                <code className="language-solidity">
                  {`{
  "localhost": {
    "Enlist": {
      "address": "0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512"
    }
  },
  "sepolia": {
    "Enlist": {
      "address": "0xeF938C265A15327D8884d83f4dd154736144c987"
    }
  }
}
`}
                </code>
              </pre>
            </div>
          </div>
          <div className="flex justify-center top mt-4 mb-4">
            <p className="text-lg max-w-2xl font-bold">
              3. Next, we need to update the deploy command for our subgraph package to use the name we configured in
              the studio. To do this, open the &quot;packages/subgraph/package.json&quot; file and update the
              &quot;studio-ship&quot; script. At the end of the script, you will find the &quot;graph deploy&quot;
              command. Update it to use the name of your subgraph. In my case, it will be &quot;graph deploy
              mymission&quot;.
            </p>
          </div>
          <CodeSnippet code="graph deploy mymission" button={false} />
          <div className="flex justify-center top mt-4 mb-4">
            <p className="text-lg max-w-2xl italic">
              You will need to update your <span className="highlight-code">subgraph.yaml</span> file to include the
              proper network. e.g. sepolia. You also might want to add the startBlock to the subgraph manifest. You can
              get this from the block explorer and look at the contract creation transaction.
            </p>
          </div>
          <div className="flex justify-center top mt-4 mb-4">
            <div className="bg-gray-800 text-white p-4 rounded-lg overflow-auto mb-4">
              <pre>
                <code className="language-solidity">
                  {`specVersion: 0.0.4
description: Enlisted
repository: https://github.com/scaffold-eth/se-2/packages/subgraph/
schema:
  file: ./src/schema.graphql
dataSources:
  - kind: ethereum/contract
    name: Enlist
    network: sepolia
    source:
      abi: Enlist
      address: "0xeF938C265A15327D8884d83f4dd154736144c987"
      startBlock: 7117347
    mapping:
      kind: ethereum/events
      apiVersion: 0.0.6
      language: wasm/assemblyscript
      entities:
        - Enlisted
      abis:
        - name: Enlist
          file: ./abis/localhost_Enlist.json
      eventHandlers:
        - event: Enlisted(indexed address)
          handler: handleEnlisted
      file: ./src/mapping.ts
`}
                </code>
              </pre>
            </div>
          </div>
          <div className="flex justify-center top mt-4 mb-4">
            <p className="text-lg max-w-2xl italic">
              Deploy your subgraph to the studio by running the following command:
            </p>
          </div>
          <CodeSnippet code="yarn studio-ship" button={true} />
          <div className="flex justify-center top mt-4 mb-4">
            <p className="text-lg max-w-2xl italic">
              If you did this part correctly, you should see your subgraph syncing or potentially already synced in the
              studio.
            </p>
          </div>
          <div className="flex justify-center">
            <img className="max-w-3xl w-full h-auto rounded-lg" src="/studio/08-1.png" alt="Studio Deploy" />
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
              value of <span className="highlight-code">id</span> will need to successfully return the address of the
              account you submit it from.
            </p>
          </div>
          <div className="flex justify-center top mt-4 mb-4">
            <div className="bg-gray-800 text-white p-4 rounded-lg overflow-auto mb-4">
              <pre>
                <code className="language-graphql">
                  {`{
  enlisteds(
    first: 1
    orderBy: blockTimestamp
    orderDirection: desc
    where: { account: "YOUR_ADDRESS" }
  ) {
    id
    account
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
              <div className="flex justify-center top mt-4 mb-4">
                <button className="bg-purple-500 text-white px-4 py-2 rounded-lg" onClick={() => setIsModalOpen(true)}>
                  Submit Mission
                </button>
              </div>
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
