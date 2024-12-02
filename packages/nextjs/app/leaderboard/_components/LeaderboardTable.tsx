"use client";

import { useEffect, useState } from "react";
import { GetUsersDocument, execute } from "~~/.graphclient";
import { Address } from "~~/components/scaffold-eth";

const LeaderboardTable = () => {
  const [usersData, setUsersData] = useState<any>(null);
  const [error, setError] = useState<any>(null);

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

  if (error) {
    return null;
  }

  return (
    <div className="flex justify-center items-center mt-10">
      <div className="overflow-x-auto shadow-2xl rounded-xl">
        <table className="table bg-base-100 table-zebra">
          <thead>
            <tr className="rounded-xl">
              <th className="bg-primary"></th>
              <th className="bg-primary">User</th>
              <th className="bg-primary">Rank</th>
              <th className="bg-primary">Joined</th>
            </tr>
          </thead>
          <tbody>
            {usersData?.users?.map((user: any, index: number) => (
              <tr key={user.address}>
                <th>{index + 1}</th>
                <td>
                  <Address address={user?.address} />
                </td>
                <td>{user?.rank}</td>
                <td>{new Date(user?.blockTimestamp * 1000).toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default LeaderboardTable;
