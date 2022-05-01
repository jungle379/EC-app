import Head from "next/head";
import Link from "next/link";
import { Pagination } from "@mantine/core";
import { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { client } from "../libs/client";
import Hamburger from "../components/Burger";

function Paginate() {
  const [activePage, setPage] = useState(1);
  return <Pagination page={activePage} onChange={setPage} total={10} />;
}

export const getStaticProps = async () => {
  const data = await client.getList({
    endpoint: "news",
    queries: { q: "" },
  });
  return {
    props: data,
  };
};

const News = (props) => (
  <>
    <Head>
      <title>新着</title>
    </Head>
    <Header />
    <div className="bg-green-100 h-screen flex">
      <div className="px-10 bg-green-100">
        <Hamburger />
      </div>
      <div>
        <div className="text-4xl px-10 py-10 font-bold">新着商品</div>
        <div className="px-20 text-2xl">
          <p>{`新着アイテム: ${props.totalCount}件`}</p>
          <ul>
            {props.contents.map((content) => {
              return (
                <li key={content.id}>
                  <Link href={`news/${content.id}`}>
                    <a>{content.title}</a>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
    <div className="flex justify-center py-5 bg-gray-200">
      <Paginate />
    </div>
    <Footer />
  </>
);

export default News;
