import React from "react";
import Link from "next/link";
import Head from "next/head";
import Layout from "../../Components/Layout";

const FirstPost = () => {
  return (
    <Layout>
      <div>
        <Head>
          <title>FirstPost</title>
        </Head>
        <h1>First Post</h1>
        <h2>
          <Link href="/">Home</Link>
        </h2>
      </div>
    </Layout>
  );
};

export default FirstPost;
