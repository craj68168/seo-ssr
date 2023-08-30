import Head from "next/head";
import React from "react";

const PersonDetails = ({ data }: any) => {
  return (
    <>
      <Head>
        <title>Incremental Static Generation</title>
      </Head>
      <h1 style={{ textDecoration: "underline", textAlign: "center" }}>
        Incremental Static Generation
      </h1>
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
  const paths = data.users.map((d: any) => ({ params: { id: `${d.id}` } }));
  return { paths, fallback: "blocking" };
};

export const getStaticProps = async (context: any) => {
  const id = context.params.id;
  const data = await (await fetch(`https://dummyjson.com/users/${id}`)).json();
  return {
    props: { data },
    revalidate: 60,
  };
};

export default PersonDetails;
