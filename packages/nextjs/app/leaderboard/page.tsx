"use client";

import React from "react";
import LeaderboardTable from "./_components/LeaderboardTable";
import type { NextPage } from "next";

const Leaderboard: NextPage = () => {
  return (
    <>
      <div className="bg-base-100">
        <div className="flex justify-center top">
          <h1 className="text-4xl font-bold pt-4 text-center max-w-2xl">Mission Leaderboard</h1>
        </div>
        <LeaderboardTable />
      </div>
    </>
  );
};

export default Leaderboard;
