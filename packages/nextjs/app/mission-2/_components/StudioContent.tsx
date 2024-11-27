import React from "react";
import CodeSnippet from "./CodeSnippet";

const StudioContent: React.FC = () => {
  return (
    <>
      {/* Part 4 */}
      <div className="flex justify-center top">
        <p className="text-lg text-left max-w-2xl">
          In this next part of the mission you will deploy your subgraph to The Graph Subgraph Studio. The studio is a
          place where you can create, test, and deploy subgraphs before you publish them to the decentralized network.
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
          2. Now that we have a subgraph in the studio available to deploy to, we want to update our{" "}
          <span className="highlight-code">networks.json</span> configuration file to reference our newly deployed
          contract to Sepolia in the previous section of the mission. This file is located in the{" "}
          <span className="highlight-code">packages/subgraph</span> folder.
        </p>
      </div>

      <div className="flex justify-center top mt-4 mb-4">
        <div className="bg-black p-4 rounded max-w-6xl flex justify-center">
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
          3. Next, we need to update the deploy command for our subgraph package to use the name we configured in the
          studio. Update the "graph deploy" command to use the name of your subgraph. In my case it is "mymission".
        </p>
      </div>
      <CodeSnippet code="graph deploy mymission" button={false} />
      <div className="flex justify-center top mt-4 mb-4">
        <p className="text-lg max-w-2xl italic">
          You also might want to add the startBlock to the subgraph manifest. You can get this from the block explorer
          and look at the contract creation transaction.
        </p>
      </div>
      <div className="flex justify-center top mt-4 mb-4">
        <p className="text-lg max-w-2xl italic">Deploy your subgraph to the studio by running the following command:</p>
      </div>
      <CodeSnippet code="yarn studio-ship" button={true} />
      <div className="flex justify-center top mt-4 mb-4">
        <p className="text-lg max-w-2xl italic">
          If you did this part correctly, you should see your subgraph syncing or potentially already synced in the
          studio.
        </p>
      </div>
      <div className="flex justify-center">
        <img className="max-w-4xl" src="/studio/08.png" alt="Studio Deploy" />
      </div>
      <div className="flex justify-center top mt-4 mb-4">
        <p className="text-lg max-w-2xl italic">
          Congratulations! You have now successfully deployed your subgraph to the studio! To complete the mission
          navigate to the Endpoints tab on your subgraph and submit your QueryURL.
        </p>
      </div>
    </>
  );
};

export default StudioContent;
