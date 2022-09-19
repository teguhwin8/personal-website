import type { NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>{"Teguh's Portfolio"}</title>
        <meta name="description" content="Teguh Widodo Personal Website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="text-4xl font-extrabold">Hello Teguh</div>
    </div>
  );
};

export default Home;
