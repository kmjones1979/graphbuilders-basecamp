import React from "react";
import CodeSnippet from "./CodeSnippet";

const SCHEMA = `
type OwnershipTransferred @entity(immutable: true) {
    id: Bytes!
    previousOwner: Bytes! # address
    newOwner: Bytes! # address
    blockNumber: BigInt!
    blockTimestamp: BigInt!
    transactionHash: Bytes!
}`;

const HANDLER_CODE = `
import {
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

export function handleTransfer(event: TransferEvent): void {}`;

const GRAPHQL_QUERY = `query MyQuery {
  approvals(first: 10) {
    owner
  }
  ownershipTransferreds(first: 10) {
    newOwner
  }
  transfers(first: 10) {
    from
  }
}`;

const SubgraphContent: React.FC = () => {
  return (
    <div className="flex justify-center">
      <div className="w-full p-4 space-y-6 max-w-[95vw] sm:max-w-4xl">
        {/* Header Card */}
        <div className="card bg-base-200 shadow-xl">
          <div className="card-body text-center space-y-4">
            <h1 className="text-3xl sm:text-3xl font-bold">Subgraph Studio</h1>
            <p className="text-base sm:text-xl">
              In this part of the mission you will need to index the data from the Moon smart contract into The Graph.
            </p>
          </div>
        </div>

        {/* Local Graph Node Setup */}
        <div className="card bg-base-200 shadow-xl">
          <div className="card-body p-4 sm:p-8">
            <h2 className="card-title text-xl sm:text-2xl mb-4">
              <span className="badge badge-primary">1</span>Start Local Graph Node
            </h2>
            <p className="text-sm sm:text-base text-base-content/80 mb-4">
              To get started, open up a new terminal and run the following command to spin up your local Graph Node
              inside of docker:
            </p>
            <CodeSnippet code="yarn run-node" button={true} />

            <div className="mt-4">
              <p className="text-sm sm:text-base italic mb-2">
                You will know graph-node is ready to be configured when you see the following message:
              </p>
              <div className="mockup-code text-xs sm:text-sm w-full">
                <pre className="pl-8">
                  <code>INFO Downloading latest blocks from Ethereum, this may take a few minutes...</code>
                </pre>
              </div>
            </div>
          </div>
        </div>

        {/* Subgraph Configuration */}
        <div className="card bg-base-200 shadow-xl">
          <div className="card-body p-4 sm:p-8">
            <h2 className="card-title text-xl sm:text-2xl mb-4">
              <span className="badge badge-primary">2</span>Configure Subgraph
            </h2>
            <p className="text-sm sm:text-base text-base-content/80 mb-4">
              Next you will need to create a subgraph configuration inside your graph-node instance.
            </p>
            <div className="space-y-4">
              <div>
                <p className="text-sm sm:text-base italic mb-2">Create local subgraph:</p>
                <CodeSnippet code="yarn local-create" button={true} />
              </div>

              <div>
                <p className="text-sm sm:text-base italic mb-2">Copy the ABI from the hardhat project:</p>
                <CodeSnippet code="yarn abi-copy" button={true} />
              </div>

              <div>
                <p className="text-sm sm:text-base italic mb-2">Generate the types:</p>
                <CodeSnippet code="yarn codegen" button={true} />
              </div>
            </div>
          </div>
        </div>

        {/* Handler Implementation */}
        <div className="card bg-base-200 shadow-xl">
          <div className="card-body p-4 sm:p-8">
            <h2 className="card-title text-xl sm:text-2xl mb-4">
              <span className="badge badge-primary">3</span>Add Event Entities
            </h2>

            <div className="alert bg-base-300 border border-base-content/10 mb-6">
              <div>
                <p className="text-sm sm:text-base text-base-content/80">
                  <span className="font-bold">Goal:</span> Add two new entities to track ERC-20 events:
                  <ul className="list-disc list-inside mt-2 ml-4">
                    <li>Transfer events (when tokens move between accounts)</li>
                    <li>Approval events (when spending is approved)</li>
                  </ul>
                </p>
              </div>
            </div>

            <div className="alert alert-info mb-6">
              <div className="flex items-start">
                <span className="text-lg mr-2">💡</span>
                <p>
                  You already have the <code className="badge badge-ghost text-xs">OwnershipTransferred</code> entity.
                  Now we'll add two more entities to track ERC-20 functionality.
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="font-bold mb-2 flex items-center">
                  <span className="badge badge-secondary mr-2">Step 1</span>
                  Open the Schema File
                </h3>
                <p className="text-sm mb-2">
                  Navigate to <code className="badge badge-ghost text-xs">packages/subgraph/src/schema.graphql</code>
                </p>
              </div>

              <div>
                <h3 className="font-bold mb-2 flex items-center">
                  <span className="badge badge-secondary mr-2">Step 2</span>
                  Add New Entities
                </h3>
                <p className="text-sm mb-2">Add these two entities to your schema:</p>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>
                    <span className="font-bold">Transfer</span> entity with fields:
                    <ul className="list-disc list-inside ml-8">
                      <li>from: Bytes!</li>
                      <li>to: Bytes!</li>
                      <li>value: BigInt!</li>
                    </ul>
                  </li>
                  <li className="mt-2">
                    <span className="font-bold">Approval</span> entity with fields:
                    <ul className="list-disc list-inside ml-8">
                      <li>owner: Bytes!</li>
                      <li>spender: Bytes!</li>
                      <li>value: BigInt!</li>
                    </ul>
                  </li>
                </ul>
              </div>

              <div className="alert alert-success">
                <div className="flex items-start">
                  <span className="text-lg mr-2">✓</span>
                  <p>
                    When complete, your schema will have three entities: OwnershipTransferred, Transfer, and Approval
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Task Section */}
        <div className="card bg-base-200 shadow-xl">
          <div className="card-body p-4 sm:p-8">
            <h2 className="card-title text-xl sm:text-2xl mb-4">
              <span className="badge badge-primary">4</span>Update the handler to save the data to each entity
            </h2>
            <div className="alert bg-base-300 border border-base-content/10 mb-6">
              <div>
                <p className="text-sm sm:text-base text-base-content/80">
                  <span className="font-bold">Goal:</span> Implement the event handlers to save the data to the entities
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="font-bold mb-2">Step 3: Update Mapping</h3>
                <p className="text-sm mb-2">
                  In <code className="badge badge-ghost text-xs">mapping.ts</code>:
                </p>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Implement handleTransfer function</li>
                  <li>Implement handleApproval function</li>
                </ul>
              </div>

              <div>
                <h3 className="font-bold mb-2">Step 4: Update Manifest</h3>
                <p className="text-sm mb-2">
                  In <code className="badge badge-ghost text-xs">subgraph.yaml</code>:
                </p>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Add Transfer event handler</li>
                  <li>Add Approval event handler</li>
                </ul>
              </div>
            </div>

            <div className="mt-6 space-y-2">
              <p className="text-sm sm:text-base">Need help? Check these resources:</p>
              <div className="space-y-2">
                <a
                  target="_blank"
                  href="https://thegraph.com/docs/en/developing/graph-ts/api/"
                  className="link link-primary text-sm sm:text-base block"
                >
                  🚀 AssemblyScript API
                </a>
                <a
                  target="_blank"
                  href="https://github.com/graphprotocol/graph-tooling/tree/main/packages/ts"
                  className="link link-primary text-sm sm:text-base block"
                >
                  📖 Graph Typescript Library
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Deployment Section */}
        <div className="card bg-base-200 shadow-xl">
          <div className="card-body p-4 sm:p-8">
            <h2 className="card-title text-xl sm:text-2xl mb-4">
              <span className="badge badge-primary">5</span>Deploy Your Changes
            </h2>
            <CodeSnippet code="yarn local-ship" button={true} />

            <div className="mt-4">
              <p className="text-sm sm:text-base italic mb-2">When prompted, enter the version you want to use:</p>
              <div className="mockup-code text-xs sm:text-sm w-full">
                <pre className="pl-8">
                  <code>Which version label to use? (e.g. "v0.0.1"):</code>
                </pre>
              </div>
            </div>

            <div className="mt-6">
              <p className="text-sm sm:text-base italic mb-2">✅ Success will look like this:</p>
              <div className="mockup-code text-xs sm:text-sm w-full">
                <pre className="pl-8">
                  <code>{`Build completed: QmWmmvVp1eV1uYWCNE1poKHvYYa8UJxfdtCzAX1hs9gvxD

Deployed to http://localhost:8000/subgraphs/name/scaffold-eth/your-contract/graphql

Subgraph endpoints:
Queries (HTTP):     http://localhost:8000/subgraphs/name/scaffold-eth/your-contract`}</code>
                </pre>
              </div>
            </div>
          </div>
        </div>

        {/* Testing Section */}
        <div className="card bg-base-200 shadow-xl">
          <div className="card-body p-4 sm:p-8">
            <h2 className="card-title text-xl sm:text-2xl mb-4">
              <span className="badge badge-primary">6</span>Test Your Subgraph
            </h2>
            <p className="text-sm sm:text-base mb-4">Open up the GraphiQL IDE to view your data:</p>

            <a
              target="_blank"
              href="http://localhost:8000/subgraphs/name/scaffold-eth/your-contract"
              className="link link-primary text-sm sm:text-base"
            >
              🚀 http://localhost:8000/subgraphs/name/scaffold-eth/your-contract
            </a>

            <div className="mt-6">
              <p className="text-sm sm:text-base italic mb-4">
                This is a GraphiQL explorer and allows you to test out the GraphQL queries before loading them into your
                frontend. Try out the following query to see if your data is being saved:
              </p>

              <div className="mockup-code text-xs sm:text-sm w-full">
                <pre className="pl-8">
                  <code className="language-graphql">{GRAPHQL_QUERY}</code>
                </pre>
              </div>
            </div>

            <div className="mt-6">
              <p className="text-sm sm:text-base italic mb-2">✅ Success will look like this:</p>
              <img className="rounded-lg border border-base-300" src="/mission-3-response.png" alt="Query Response" />
            </div>

            <p className="text-sm sm:text-base mt-6">
              If you were successful, continue with the next part of the mission.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubgraphContent;
