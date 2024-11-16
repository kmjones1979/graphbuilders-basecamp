"use client";

import { useEffect, useState } from "react";
import { GetEnlistedDocument, execute } from "~~/.graphclient";

const GetEnlisted = () => {
  const [enlistedData, setEnlistedData] = useState<any>(null);
  const [error, setError] = useState<any>(null);

  useEffect(() => {
    const fetchData = async () => {
      if (!execute || !GetEnlistedDocument) {
        return;
      }
      try {
        const { data: result } = await execute(GetEnlistedDocument, {});
        setEnlistedData(result);
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

  return <> </>;
};

export default GetEnlisted;
