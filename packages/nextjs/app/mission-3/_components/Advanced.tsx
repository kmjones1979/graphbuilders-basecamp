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
              <span className="badge badge-primary">1</span>Create Token Holder Tracking
            </h2>

            <div className="alert bg-base-300 border border-base-content/10 mb-6">
              <div>
                <p className="text-sm sm:text-base text-base-content/80">
                  <span className="font-bold">Goal:</span> Create a new entity to track:
                  <ul className="list-disc list-inside mt-2 ml-4">
                    <li>Token holder addresses</li>
                    <li>Current token balances</li>
                    <li>Transfer history (using derivedFrom)</li>
                  </ul>
                </p>
              </div>
            </div>

            <div className="alert alert-info mb-6">
              <div className="flex items-start">
                <span className="text-lg mr-2">💡</span>
                <p>
                  The <code className="badge badge-ghost text-xs">@derivedFrom</code> field creates a virtual
                  relationship without storing duplicate data, improving efficiency.
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="font-bold mb-2 flex items-center">
                  <span className="badge badge-secondary mr-2">Step 1</span>
                  Create Holder Entity
                </h3>
                <p className="text-sm mb-2">
                  In <code className="badge badge-ghost text-xs">schema.graphql</code> add:
                </p>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>
                    Create a new <code className="badge badge-ghost text-xs">Holder</code> entity type
                  </li>
                  <li>Add fields for address (id), balance, and transfer history</li>
                  <li>
                    Use <code className="badge badge-ghost text-xs">@derivedFrom</code> to link transfers
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="font-bold mb-2 flex items-center">
                  <span className="badge badge-secondary mr-2">Step 2</span>
                  Update Transfer Handler
                </h3>
                <p className="text-sm mb-2">
                  In <code className="badge badge-ghost text-xs">mapping.ts</code>:
                </p>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Handle both sender and receiver in transfers</li>
                  <li>Create new holders if they don't exist</li>
                  <li>Update balances using graph-ts math operations</li>
                  <li>Remember to save your changes!</li>
                </ul>
              </div>

              <div className="alert alert-success">
                <div className="flex items-start">
                  <span className="text-lg mr-2">✓</span>
                  <p>Your subgraph will now track token holders and their balances automatically as transfers occur</p>
                </div>
              </div>
            </div>

            <div className="alert bg-base-300 border border-base-content/10">
              <div className="space-y-2">
                <p className="text-sm sm:text-base text-base-content/80">To learn more about derivedFrom:</p>
                <div className="space-y-1">
                  <a
                    href="https://thegraph.com/docs/en/developing/graph-ts/api/#looking-up-derived-entities"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link link-primary text-sm sm:text-base block"
                  >
                    📚 The Graph Documentation
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Task 2 */}
        <div className="card bg-base-200 shadow-xl">
          <div className="card-body p-4 sm:p-8">
            <h2 className="card-title text-xl sm:text-2xl mb-4">
              <span className="badge badge-primary">2</span>Calculate Token Balances
            </h2>

            <div className="alert bg-base-300 border border-base-content/10 mb-6">
              <div>
                <p className="text-sm sm:text-base text-base-content/80">
                  <span className="font-bold">Goal:</span> Use graph-ts to calculate and track token balances for each
                  holder
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="font-bold mb-2">Step 1: Import Required Types</h3>
                <p className="text-sm mb-2">
                  Add to top of <code className="badge badge-ghost text-xs">mapping.ts</code>:
                </p>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Import BigInt from @graphprotocol/graph-ts</li>
                </ul>
              </div>

              <div>
                <h3 className="font-bold mb-2">Step 2: Update Balance Logic</h3>
                <p className="text-sm mb-2">In handleTransfer function:</p>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Subtract amount from sender's balance</li>
                  <li>Add amount to receiver's balance</li>
                  <li>Handle new account case (balance = 0)</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Deployment Section */}
        <div className="card bg-base-200 shadow-xl">
          <div className="card-body p-4 sm:p-8">
            <h2 className="card-title text-xl sm:text-2xl mb-4">
              <span className="badge badge-primary">2</span>Deploy Your Changes
            </h2>
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
            <h2 className="card-title text-xl sm:text-2xl mb-4">
              <span className="badge badge-primary">3</span>Test Your Implementation
            </h2>
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
