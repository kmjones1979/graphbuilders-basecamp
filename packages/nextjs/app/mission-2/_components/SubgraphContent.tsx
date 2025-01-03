import React from "react";
import CodeSnippet from "./CodeSnippet";

const SubgraphContent: React.FC = () => {
  return (
    <>
      {/* Part 2 */}
      <div className="flex justify-center">
        <div className="max-w-sm sm:max-w-2xl w-full p-4">
          <div className="flex justify-center top pt-4">
            <h1 className="text-3xl pt-4 text-left max-w-2xl italic font-bold">Subgraph</h1>
          </div>
          <div className="flex justify-center top">
            <p className="text-lg text-left max-w-2xl">
              In this next part of the mission you will need to index the data from the Comms smart contract into The
              Graph.
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
              You will know graph-node is ready to be configured when you see the following message:
            </p>
          </div>
          <CodeSnippet
            code="INFO Downloading latest blocks from Ethereum, this may take a few minutes..."
            button={false}
          />
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
              contract. Open up your project in a text editor and navigate to the handler in{" "}
              <span className="highlight-code">packages/subgraph/src/mapping.ts</span>.
            </p>
          </div>
          <CodeSnippet code="code ." button={true} />
          <div className="flex justify-center top mt-4 mb-4">
            <p className="text-lg max-w-2xl italic">The schema for our subgraph is as follows:</p>
          </div>
          <div className="flex justify-center top mt-4 mb-4">
            <div className="bg-black p-4 rounded max-w-4xl flex justify-center">
              <pre>
                <code className="language-graphql">{`type CommsEstablished @entity {
    id: Bytes!
    account: Bytes!
    isCommsEstablished: Boolean!
    blockNumber: BigInt!
    blockTimestamp: BigInt!
    transactionHash: Bytes!
}

type OwnershipTransferred @entity(immutable: true) {
    id: Bytes!
    previousOwner: Bytes! # address
    newOwner: Bytes! # address
    blockNumber: BigInt!
    blockTimestamp: BigInt!
    transactionHash: Bytes!
}
`}</code>
              </pre>
            </div>
          </div>
          <div className="flex justify-center top mt-4 mb-4">
            <p className="text-lg max-w-2xl italic">
              In our case we have two events to handle in this subgraph. The first coming from the{" "}
              <span className="highlight-code">CommsEstablished</span> event and the second coming from the{" "}
              <span className="highlight-code">OwnershipTransferred</span> event from the Ownership contract. Since our
              schema is already created for us so we just need to add the logic to handle the events.
            </p>
          </div>
          <h1 className="flex justify-center text-2xl font-bold">
            {" "}
            📝 Task: Add logic to the handler to index the CommsEstablished and OwnershipTransferred events 📝
          </h1>

          <div className="flex justify-center top mt-4 mb-4">
            <p className="text-lg max-w-2xl italic">
              Here is the starting handler located in{" "}
              <span className="highlight-code">packages/subgraph/src/mapping.ts</span>
            </p>
          </div>
          <div className="flex justify-center top mt-4 mb-4">
            <div className="bg-black p-4 rounded max-w-4xl flex justify-center">
              <pre>
                <code className="language-typescript">
                  {`import {
    CommsEstablished as CommsEstablishedEvent,
    OwnershipTransferred as OwnershipTransferredEvent,
} from "../generated/Comms/Comms";
import { CommsEstablished, OwnershipTransferred } from "../generated/schema";

export function handleCommsEstablished(event: CommsEstablishedEvent): void {
    // LOGIC GOES HERE
}

export function handleOwnershipTransferred(
    event: OwnershipTransferredEvent
): void {
    // LOGIC GOES HERE
}`}
                </code>
              </pre>
            </div>
          </div>

          <div className="flex justify-center top mt-4 mb-4 ">
            <p className="text-lg font-bold max-w-2xl mb-4">To complete this task, follow these steps:</p>
          </div>
          <div className="flex justify-center top mt-4 mb-4">
            <p className="text-lg max-w-2xl">
              <ol className="list-disc list-inside mb-4">
                <li>For each handler, create a new entity.</li>
                <li>Set the properties of the entity using event and block data.</li>
                <li>
                  Save the entity to the database using the <span className="highlight-code">save()</span> method.
                </li>
              </ol>
              If needed, you can reference examples of the AssemblyScript API in the docs here:
            </p>
          </div>
          <div className="flex justify-center top mt-4 mb-4">
            <a target="_blank" href="https://thegraph.com/docs/en/developing/graph-ts/api/">
              🚀 AssemblyScript API
            </a>
          </div>
          <div className="flex justify-center top mt-4 mb-4">
            <a target="_blank" href="https://github.com/graphprotocol/graph-tooling/tree/main/packages/ts">
              📖 Graph Typescript Library
            </a>
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
            <p className="text-lg max-w-2xl italic">✅ Success will look like this: 👇🏼</p>
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
            <p className="text-lg max-w-2xl italic">
              This is a GraphiQL explorer and allows you to test out the GraphQL queries before loading them into your
              frontend. Try out the following query to see if your data is being saved:
            </p>
          </div>
          <div className="flex justify-center top mt-4 mb-4">
            <div className="bg-black p-4 rounded max-w-4xl flex justify-center">
              <pre>
                <code className="language-graphql">{`query MyQuery {
  commsEstablisheds(first: 10) {
    account
    blockNumber
    blockTimestamp
    id
    isCommsEstablished
    transactionHash
  }
  ownershipTransferreds(first: 10) {
    blockTimestamp
    blockNumber
    id
    newOwner
    previousOwner
    transactionHash
  }
}`}</code>
              </pre>
            </div>
          </div>
          <div className="flex justify-center top mt-4 mb-4">
            <p className="text-lg max-w-2xl italic">✅ Success will look like this: 👇🏼</p>
          </div>
          <div className="flex justify-center top mt-4 mb-4 ">
            <img className="rounded-lg max-w-2xl" src="/mission-2-response.png" alt="studio" />
          </div>
          <div className="flex justify-center top">
            <p className="text-lg text-left max-w-2xl">
              If you you were successful, go back to the top of the page and continue with the next part of the mission.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default SubgraphContent;
