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
              In this next part of the mission you will need to index the data from the Moon smart contract into The
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
            <p className="text-lg max-w-2xl italic">The schema for our starting subgraph is as follows:</p>
          </div>
          <div className="flex justify-center top mt-4 mb-4">
            <div className="bg-gray-800 text-white p-4 rounded-lg overflow-auto mb-4">
              <pre>
                <code className="language-graphql">{`type OwnershipTransferred @entity(immutable: true) {
    id: Bytes!
    previousOwner: Bytes! # address
    newOwner: Bytes! # address
    blockNumber: BigInt!
    blockTimestamp: BigInt!
    transactionHash: Bytes!
}`}</code>
              </pre>
            </div>
          </div>
          <div className="flex justify-center top mt-4 mb-4">
            <p className="text-lg max-w-2xl italic">
              You already have the entity to store the <span className="highlight-code">OwnershipTransferred</span>{" "}
              events but since we have inherited the ERC-20 standard, we will need to add the events for that standard
              to the subgraph configuration.
            </p>
          </div>
          <h1 className="flex justify-center text-2xl font-bold">
            {" "}
            📝 Task 1: Add the ERC-20 Events to the Subgraph 📝
          </h1>
          <div className="flex justify-center top mt-4 mb-4">
            <p className="text-lg max-w-2xl italic">
              Here is the starting handler located in{" "}
              <span className="highlight-code">packages/subgraph/src/mapping.ts</span>
            </p>
          </div>
          <div className="flex justify-center top mt-4 mb-4">
            <div className="bg-gray-800 text-white p-4 rounded-lg overflow-auto mb-4">
              <pre>
                <code className="language-typescript">{`import {
    Approval as ApprovalEvent,
    OwnershipTransferred as OwnershipTransferredEvent,
    Transfer as TransferEvent,
} from "../generated/Moon/Moon";
import { Approval, OwnershipTransferred, Transfer } from "../generated/schema";

export function handleApproval(event: ApprovalEvent): void {}

export function handleOwnershipTransferred(
    event: OwnershipTransferredEvent
): void {
    let entity = new OwnershipTransferred(
        event.transaction.hash.concatI32(event.logIndex.toI32())
    );
    entity.previousOwner = event.params.previousOwner;
    entity.newOwner = event.params.newOwner;

    entity.blockNumber = event.block.number;
    entity.blockTimestamp = event.block.timestamp;
    entity.transactionHash = event.transaction.hash;

    entity.save();
}

export function handleTransfer(event: TransferEvent): void {}
`}</code>
              </pre>
            </div>
          </div>

          <div className="flex justify-center top mt-4 mb-4 ">
            <p className="text-lg font-bold max-w-2xl mb-4">To complete this task, follow these steps:</p>
          </div>
          <div className="flex justify-center top mt-4 mb-4">
            <p className="text-lg max-w-2xl">
              <ol className="list-disc list-inside mb-4">
                <li>
                  Use the <span className="highlight-code">yarn scaffold</span> command to generate a subgraph
                  configuration. This will be generated in the <span className="highlight-code">packages/subgraph</span>{" "}
                  directory. Then you can use that as a reference to modify the existing subgraph.
                </li>
                <li>
                  Add the needed entities to the <span className="highlight-code">schema.graphql</span> file.
                </li>
                <li>
                  Add the handlers for the events to the <span className="highlight-code">mapping.ts</span> file.
                </li>
                <li>
                  Add the needed events and handlers to the <code className="highlight-code">subgraph.yaml</code> file.
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
            <div className="bg-gray-800 text-white p-4 rounded-lg overflow-auto mb-4">
              <pre>
                <code className="language-typescript">
                  {`Build completed: QmWmmvVp1eV1uYWCNE1poKHvYYa8UJxfdtCzAX1hs9gvxD

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
            <div className="bg-gray-800 text-white p-4 rounded-lg overflow-auto mb-4">
              <pre>
                <code className="language-graphql">{`query MyQuery {
  approvals(first: 10) {
    owner
  }
  ownershipTransferreds(first: 10) {
    newOwner
  }
  transfers(first: 10) {
    from
  }
}`}</code>
              </pre>
            </div>
          </div>
          <div className="flex justify-center top mt-4 mb-4">
            <p className="text-lg max-w-2xl italic">✅ Success will look like this: 👇🏼</p>
          </div>
          <div className="flex justify-center top mt-4 mb-4 ">
            <img className="rounded-lg max-w-2xl" src="/mission-3-response.png" alt="studio" />
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
