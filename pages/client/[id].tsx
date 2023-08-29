import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

const PersonalUser = () => {
  const [user, setUser] = useState<any>({});
  const router = useRouter();

  useEffect(() => {
    const id = router.query.id;

    const fetchUsers = async (id: any) => {
      const users = await (
        await fetch(`https://dummyjson.com/users/${id}`)
      ).json();
      setUser(users);
    };
    fetchUsers(id);
  }, []);

  return (
    <div
      style={{
        textAlign: "center",
      }}
    >
      <h1 style={{ textDecoration: "underline" }}>Client Site Rendering</h1>
      <h2>My First Name is {user?.firstName}</h2>
    </div>
  );
};

export default PersonalUser;
