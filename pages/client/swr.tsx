import Link from "next/link";
import React from "react";
import useSWR from "swr";

const fetcher = (...args: any) => fetch(args).then((res) => res.json());
const Client = () => {
  const { data, error } = useSWR("https://dummyjson.com/users", fetcher);
  if (error) {
    return <h1>Error Occur</h1>;
  }
  if (!data) {
    return (
      <h1
        style={{
          textAlign: "center",
        }}
      >
        Loading....
      </h1>
    );
  }
  return (
    <div
      style={{
        textAlign: "center",
      }}
    >
      <h1 style={{ textDecoration: "underline" }}>Client Site Rendering</h1>
      {data?.users?.length >= 1 ? (
        data?.users?.map((d: any, i: number) => {
          return (
            <Link href={`/client/${d.id}`} key={i}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  fontSize: "24px",
                }}
              >
                {d.firstName}
              </div>
            </Link>
          );
        })
      ) : (
        <h1>No Data</h1>
      )}
    </div>
  );
};

export default Client;
// SWR, which stands for Stale-While-Revalidate, is a powerful library for data fetching, revalidating, and caching in React applications.
  // The “Stale-While-Revalidate” concept means that while SWR is revalidating the data,
  //it serves the stale data from the cache.
