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
          You have arrived at the basecamp, you will need to setup your local development environment so that you can
          begin your mission.
        </p>
      </div>
      <div className="flex justify-center top mt-4 mb-4">
        <p>
          1. ...
        </p>
      </div>
      <CodeSnippet code="git checkout mission-0-enlist" button={true} />
    </>
  );
};

export default Subgraph;
