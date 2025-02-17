import React from "react";
import CodeSnippet from "./CodeSnippet";

const SCHEMA = `type CommsEstablished @entity {
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
}`;

const HANDLER_CODE = `import {
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
}`;

const GRAPHQL_QUERY = `query MyQuery {
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
}`;

const SubgraphContent: React.FC = () => {
  return (
    <div className="flex justify-center">
      <div className="w-full p-4 space-y-6 max-w-[95vw] sm:max-w-4xl">
        {/* Header */}
        <div className="card bg-base-200 shadow-xl">
          <div className="card-body p-4 sm:p-8">
            <h1 className="card-title text-2xl sm:text-3xl mb-4">Subgraph</h1>
            <p className="text-sm sm:text-base text-base-content/80">
              In this part of the mission you will need to index the data from the Comms smart contract into The Graph.
            </p>
          </div>
        </div>

        {/* Local Graph Node Setup */}
        <div className="card bg-base-200 shadow-xl">
          <div className="card-body p-4 sm:p-8">
            <h2 className="card-title text-xl sm:text-2xl mb-4">1. Start Local Graph Node</h2>
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
                <pre>
                  <code>INFO Downloading latest blocks from Ethereum, this may take a few minutes...</code>
                </pre>
              </div>
            </div>
          </div>
        </div>

        {/* Subgraph Configuration */}
        <div className="card bg-base-200 shadow-xl">
          <div className="card-body p-4 sm:p-8">
            <h2 className="card-title text-xl sm:text-2xl mb-4">2. Configure Subgraph</h2>
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
            <h2 className="card-title text-xl sm:text-2xl mb-4">3. Implement Event Handlers</h2>
            <p className="text-sm sm:text-base text-base-content/80 mb-4">
              Now you will need to complete the code for the handler to process the event data coming off the smart
              contract. Open up your project in a text editor and navigate to the handler in{" "}
              <code className="badge badge-ghost text-xs">packages/subgraph/src/mapping.ts</code>
            </p>

            <div className="mt-6">
              <p className="text-sm sm:text-base italic mb-2">Open the project in your editor:</p>
              <CodeSnippet code="code ." button={true} />
            </div>

            <div className="mt-6">
              <p className="text-sm sm:text-base italic mb-2">The schema for our subgraph is as follows:</p>
              <div className="mockup-code text-xs sm:text-sm w-full">
                <pre>
                  <code className="language-graphql">{SCHEMA}</code>
                </pre>
              </div>
            </div>

            <p className="text-sm sm:text-base text-base-content/80 mt-6">
              In our case we have two events to handle in this subgraph. The first coming from the{" "}
              <code className="badge badge-ghost text-xs">CommsEstablished</code> event and the second coming from the{" "}
              <code className="badge badge-ghost text-xs">OwnershipTransferred</code> event from the Ownership contract.
              Since our schema is already created for us so we just need to add the logic to handle the events.
            </p>
          </div>
        </div>

        {/* Task Section */}
        <div className="card bg-base-200 shadow-xl">
          <div className="card-body p-4 sm:p-8">
            <h2 className="card-title text-xl sm:text-2xl mb-4">
              📝 Task: Add logic to the handler to index the CommsEstablished and OwnershipTransferred events
            </h2>

            <p className="text-sm sm:text-base mb-4">
              Here is the starting handler located in{" "}
              <code className="badge badge-ghost text-xs">packages/subgraph/src/mapping.ts</code>
            </p>

            <div className="mockup-code text-xs sm:text-sm w-full">
              <pre>
                <code className="language-typescript">{HANDLER_CODE}</code>
              </pre>
            </div>

            <div className="mt-6">
              <p className="text-base sm:text-lg font-bold mb-4">To complete this task, follow these steps:</p>
              <ul className="list-disc list-inside space-y-2 text-sm sm:text-base text-base-content/80">
                <li>For each handler, create a new entity</li>
                <li>Set the properties of the entity using event and block data</li>
                <li>
                  Save the entity to the database using the <code className="badge badge-ghost text-xs">save()</code>{" "}
                  method
                </li>
              </ul>
            </div>

            <div className="mt-6 space-y-2">
              <p className="text-sm sm:text-base">If needed, you can reference examples in the docs here:</p>
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
            <h2 className="card-title text-xl sm:text-2xl mb-4">4. Deploy Your Changes</h2>
            <CodeSnippet code="yarn local-ship" button={true} />

            <div className="mt-4">
              <p className="text-sm sm:text-base italic mb-2">When prompted, enter the version you want to use:</p>
              <div className="mockup-code text-xs sm:text-sm w-full">
                <pre>
                  <code>Which version label to use? (e.g. "v0.0.1"):</code>
                </pre>
              </div>
            </div>

            <div className="mt-6">
              <p className="text-sm sm:text-base italic mb-2">✅ Success will look like this:</p>
              <div className="mockup-code text-xs sm:text-sm w-full">
                <pre>
                  <code>{`Build completed: QmSPR7AmLy1FHX4aPdSKNn7GHXy5xGxz6xR6YuD6UMcfAc

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
            <h2 className="card-title text-xl sm:text-2xl mb-4">5. Test Your Subgraph</h2>
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
                <pre>
                  <code className="language-graphql">{GRAPHQL_QUERY}</code>
                </pre>
              </div>
            </div>

            <div className="mt-6">
              <p className="text-sm sm:text-base italic mb-2">✅ Success will look like this:</p>
              <img className="rounded-lg border border-base-300" src="/mission-2-response.png" alt="Query Response" />
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
