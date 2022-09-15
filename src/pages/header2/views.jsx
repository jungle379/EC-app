import Head from "next/head";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { Tabs } from "@mantine/core";
import { useState } from "react";
import { client } from "../../libs/client";
import Link from "next/link";

export const getStaticProps = async () => {
  const data = await client.getList({
    endpoint: "views",
    queries: { q: "" },
  });
  return {
    props: data,
  };
};

const Views = (props) => {
  const [activeTab, setActiveTab] = useState();

  return (
    <>
      <Head>
        <title>閲覧履歴</title>
      </Head>
      <Header />
      <div className="bg-green-100 min-h-screen">
        <div className="flex justify-center text-4xl py-20 px-40 font-bold">
          閲覧履歴
        </div>
        <div className="px-40 py-10 my-20 mx-20 text-2xl border-white border-4 border-x-4 border-y-4">
          <Tabs active={activeTab} onTabChange={setActiveTab}>
            <Tabs.Tab label="先週">
              <div className="h-[400px]">
                <p>{`先週の閲覧履歴: ${props.totalCount}件`}</p>
                <ul>
                  {props.contents.map((content) => {
                    return (
                      <li className="mt-10" key={content.id}>
                        <Link href={`views/${content.id}`}>
                          <a>{content.title}</a>
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </Tabs.Tab>
            <Tabs.Tab label="先月">
              <div className="h-[400px]">
                <p>{`先月の閲覧履歴: ${props.totalCount}件`}</p>
                <ul>
                  {props.contents.map((content) => {
                    return (
                      <li className="mt-10" key={content.id}>
                        <Link href={`views/${content.id}`}>
                          <a>{content.title}</a>
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </Tabs.Tab>
            <Tabs.Tab label="半年">
              <div className="h-[400px]">
                <p>{`半年間の閲覧履歴: ${props.totalCount}件`}</p>
                <ul>
                  {props.contents.map((content) => {
                    return (
                      <li className="mt-10" key={content.id}>
                        <Link href={`views/${content.id}`}>
                          <a>{content.title}</a>
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </Tabs.Tab>
          </Tabs>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Views;
