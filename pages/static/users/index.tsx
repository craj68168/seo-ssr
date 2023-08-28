import Head from "next/head";
import React from "react";

export const getStaticProps = async () => {
  const data = await (await fetch("https://dummyjson.com/users")).json();
  return {
    props: { data },
  };
};
const SSG = ({ data }: any) => {
  return (
    <>
      <Head>
        <title>Static Site Genration</title>
      </Head>
      <div
        style={{
          textAlign: "center",
        }}
      >
        <h1
          style={{
            textDecoration: "underline",
          }}
        >
          Static Site Generation
        </h1>
       <div style={{
          textAlign: "center",
          border:"1px solid black",
          width:"50%",
          marginLeft:"20rem",
          borderRadius:"10px"
        }}>
       {data.users.length >= 1 ? (
          data.users.map((data: any, i: number) => {
            return (
              <div
                className="data"
                key={i}
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <h3>
                  {data?.firstName} {data?.lastName}
                </h3>
                <h3>{data?.address.address}</h3>
              </div>
            );
          })
        ) : (
          <h1>No Data Available</h1>
        )}
       </div>
      </div>
    </>
  );
};

export default SSG;
