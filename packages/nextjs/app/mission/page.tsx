"use client";

import React, { useState } from "react";
import CodeSnippet from "./_components/CodeSnippet";
import GetEnlisted from "./_components/GetEnlisted";
import type { NextPage } from "next";

const Subgraph: NextPage = () => {
  return (
    <>
      <div className="flex justify-center top">
        <h1 className="text-3xl font-bold pt-4 text-center max-w-2xl">Mission 1</h1>
      </div>
      <div className="flex justify-center top">
        <p className="text-lg text-center max-w-2xl">
          You have arrived at The Graph builders basecamp, adventure awaits you in the skies above but before you get
          started you will need to setup your local development environment so that you can begin your mission.
        </p>
      </div>
      <div className="flex justify-center top mt-4 mb-4">
        <p>
          1. To do this, open up a new terminal and run the following command to spin up your local Graph Node inside of
          docker:
        </p>
      </div>
      <CodeSnippet code="yarn run-node" button={true} />
      <div className="flex justify-center top mt-4 mb-4">
        <p>You will know graph-node is ready when you see the following message:</p>
      </div>
      <CodeSnippet code="INFO Downloading latest blocks from Ethereum, this may take a few minutes..." button={false} />
    </>
  );
};

export default Subgraph;
