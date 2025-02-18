import React from "react";
import CodeSnippet from "./CodeSnippet";
import ClickableImage from "~~/components/ClickableImage";

const SCHEMA = `
type Enlisted @entity {
    id: Bytes!
    account: Bytes!
    blockNumber: BigInt!
    blockTimestamp: BigInt!
    transactionHash: Bytes!
}`;

const HANDLER_CODE = `
import { Enlisted as EnlistedEvent } from "../generated/Enlist/Enlist";
import { Enlisted } from "../generated/schema";

// Define the handleEnlisted function
export function handleEnlisted(event: EnlistedEvent): void {
    // Add logic here
}`;

const GRAPHQL_QUERY = `
query MyQuery {
  enlisteds(first: 10, orderBy: blockTimestamp, orderDirection: asc) {
    id
    account
    blockNumber
    blockTimestamp
    transactionHash
  }
}`;

const SubgraphContent: React.FC = () => {
  return (
    <div className="flex justify-center">
      <div className="w-full p-4 space-y-6 max-w-[95vw] sm:max-w-4xl">
        {/* Header Card */}
        <div className="card bg-base-200 shadow-xl">
          <div className="card-body text-center space-y-4">
            <h1 className="text-3xl sm:text-3xl font-bold">Subgraph Development</h1>
            <p className="text-base sm:text-xl">
              In this part of the mission you will need to set up your local development environment so that you can
              index the data from the smart contract. We will do this by deploying a subgraph to your local machine via
              Docker.
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
              <div className="mockup-code text-xs sm:text-sm">
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
            <h2 className="card-title text-xl sm:text-2xl mb-4">
              <span className="badge badge-primary">2</span>Configure Subgraph
            </h2>
            <p className="text-sm sm:text-base text-base-content/80 mb-4">
              Next you will need to create a subgraph configuration inside your graph-node instance.
            </p>
            <CodeSnippet code="yarn local-create" button={true} />

            <div className="space-y-4 mt-6">
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
              <span className="badge badge-primary">3</span>Implement Event Handler
            </h2>
            <p className="text-sm sm:text-base text-base-content/80 mb-4">
              Now you will need to complete the code for the handler to process the event data coming off the smart
              contract. Open up your project in a text editor and navigate to the handler in{" "}
              <code className="badge badge-ghost text-xs">packages/subgraph/src/mapping.ts</code>
            </p>

            <div className="mt-6">
              <p className="text-sm sm:text-base italic mb-2">The schema for our subgraph is as follows:</p>
              <div className="mockup-code text-xs sm:text-sm">
                <pre className="pl-8">
                  <code className="language-graphql">{SCHEMA}</code>
                </pre>
              </div>
            </div>

            <p className="text-sm sm:text-base text-base-content/80 mt-6">
              In our case we have an event called Enlisted that we want to process and save to the database. In our case
              the schema is called Enlisted and we have a function called handleEnlisted. In this function we will save
              the event data to the database.
            </p>
          </div>
        </div>

        {/* Task Section */}
        <div className="card bg-base-200 shadow-xl">
          <div className="card-body p-4 sm:p-8">
            <h2 className="card-title text-xl sm:text-2xl mb-4">
              <span className="badge badge-primary">4</span>Add logic to the handler to index the Enlisted event data
            </h2>

            <p className="text-sm sm:text-base mb-4">
              Here is the starting handler located in{" "}
              <code className="badge badge-ghost text-xs">packages/subgraph/src/mapping.ts</code>
            </p>

            <div className="mockup-code text-xs sm:text-sm">
              <pre className="pl-8">
                <code className="language-typescript">{HANDLER_CODE}</code>
              </pre>
            </div>

            <div className="mt-6">
              <p className="text-base sm:text-lg font-bold mb-4">To complete this task, follow these steps:</p>
              <ul className="list-disc list-inside space-y-2 text-sm sm:text-base text-base-content/80">
                <li>
                  Use the <code className="badge badge-ghost text-xs">Enlisted</code> schema and the{" "}
                  <code className="badge badge-ghost text-xs">new</code> keyword to create an entry in the database
                </li>
                <li>Set the properties of the entity using event data</li>
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
            <h2 className="card-title text-xl sm:text-2xl mb-4">
              <span className="badge badge-primary">5</span>Deploy Your Changes
            </h2>
            <CodeSnippet code="yarn local-ship" button={true} />

            <div className="mt-4">
              <p className="text-sm sm:text-base italic mb-2">When prompted, enter the version you want to use:</p>
              <div className="mockup-code text-xs sm:text-sm">
                <pre>
                  <code>Which version label to use? (e.g. "v0.0.1"):</code>
                </pre>
              </div>
            </div>

            <div className="mt-6">
              <p className="text-sm sm:text-base italic mb-2">✅ Success will look like this:</p>
              <div className="mockup-code text-xs sm:text-sm">
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

              <div className="mockup-code text-xs sm:text-sm">
                <pre className="pl-8">
                  <code className="language-graphql">{GRAPHQL_QUERY}</code>
                </pre>
              </div>
            </div>

            <div className="mt-6">
              <p className="text-sm sm:text-base italic mb-2">✅ Success will look like this:</p>
              <ClickableImage src="/mission-1-response.png" alt="Query Response" caption="Click to enlarge" />
            </div>
          </div>
        </div>

        {/* Graph Client Section */}
        <div className="card bg-base-200 shadow-xl">
          <div className="card-body p-4 sm:p-8">
            <h2 className="card-title text-xl sm:text-2xl mb-4">
              <span className="badge badge-primary">7</span>Build Graph Client
            </h2>
            <p className="text-sm sm:text-base mb-4">
              This part of the mission is optional. If you would like to build the graph client, you can run the
              following command, this will create a new folder called{" "}
              <code className="badge badge-ghost text-xs">graphclient</code>
              that will contain the artifacts:
            </p>
            <CodeSnippet code="yarn graphclient:build" button={true} />

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
