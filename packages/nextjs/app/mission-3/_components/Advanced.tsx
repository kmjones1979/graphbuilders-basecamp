import React from "react";
import CodeSnippet from "./CodeSnippet";

const GRAPHQL_QUERY = `
query MyQuery {
  holders(first: 10, orderDirection: desc, orderBy: blockTimestamp) {
    balance
    blockNumber
    blockTimestamp
    id
    transactionHash
    transfers(first: 10) {
      from
      to {
        id
      }
    }
  }
}`;

const Advanced: React.FC = () => {
  return (
    <div className="flex justify-center">
      <div className="w-full p-4 space-y-6 max-w-[95vw] sm:max-w-4xl">
        {/* Header Card */}
        <div className="card bg-base-200 shadow-xl">
          <div className="card-body text-center space-y-4">
            <h1 className="text-3xl sm:text-3xl font-bold">Advanced Subgraph Techniques</h1>
            <p className="text-base sm:text-xl">
              Welcome to your first advanced subgraph section! The road less-traveled can be long and arduous, but the
              rewards are often lucrative! In this section will you will learn about some key changes you can make to
              get the most out of your subgraph. You will learn about derivedFrom, graph-ts, and how to perform
              off-chain calculations in your subgraph.
            </p>
          </div>
        </div>

        {/* Task 1 */}
        <div className="card bg-base-200 shadow-xl">
          <div className="card-body p-4 sm:p-8">
            <h2 className="card-title text-xl sm:text-2xl mb-4">
              📝 Task 1: Track accounts that hold the Moon Token using derivedFrom
            </h2>

            <p className="text-sm sm:text-base text-base-content/80 mb-4">
              The <code className="badge badge-ghost text-xs">derivedFrom</code> field is a powerful feature that allows
              you to optimize your subgraph by reducing the amount of data that needs to be indexed. It is used to
              create relationships between entities and can be used to optimize the performance of your subgraph.
            </p>

            <div className="alert bg-base-300 border border-base-content/10">
              <div className="space-y-2">
                <p className="text-sm sm:text-base text-base-content/80">To learn more about derivedFrom, check out:</p>
                <div className="space-y-1">
                  <a
                    href="https://thegraph.com/docs/en/developing/graph-ts/api/#looking-up-derived-entities"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link link-primary text-sm sm:text-base block"
                  >
                    📚 The Graph Documentation
                  </a>
                  <a
                    href="https://thegraph.com/blog/improve-subgraph-performance-avoiding-large-arrays/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link link-primary text-sm sm:text-base block"
                  >
                    📝 Performance Optimization Blog Post
                  </a>
                </div>
              </div>
            </div>

            <div className="mt-6">
              <p className="text-base sm:text-lg font-bold mb-4">To complete this task, follow these steps:</p>
              <ul className="list-disc list-inside space-y-2 text-sm sm:text-base text-base-content/80">
                <li>
                  Create a new entity in <code className="badge badge-ghost text-xs">schema.graphql</code> called{" "}
                  <code className="badge badge-ghost text-xs">Holder</code>
                </li>
                <li>
                  Add a <code className="badge badge-ghost text-xs">transfers</code> field to that entity
                </li>
                <li>
                  Configure the transfers entity to use the{" "}
                  <code className="badge badge-ghost text-xs">derivedFrom</code> field to associate the Transfer
                  entities to the Holder entity
                </li>
                <li>Update the logic of your handler to create a Holder entity as needed</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Task 2 */}
        <div className="card bg-base-200 shadow-xl">
          <div className="card-body p-4 sm:p-8">
            <h2 className="card-title text-xl sm:text-2xl mb-4">📝 Task 2: Calculate balances for each account</h2>

            <p className="text-sm sm:text-base text-base-content/80 mb-4">
              Now that we have accounts that hold Moon token, we can calculate the balance for each account by using the{" "}
              <code className="badge badge-ghost text-xs">graph-ts</code> package. This package provides a set of
              functions that allow us to perform off-chain calculations which can then be stored in The Graph.
            </p>

            <div className="alert bg-base-300 border border-base-content/10">
              <p className="text-sm sm:text-base text-base-content/80">
                To learn more about graph-ts, check out the{" "}
                <a
                  href="https://github.com/graphprotocol/graph-tooling/tree/main/packages/ts"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link link-primary"
                >
                  graph-tooling repository
                </a>
              </p>
            </div>

            <div className="mt-6">
              <p className="text-base sm:text-lg font-bold mb-4">To complete this task, follow these steps:</p>
              <ul className="list-disc list-inside space-y-2 text-sm sm:text-base text-base-content/80">
                <li>Add a balance field to the Holder entity</li>
                <li>
                  Use the <code className="badge badge-ghost text-xs">graph-ts</code> package and modify the{" "}
                  <code className="badge badge-ghost text-xs">handleTransfer</code> function to calculate and store the
                  balance for each account as transfers are created
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Deployment Section */}
        <div className="card bg-base-200 shadow-xl">
          <div className="card-body p-4 sm:p-8">
            <h2 className="card-title text-xl sm:text-2xl mb-4">Deploy Your Changes</h2>
            <p className="text-sm sm:text-base text-base-content/80 mb-4">
              After you have completed the tasks, deploy your changes:
            </p>

            <CodeSnippet code="yarn local-ship" button={true} />

            <div className="alert bg-base-300 border border-base-content/10 mt-6">
              <p className="text-sm sm:text-base text-base-content/80">
                When prompted, enter the version you want to use. If this is your second deployment you will need to
                increase the version.
              </p>
            </div>

            <div className="mockup-code text-xs sm:text-sm w-full mt-4">
              <pre className="pl-8">
                <code>Which version label to use? (e.g. "v0.0.2"):</code>
              </pre>
            </div>
          </div>
        </div>

        {/* Testing Section */}
        <div className="card bg-base-200 shadow-xl">
          <div className="card-body p-4 sm:p-8">
            <h2 className="card-title text-xl sm:text-2xl mb-4">Test Your Implementation</h2>
            <p className="text-sm sm:text-base text-base-content/80 mb-4">
              Now we can test to make sure our subgraph is properly indexing using the GraphiQL explorer. Visit the{" "}
              <a
                href="http://localhost:8000/subgraphs/name/scaffold-eth/your-contract/graphql"
                target="_blank"
                rel="noopener noreferrer"
                className="link link-primary"
              >
                GraphiQL explorer
              </a>{" "}
              and execute the following query:
            </p>

            <div className="mockup-code text-xs sm:text-sm w-full">
              <pre className="pl-8">
                <code className="language-graphql">{GRAPHQL_QUERY}</code>
              </pre>
            </div>

            <div className="mt-6">
              <p className="text-sm sm:text-base italic mb-2">✅ Success will look like this:</p>
              <img
                className="rounded-lg border border-base-300"
                src="/mission-3-sq-response.png"
                alt="Query Response"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Advanced;
