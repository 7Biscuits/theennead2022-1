import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Nav from "../components/navbar";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
const Home: NextPage = () => {
  return (
    <div className="bg-mainbg min-w-full min-h-screen">
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Nav />
      <Hero />
      <Footer />
    </div>
  );
};

export default Home;
