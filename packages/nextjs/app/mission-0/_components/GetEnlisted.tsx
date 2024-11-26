"use client";

import React, { useEffect, useState } from "react";
import { GetEnlistedDocument, execute } from "~~/.graphclient";

const GetEnlisted = () => {
  const [enlistedData, setEnlistedData] = useState<any[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      if (!execute || !GetEnlistedDocument) {
        return;
      }
      try {
        const { data } = await execute(GetEnlistedDocument, {});
        setEnlistedData(data.enlisteds);
      } catch (err) {
        setError("Failed to fetch data");
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <div className="flex justify-center top mt-4 mb-4">
        <h2 className="text-2xl font-bold">Enlisted Data</h2>
      </div>

      {error && <p className="text-red-500 text-center">{error}</p>}

      <div className="flex justify-center">
        <div className="card bg-base-100 shadow-xl max-w-2xl">
          <div className="card-body">
            <h3 className="card-title">Enlisted Data Table</h3>
            <div className="overflow-x-auto">
              <table className="table w-full">
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Account</th>
                    <th>Block Number</th>
                    <th>Block Timestamp</th>
                    <th>Transaction Hash</th>
                  </tr>
                </thead>
                <tbody>
                  {enlistedData.map(item => (
                    <tr key={item.id}>
                      <td>{item.id}</td>
                      <td>{item.account}</td>
                      <td>{item.blockNumber.toString()}</td>
                      <td>{item.blockTimestamp.toString()}</td>
                      <td>{item.transactionHash}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default GetEnlisted;
