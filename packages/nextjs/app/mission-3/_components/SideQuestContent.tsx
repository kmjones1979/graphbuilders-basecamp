import React from "react";
import CodeSnippet from "./CodeSnippet";

const SubgraphContent: React.FC = () => {
  return (
    <>
      {/* Part 2 */}
      <div className="flex justify-center top">
        <p className="text-lg text-center max-w-2xl">
          Welcome to your side quest! The road less-traveled can be long and arduous, but the rewards are often
          lucrativeg! In this section will you will learn about some key changes you can make to your subgraph to
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
            href="https://thegraph.com/docs/en/developer/assemblyscript-api/#derivedfrom"
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
          </ol>
          If needed, you can reference examples of the AssemblyScript API in the docs here:
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
          us to perform offchain calculations which can then be stored in The Graph.
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
              Use the <span className="highlight-code">graph-ts</span> package to calculate the balance for each account
              as transfers are created.
            </li>
          </ol>
          If needed, you can reference examples of the AssemblyScript API in the docs here:
        </p>
      </div>
    </>
  );
};

export default SubgraphContent;
