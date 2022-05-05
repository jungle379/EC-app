import Head from "next/head";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { Calendar } from "@mantine/dates";
import { useState } from "react";

export const Home = () => {
  const [value, setValue] = useState(null);
  return (
    <>
      <Head>
        <title>トップページ</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className="h-screen bg-green-100">
        <div className="py-40 flex justify-end px-40">
          <Calendar value={value} onChange={setValue} />
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Home;
