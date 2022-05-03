import Head from "next/head";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Lock from "../components/Lock";
import { Tabs } from "@mantine/core";
import { useState } from "react";

const History = () => {
  const [activeTab, setActiveTab] = useState();
  return (
    <>
      <Head>
        <title>購入履歴</title>
      </Head>
      <div className="bg-green-100 h-screen">
        <Header />
        <div className="text-4xl py-10 px-20 font-bold">購入履歴</div>
        <div className="px-40 py-10 h-[300px] text-2xl">
          <Tabs active={activeTab} onTabChange={setActiveTab}>
            <Tabs.Tab label="先月">先月の購入履歴</Tabs.Tab>
            <Tabs.Tab label="半年">過去半年の購入履歴</Tabs.Tab>
            <Tabs.Tab label="昨年">昨年の購入履歴</Tabs.Tab>
          </Tabs>
        </div>
        <div className="px-10 py-10">
          <Lock />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default History;
