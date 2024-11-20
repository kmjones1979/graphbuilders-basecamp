import React from "react";
import CodeSnippet from "./CodeSnippet";
import GetEnlisted from "./GetEnlisted";

const SubgraphContent: React.FC = () => {
  return (
    <>
      {/* Part 2 */}
      <div className="flex justify-center top">
        <p className="text-lg text-center max-w-2xl">
          In this next part of the mission you will need to set up your local development environment so that you can
          index the data from the smart contract.
        </p>
      </div>
      <div className="flex justify-center top mt-4 mb-4 ">
        <p className="text-lg font-bold max-w-2xl">
          1. To get started, open up a new terminal and run the following command to spin up your local Graph Node
          inside of docker:
        </p>
      </div>
      <CodeSnippet code="yarn run-node" button={true} />
      <div className="flex justify-center top mt-4 mb-4">
        <p className="text-lg max-w-2xl italic">
          You will know graph-node is ready when you see the following message:
        </p>
      </div>
      <CodeSnippet code="INFO Downloading latest blocks from Ethereum, this may take a few minutes..." button={false} />
      <div className="flex justify-center top mt-4 mb-4">
        <p className="text-lg font-bold  max-w-2xl">
          2. Next you will need to create a subgraph configuration inside your graph-node instance.
        </p>
      </div>
      <CodeSnippet code="yarn local-create" button={true} />

      <div className="flex justify-center top mt-4 mb-4">
        <p className="text-lg max-w-2xl italic">
          You can copy the ABI from the hardhat project with the following command:
        </p>
      </div>
      <CodeSnippet code="yarn abi-copy" button={true} />
      <div className="flex justify-center top mt-4 mb-4">
        <p className="text-lg max-w-2xl italic">You can generate the types with the following command:</p>
      </div>
      <CodeSnippet code="yarn codegen" button={true} />
      <div className="flex justify-center top mt-4 mb-4">
        <p className="text-lg font-bold  max-w-2xl">
          3. Now you will need to complete the code for the handler to process the event data coming off the smart
          contract. Open up your project in a text editor and navigate to the handler in
          packages/subgraph/src/mapping.ts.
        </p>
      </div>
      <CodeSnippet code="code ." button={true} />
      <div className="flex justify-center top mt-4 mb-4">
        <p className="text-lg max-w-2xl italic">
          In our case we have an event called Enlisted that we want to process and save to the database. In our case the
          schema is called Enlisted and we have a function called handleEnlisted. In this function we will save the
          event data to the database. Update the function to save the event data to the database, it should look like
          this:
        </p>
      </div>
      <h1 className="flex justify-center text-2xl font-bold">
        {" "}
        📝 Task: Add logic to the handler to index the Enlisted event data 📝
      </h1>
      <div className="flex justify-center top mt-4 mb-4">
        <p className="text-lg max-w-2xl italic">
          To do this we will need to create a new entity called Enlisted and save the event data to the database. If
          needed you can reference the AssemblyScript API in the docs here:
        </p>
      </div>
      <div className="flex justify-center top mt-4 mb-4">
        <a target="_blank" href="https://thegraph.com/docs/en/developing/graph-ts/api/">
          🚀 AssemblyScript API
        </a>
      </div>
      <div className="flex justify-center top mt-4 mb-4">
        <p className="text-lg max-w-2xl italic">
          Here is the starting handler located in packages/subgraph/src/mapping.ts:
        </p>
      </div>
      <div className="flex justify-center top mt-4 mb-4">
        <div className="bg-black p-4 rounded max-w-4xl flex justify-center">
          <pre>
            <code className="language-typescript">
              {`import { Enlisted as EnlistedEvent } from "../generated/Enlist/Enlist";
import { Enlisted } from "../generated/schema";

export function handleEnlisted(event: EnlistedEvent): void {}
`}
            </code>
          </pre>
        </div>
      </div>
      <div className="flex justify-center top mt-4 mb-4">
        <p className="text-lg font-bold  max-w-2xl">4. Now ship your changes...</p>
      </div>
      <CodeSnippet code="yarn local-ship" button={true} />
      <div className="flex justify-center top mt-4 mb-4">
        <p className="text-lg max-w-2xl italic">When prompted, enter the following version you want to use:</p>
      </div>
      <CodeSnippet code='Which version label to use? (e.g. "v0.0.1"):' button={false} />
      <div className="flex justify-center top mt-4 mb-4">
        <p className="text-lg max-w-2xl italic">Success will look like this:</p>
      </div>
      <div className="flex justify-center top mt-4 mb-4">
        <div className="bg-black p-4 rounded max-w-4xl flex justify-center">
          <pre>
            <code className="language-typescript">
              {`Build completed: QmSPR7AmLy1FHX4aPdSKNn7GHXy5xGxz6xR6YuD6UMcfAc

Deployed to http://localhost:8000/subgraphs/name/scaffold-eth/your-contract/graphql

Subgraph endpoints:
Queries (HTTP):     http://localhost:8000/subgraphs/name/scaffold-eth/your-contract`}
            </code>
          </pre>
        </div>
      </div>
      <div className="flex justify-center top mt-4 mb-4">
        <p className="text-lg font-bold  max-w-2xl">5. Open up the GraphiQL IDE to view your data.</p>
      </div>
      <div className="flex justify-center top mt-4 mb-4">
        <a target="_blank" href="http://localhost:8000/subgraphs/name/scaffold-eth/your-contract">
          🚀 http://localhost:8000/subgraphs/name/scaffold-eth/your-contract
        </a>
      </div>
      <div className="flex justify-center top mt-4 mb-4">
        <p className="text-lg max-w-2xl italic">Try out the following query to see if your data is being saved:</p>
      </div>
      <div className="flex justify-center top mt-4 mb-4">
        <div className="bg-black p-4 rounded max-w-4xl flex justify-center">
          <pre>
            <code className="language-typescript">
              {`query MyQuery {
  enlisteds(first: 10, orderBy: blockTimestamp, orderDirection: asc) {
    account
    blockNumber
    blockTimestamp
    id
    transactionHash
  }
}`}
            </code>
          </pre>
        </div>
      </div>
      <div className="flex justify-center top mt-4 mb-4">
        <p className="text-lg max-w-2xl italic">Success will look like this:</p>
      </div>
      <div className="flex justify-center top mt-4 mb-4 ">
        <img className="rounded-lg max-w-2xl" src="/mission-0-response.png" alt="studio" />
      </div>

      <div className="flex justify-center top mt-4 mb-4">
        <p className="text-lg font-bold  max-w-2xl">
          6. Now you will need to build the graph client artifacts... if you did this part correctly the results should
          populate in the table below.
        </p>
      </div>
      <div className="flex justify-center top mt-4 mb-4">
        <CodeSnippet code="yarn graphclient:build" button={true} />
      </div>
      <GetEnlisted />
      <div className="flex justify-center top">
        <p className="text-lg text-center max-w-2xl">
          If you you were successful, go back to the top of the page and continue with the next part of the mission.
        </p>
      </div>
    </>
  );
};

export default SubgraphContent;
