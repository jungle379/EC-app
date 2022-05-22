import Head from "next/head";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { Calendar } from "@mantine/dates";
import { useState } from "react";
import TestCarousel from "../components/Swiper";

const Home = () => {
  const [value, setValue] = useState(null);
  return (
    <>
      <Head>
        <title>トップページ</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className="h-auto bg-green-100">
        <div className="px-20 py-20">
          <TestCarousel />
        </div>
        <div className="py-40 px-20 flex justify-end">
          <Calendar value={value} onChange={setValue} />
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Home;
