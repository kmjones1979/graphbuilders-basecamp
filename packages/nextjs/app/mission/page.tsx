"use client";

import React, { useState } from "react";
import CodeSnippet from "./_components/CodeSnippet";
import GetEnlisted from "./_components/GetEnlisted";
import type { NextPage } from "next";

const Subgraph: NextPage = () => {
  return (
    <>
      <div className="flex justify-center top">
        <h1 className="text-3xl font-bold pt-4 text-center max-w-2xl">Mission 0</h1>
      </div>
      <div className="flex justify-center top">
        <p className="text-lg text-center max-w-2xl">
          You have arrived at the Academy. You are now ready to begin your journey. The first step is to enlist in the
          Academy. This can be done by checking out the mission-1-enlist branch.
        </p>
      </div>
      <div className="flex justify-center top mt-4 mb-4 ">
        <p className="text-lg font-bold max-w-2xl">1. Checkout Mission 1 </p>
      </div>
      <CodeSnippet code="git checkout mission-1-enlist" button={true} />
    </>
  );
};

export default Subgraph;
