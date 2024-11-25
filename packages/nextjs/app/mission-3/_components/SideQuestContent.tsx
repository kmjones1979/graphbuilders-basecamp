import React from "react";
import CodeSnippet from "./CodeSnippet";

const SubgraphContent: React.FC = () => {
  return (
    <>
      {/* Part 2 */}
      <div className="flex justify-center top">
        <p className="text-lg text-center max-w-2xl">
          Welcome to your side quest! The road less-traveled can be long and arduous, but the rewards are often
          lucrative! In this section will you will learn about some key changes you can make to your subgraph to
          optimize performance and perform off-chain calculations of your data.
        </p>
      </div>
      <div className="flex justify-center top mt-4 mb-4">
        <p className="text-lg max-w-2xl italic">Ok let's get started testing your skills!</p>
      </div>
      <h1 className="flex justify-center text-2xl font-bold">
        {" "}
        📝 Task 1: Track accounts that hold the Moon Token using derivedFrom 📝
      </h1>
      <div className="flex justify-center top mt-4 mb-4">
        <p className="text-lg max-w-2xl italic">
          The <span className="highlight-code">derivedFrom</span> field is a powerful feature that allows you to
          optimize your subgraph by reducing the amount of data that needs to be indexed. It is used to create
          relationships between entities and can be used to optimize the performance of your subgraph.
        </p>
      </div>

      <div className="flex justify-center top mt-4 mb-4">
        <p className="text-lg max-w-2xl italic">
          To learn more about derivedFrom, you can reference the docs{" "}
          <a
            href="https://thegraph.com/docs/en/developing/graph-ts/api/#looking-up-derived-entities"
            className="text-purple-400"
            target="_blank"
          >
            here
          </a>{" "}
          or reference the blog post{" "}
          <a
            href="https://thegraph.com/blog/improve-subgraph-performance-avoiding-large-arrays/"
            className="text-purple-400"
            target="_blank"
          >
            here
          </a>
          .
        </p>
      </div>
      <div className="flex justify-center top mt-4 mb-4 ">
        <p className="text-lg font-bold max-w-2xl mb-4">To complete this task, follow these steps:</p>
      </div>
      <div className="flex justify-center top mt-4 mb-4">
        <p className="text-lg max-w-2xl">
          <ol className="list-disc list-inside mb-4">
            <li>
              Create a new entity in <span className="highlight-code">schema.graphql</span> called{" "}
              <span className="highlight-code">Holder</span>. This will be used to track accounts that hold the Moon
              Token.
            </li>
            <li>
              Add a <span className="highlight-code">transfers</span> field that will hold a list of transfers that are
              associated with the Holder.
            </li>
            <li>
              Use the <span className="highlight-code">derivedFrom</span> field to associate the Transfer entities to
              the Holder entity.
            </li>
            <li>
              Update the logic of your handler to create a Holder entity if it doesn't exist and update the balance for
              the Holder entity.
            </li>
          </ol>
        </p>
      </div>
      <div className="flex justify-center top">
        <p className="text-lg text-center max-w-2xl italic">Ready for the next task?</p>
      </div>
      <h1 className="flex justify-center text-2xl font-bold"> 📝 Task 2: Calculate balances for each account 📝</h1>
      <div className="flex justify-center top mt-4 mb-4">
        <p className="text-lg max-w-2xl italic">
          Now that we have accounts that hold Moon token, we can calculate the balance for each account by using the{" "}
          <span className="highlight-code">graph-ts</span> package. This package provides a set of functions that allow
          us to perform off-chain calculations which can then be stored in The Graph.
        </p>
      </div>
      <div className="flex justify-center top mt-4 mb-4">
        <p className="text-lg max-w-2xl italic">
          To learn more about graph-ts, you can reference the graph-tooling github repo{" "}
          <a
            href="https://github.com/graphprotocol/graph-tooling/tree/main/packages/ts"
            className="text-purple-400"
            target="_blank"
          >
            here
          </a>
        </p>
      </div>
      <div className="flex justify-center top mt-4 mb-4 ">
        <p className="text-lg font-bold max-w-2xl mb-4">To complete this task, follow these steps:</p>
      </div>
      <div className="flex justify-center top mt-4 mb-4">
        <p className="text-lg max-w-2xl">
          <ol className="list-disc list-inside mb-4">
            <li>Add a balance field to the Holder entity.</li>
            <li>
              Use the <span className="highlight-code">graph-ts</span> package and modify the{" "}
              <span className="highlight-code">handleTransfer</span> function to calculate and store the balance for
              each account as transfers are created.
            </li>
          </ol>
          If needed, you can reference examples of the AssemblyScript API in the docs here:
        </p>
      </div>
      <div className="flex justify-center top mt-4 mb-4">
        <p className="text-lg font-bold  max-w-2xl">After you have completed the task, ship your changes...</p>
      </div>
      <CodeSnippet code="yarn local-ship" button={true} />
      <div className="flex justify-center top mt-4 mb-4">
        <p className="text-lg max-w-2xl italic">
          When prompted, enter the following version you want to use. If this is your second deployment you will need to
          increase the version.
        </p>
      </div>
      <CodeSnippet code='Which version label to use? (e.g. "v0.0.2"):' button={false} />
      <div className="flex justify-center top mt-4 mb-4">
        <p className="text-lg max-w-2xl italic">
          Now we can test to make sure our subgraph is properly indexing using the GraphiQL explorer. Head over to the
          GraphiQL explorer page{" "}
          <a
            href="http://localhost:8000/subgraphs/name/scaffold-eth/your-contract/graphql"
            target="_blank"
            className="text-purple-400"
          >
            here
          </a>{" "}
          and execute the following query:
        </p>
      </div>

      <div className="flex justify-center top mt-4 mb-4">
        <div className="bg-black p-4 rounded max-w-6xl flex justify-center">
          <pre>
            <code className="language-graphql">
              {`query MyQuery {
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
}
`}
            </code>
          </pre>
        </div>
      </div>
      <div className="flex justify-center top mt-4 mb-4">
        <p className="text-lg max-w-2xl italic">✅ Success will look like this: 👇🏼</p>
      </div>
      <div className="flex justify-center top mt-4 mb-4 ">
        <img className="rounded-lg max-w-2xl" src="/mission-3-sq-response.png" alt="studio" />
      </div>
    </>
  );
};

export default SubgraphContent;
