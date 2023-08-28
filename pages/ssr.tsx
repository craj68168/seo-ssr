import Head from "next/head";
import React from "react";

export const getServerSideProps = async () => {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/todos");
    const data = await res.json();
    return {
      props: { todos: data },
    };
  } catch (error) {
    return {
      props: { todos: [] }, // Return an empty array or handle the error case as needed
    };
  }
};

const SSR = ({ todos }: any) => {
  return (
    <>
      <Head>
        <title>Server Side Rendering</title>
      </Head>
      <div>
        {todos.length >= 1
          ? todos.map((d: any, i: number) => {
              return (
                <h4
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                  key={i}
                >
                  {d?.title}
                </h4>
              );
            })
          : []}
      </div>
    </>
  );
};

export default SSR;
