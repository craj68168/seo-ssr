import Link from "next/link";
import React, { useEffect, useState } from "react";

const Client = () => {
  const [users, setUsers] = useState<any>([]);
  console.log("user", users);

  useEffect(() => {
    const fetchUsers = async () => {
      const users = await (await fetch("https://dummyjson.com/users")).json();
      setUsers(users);
    };
    fetchUsers();
  }, []);
  return (
    <div
      style={{
        textAlign: "center",
      }}
    >
      <h1 style={{ textDecoration: "underline" }}>Client Site Rendering</h1>
      {users?.users?.length >= 1 ? (
        users?.users?.map((d: any, i: number) => {
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
