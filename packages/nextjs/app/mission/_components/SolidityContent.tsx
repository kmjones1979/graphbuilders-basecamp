import React from "react";
import CodeSnippet from "./CodeSnippet";

const SolidityContent: React.FC = () => {
  return (
    <>
      {/* Part 1 */}
      <div className="flex justify-center top">
        <p className="text-lg text-center max-w-2xl">
          Now that you have successfully enlisted, you will need to establish communications with The Graph Builders
          Basecamp on the lunar surface.
        </p>
      </div>
      <div className="flex justify-center top">
        <h3 className="text-2xl pt-4 text-center max-w-2xl">Environment Setup</h3>
      </div>
      <div className="flex justify-center top">
        <p className="text-lg text-center italic">Before you begin, make sure you are in the proper branch.</p>
      </div>
      <CodeSnippet code="git checkout mission-2-comms" button={true} />
      <div className="flex justify-center top">
        <p className="text-lg text-center italic">Then be sure to install the dependencies.</p>
      </div>
      <CodeSnippet code="yarn install" button={true} />
      <div className="flex justify-center top">
        <p className="text-lg text-center italic">Start your local blockchain.</p>
      </div>
      <CodeSnippet code="yarn chain" button={true} />
      <div className="flex justify-center top">
        <p className="text-lg text-center italic">Then start your frontend, in a new terminal.</p>
      </div>
      <CodeSnippet code="yarn start" button={true} />
      <div className="flex justify-center top">
        <h3 className="text-2xl pt-4 text-center max-w-2xl">Mission Steps:</h3>
      </div>
      <div className="flex justify-center top mt-4 mb-4">
        <p className="text-lg max-w-2xl italic">The starting smart contract code for this mission is as follows:</p>
      </div>
      <div className="flex justify-center top mt-4 mb-4">
        <div className="bg-black p-4 rounded max-w-6xl flex justify-center">
          <pre>
            <code className="language-solidity">{``}</code>
          </pre>
        </div>
      </div>
      <div className="flex justify-center top mt-4 mb-4">
        <p className="text-lg max-w-2xl italic">Placeholder</p>
      </div>
      <h1 className="flex justify-center text-2xl font-bold"> 📝 Task 1: Template Task 📝</h1>
      <div className="flex justify-center top mt-4 mb-4 ">
        <p className="text-lg font-bold max-w-2xl mb-4">To complete this task, follow these steps:</p>
      </div>
      <div className="flex justify-center top mt-4 mb-4">
        <ul className="list-disc list-inside mb-4">
          <li>One</li>
          <li>Two</li>
          <li>Three</li>
        </ul>
      </div>
      <div className="flex justify-center top mt-4 mb-4">
        <ul>
          <li>
            <a target="_blank" href="https://www.foo.com">
              {" "}
              👉🏼 Look at this page if you get lost... TEMPLATE 🔎
            </a>
          </li>
        </ul>
      </div>
      <div className="flex justify-center top mt-4 mb-4">
        <p className="text-lg max-w-2xl italic">Deploy your changes...</p>
      </div>
      <CodeSnippet code="yarn deploy --reset" button={true} />
      <div className="flex justify-center top mt-4 mb-4">
        <p className="text-lg max-w-2xl italic">✅ Success will look like this: 👇🏼</p>
      </div>

      <div className="flex justify-center top mt-4 mb-4">
        <div className="bg-black p-4 rounded max-w-6xl flex justify-center">
          <pre>
            <code className="language-solidity">{`CONSOLE OUTPUT HERE`}</code>
          </pre>
        </div>
      </div>
      <div className="flex justify-center top">
        <p className="text-lg text-center max-w-2xl">
          Once you deploy your contract navigate to the "Debug Contracts" tab and test your changes.
        </p>
      </div>
    </>
  );
};

export default SolidityContent;
