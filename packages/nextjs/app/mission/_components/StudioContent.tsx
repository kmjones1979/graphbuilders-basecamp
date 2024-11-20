import React from "react";
import CodeSnippet from "./CodeSnippet";

const StudioContent: React.FC = () => {
  return (
    <>
      {/* Part 4 */}
      <div className="flex justify-center top">
        <p className="text-lg text-center max-w-2xl">
          In this next part of the mission you will deploy your subgraph to The Graph Subgraph Studio.
        </p>
      </div>
      <div className="flex justify-center top mt-4 mb-4 ">
        <p className="text-lg font-bold max-w-2xl">
          1. Create a subgraph in the studio by visiting the following url:
          <span className="italic">
            {" "}
            <a href="https://thegraph.com/studio/" target="_blank" rel="noreferrer">
              https://thegraph.com/studio/
            </a>
          </span>
          You will need to connect your wallet to the studio to create a subgraph.
        </p>
      </div>
      <div className="flex justify-center top mt-4 mb-4">
        <p className="text-lg max-w-2xl italic">Click the "Connect" button on the top right of the screen.</p>
      </div>
      <div className="flex justify-center top mt-4 mb-4">
        <p className="text-lg max-w-2xl italic">Choose the wallet type you would like to connect.</p>
      </div>
      <div className="flex justify-center top mt-4 mb-4">
        <p className="text-lg max-w-2xl italic">Confirm the connection in your wallet.</p>
      </div>
      <div className="flex justify-center top mt-4 mb-4">
        <p className="text-lg max-w-2xl italic">Sign the message to connect your wallet.</p>
      </div>
      <div className="flex justify-center top mt-4 mb-4 ">
        <p className="text-lg max-w-2xl italic">Click the "Create a Subgraph" button.</p>
      </div>
      <div className="flex justify-center top mt-4 mb-4">
        <p className="text-lg max-w-2xl italic">Name your subgraph and click "Create Subgraph".</p>
      </div>
    </>
  );
};

export default StudioContent;
