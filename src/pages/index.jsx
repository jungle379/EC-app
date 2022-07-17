import Head from "next/head";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { Calendar } from "@mantine/dates";
import { useState } from "react";
import TestCarousel from "../components/Swiper";
import Lock from "../components/Lock";
import Link from "next/link";

const Home = () => {
  const [value, setValue] = useState(null);
  return (
    <>
      <Head>
        <title>トップページ</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className="h-full bg-green-100">
        <div>
          <TestCarousel />
        </div>
        <div className="flex justify-evenly my-20">
          <div className="mx-10 bg-white h-[300px] w-1/4">
            <Link href="/">
              <a>再び購入</a>
            </Link>
          </div>
          <div className="mx-10 bg-white h-[300px] w-1/4">
            <Link href="/">
              <a>注目のタイムセール</a>
            </Link>
          </div>
          <div className="mx-10 bg-white h-[300px] w-1/4">
            <Link href="/">
              <a>Amazonessカードの入会</a>
            </Link>
          </div>
          <div className="mx-10 w-1/4">
            <div className="bg-white h-[110px]">
              <Link href="/">
                <a>カードA1</a>
              </Link>
            </div>
            <div className="bg-blue-200 h-[150px] my-10">
              <Link href="/">
                <a>カードA2</a>
              </Link>
            </div>
          </div>
        </div>
        <div className="flex justify-evenly my-20">
          <div className="mx-10 bg-white h-[300px] w-1/4">
            <Link href="/">
              <a>再び購入</a>
            </Link>
          </div>
          <div className="mx-10 bg-white h-[300px] w-1/4">
            <Link href="/">
              <a>注目のタイムセール</a>
            </Link>
          </div>
          <div className="mx-10 bg-white h-[300px] w-1/4">
            <Link href="/">
              <a>Amazonessカードの入会</a>
            </Link>
          </div>
          <div className="mx-10 bg-white h-[300px] w-1/4">
            <Link href="/">
              <a>カードA1</a>
            </Link>
          </div>
        </div>
        <div className="py-20 px-20 flex justify-between">
          <div className="py-40 px-20">
            <Lock />
          </div>
          <div>
            <Calendar value={value} onChange={setValue} />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Home;
