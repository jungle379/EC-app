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
        <div className="px-40 py-20 text-4xl font-bold">閲覧履歴</div>
        <div className="px-40 py-10 h-[300px] text-2xl">
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
