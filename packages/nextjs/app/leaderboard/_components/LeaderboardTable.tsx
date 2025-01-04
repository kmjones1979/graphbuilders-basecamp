"use client";

import { useEffect, useState } from "react";
import { GetUsersDocument, execute } from "~~/.graphclient";
import { Address } from "~~/components/scaffold-eth";

const LeaderboardTable = () => {
  const [usersData, setUsersData] = useState<any>(null);
  const [error, setError] = useState<any>(null);
  const [sortKey, setSortKey] = useState<string | null>(null);
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");

  useEffect(() => {
    const fetchData = async () => {
      if (!execute || !GetUsersDocument) {
        return;
      }
      try {
        const { data: result } = await execute(GetUsersDocument, {});
        setUsersData(result);
        console.log(result);
      } catch (err) {
        setError(err);
      } finally {
      }
    };

    fetchData();
  }, []);

  // Function to handle sorting
  const handleSort = (key: string) => {
    const order = sortKey === key && sortOrder === "asc" ? "desc" : "asc";
    setSortKey(key);
    setSortOrder(order);
  };

  // Function to sort users data
  const sortedUsersData = () => {
    if (!usersData) return [];
    return [...usersData.users].sort((a, b) => {
      const aValue = a[sortKey as keyof typeof a];
      const bValue = b[sortKey as keyof typeof b];
      if (aValue < bValue) return sortOrder === "asc" ? -1 : 1;
      if (aValue > bValue) return sortOrder === "asc" ? 1 : -1;
      return 0;
    });
  };

  if (error) {
    return null;
  }

  return (
    <div className="bg-base-100">
      <div className="flex justify-center items-center mt-10">
        <div className="overflow-x-auto shadow-2xl rounded-xl">
          <table className="table bg-base-100 table-zebra">
            <thead>
              <tr className="rounded-xl">
                <th className="bg-primary"></th>
                <th className="bg-primary" onClick={() => handleSort("address")}>
                  User
                </th>
                <th className="bg-primary" onClick={() => handleSort("rank")}>
                  Rank
                </th>
                <th className="bg-primary" onClick={() => handleSort("blockTimestamp")}>
                  Joined
                </th>
                <th className="bg-primary" onClick={() => handleSort("lastCredentialMinted")}>
                  Last Active
                </th>
              </tr>
            </thead>
            <tbody>
              {sortedUsersData().map((user: any, index: number) => (
                <tr key={user.address}>
                  <th>{index + 1}</th>
                  <td>
                    <Address address={user?.address} />
                  </td>
                  <td>{user?.rank}</td>
                  <td>{new Date(user?.blockTimestamp * 1000).toLocaleString()}</td>
                  <td>{new Date(user?.lastCredentialMinted * 1000).toLocaleString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default LeaderboardTable;
