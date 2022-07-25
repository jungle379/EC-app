import Head from "next/head";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { Tabs } from "@mantine/core";
import { useState } from "react";
import Lock from "../../components/Lock";

export const Views = () => {
  const [activeTab, setActiveTab] = useState();

  return (
    <>
      <Head>
        <title>閲覧履歴</title>
      </Head>
      <Header />
      <div className="bg-green-100 h-screen">
        <div className="flex justify-center text-4xl py-20 px-40 font-bold">
          閲覧履歴
        </div>
        <div className="px-40 py-10 my-20 mx-20 text-2xl border-white border-4 border-x-4 border-y-4">
          <Tabs active={activeTab} onTabChange={setActiveTab}>
            <Tabs.Tab label="前日">前日の閲覧履歴</Tabs.Tab>
            <Tabs.Tab label="先週">先週の閲覧履歴</Tabs.Tab>
            <Tabs.Tab label="先月">先月の閲覧履歴</Tabs.Tab>
          </Tabs>
        </div>
        <div>
          <Lock />
        </div>
      </div>
      <div></div>
      <Footer />
    </>
  );
};

export default Views;
