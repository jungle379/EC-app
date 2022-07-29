import Head from "next/head";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { useState } from "react";
import TestCarousel from "../components/Swiper";
import Lock from "../components/Lock";
import Link from "next/link";
import TestCarousel2 from "../components/Swiper2";

const Home = () => {
  return (
    <>
      <Head>
        <title>トップページ</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className="h-auto bg-green-100">
        <div>
          <TestCarousel />
        </div>
        <div className="flex justify-evenly my-20">
          <div className="mx-10 bg-white h-[300px] w-1/4">
            <Link href="/header2/history">
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
            <div className="bg-white h-[150px] my-10">
              <Link href="/">
                <a>カードA2</a>
              </Link>
            </div>
          </div>
        </div>
        <div className="text-2xl font-bold">
          こちらもおすすめ
          <TestCarousel2 />
        </div>
        <div className="flex justify-evenly my-20">
          <div className="mx-10 bg-white h-[300px] w-1/4">
            <Link href="/">
              <a>マイページへ</a>
            </Link>
          </div>
          <div className="mx-10 bg-white h-[300px] w-1/4">
            <Link href="/">
              <a>あなたの購入志向から</a>
            </Link>
          </div>
          <div className="mx-10 bg-white h-[300px] w-1/4">
            <Link href="/">
              <a>AmazonessPrimeについて</a>
            </Link>
          </div>
          <div className="mx-10 bg-white h-[300px] w-1/4">
            <Link href="/">
              <a>カードA3</a>
            </Link>
          </div>
        </div>
        <div className="w-1/2 my-10 bg-white mx-[350px] flex justify-center h-[400px]">
          イメージ１
        </div>
        <div className="w-1/2 bg-white mx-[350px] flex justify-center h-[400px]">
          イメージ2
        </div>
        <div className="w-1/2 my-10 bg-white mx-[350px] flex justify-center h-[400px]">
          イメージ3
        </div>
        <div className="py-20 px-20 flex justify-center">
          <div className="py-40 px-20">
            <Lock />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Home;
