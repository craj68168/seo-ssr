import Head from "next/head";
import React from "react";

const PersonDetails = ({ data }: any) => {
  return (
    <>
      <Head>
        <title>Dynamic Static Site Generation</title>
      </Head>
      <h1 style={{textDecoration:"underline",textAlign:"center"}}>Dynamic Static Site Generation</h1>
      <div style={{ textAlign: "center" }}>
        <h2>
          Hello {data.firstName} {data.lastName} from {data.address.address}
        </h2>
      </div>
    </>
  );
};

export const getStaticPaths = async () => {
  const data = await (await fetch(`https://dummyjson.com/users`)).json();
  return {
    paths: data.users.map((d: any) => ({ params: { id: `${d.id}` } })),
    fallback: false,
  };
};

export const getStaticProps = async (context: any) => {
  const id = context.params.id;
  const data = await (await fetch(`https://dummyjson.com/users/${id}`)).json();
  return {
    props: { data },
  };
};

export default PersonDetails;
