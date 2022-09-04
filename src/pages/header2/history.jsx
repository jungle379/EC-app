import Head from "next/head";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { Tabs } from "@mantine/core";
import { useState } from "react";
import Link from "next/link";

const History = () => {
  const [activeTab, setActiveTab] = useState();
  return (
    <>
      <Head>
        <title>購入履歴</title>
      </Head>
      <div className="bg-green-100 h-auto">
        <Header />
        <div className="flex justify-center text-4xl py-20 px-40 font-bold">
          購入履歴
        </div>
        <div className="px-40 py-10 mb-10 mx-20 text-2xl border-white border-4 border-x-4 border-y-4">
          <Tabs active={activeTab} onTabChange={setActiveTab}>
            <Tabs.Tab label="先月">
              先月の購入履歴
              <div className="py-5">
                <Link href="/">
                  <a>・商品1</a>
                </Link>
              </div>
              <div className="py-5">
                <Link href="/">
                  <a>・商品2</a>
                </Link>
              </div>
              <div className="py-5">
                <Link href="/">
                  <a>・商品3</a>
                </Link>
              </div>
            </Tabs.Tab>
            <Tabs.Tab label="半年">
              過去半年の購入履歴
              <div className="py-5">
                <Link href="/">
                  <a>・商品1</a>
                </Link>
              </div>
              <div className="py-5">
                <Link href="/">
                  <a>・商品2</a>
                </Link>
              </div>
              <div className="py-5">
                <Link href="/">
                  <a>・商品3</a>
                </Link>
              </div>
            </Tabs.Tab>
            <Tabs.Tab label="昨年">
              昨年の購入履歴
              <div className="py-5">
                <Link href="/">
                  <a>・商品1</a>
                </Link>
              </div>
              <div className="py-5">
                <Link href="/">
                  <a>・商品2</a>
                </Link>
              </div>
              <div className="py-5">
                <Link href="/">
                  <a>・商品3</a>
                </Link>
              </div>
            </Tabs.Tab>
          </Tabs>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default History;
