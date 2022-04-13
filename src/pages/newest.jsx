import Head from "next/head";
import Link from "next/link";
import { Pagination } from "@mantine/core";
import { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

function Paginate() {
  const [activePage, setPage] = useState(1);
  return <Pagination page={activePage} onChange={setPage} total={10} />;
}

const News = () => (
  <>
    <Head>
      <title>新着商品</title>
    </Head>
    <Header />
    <div className="bg-green-100">
      <div className="text-2xl px-10 py-10 font-bold">各ジャンルの新着商品</div>
      <div className="px-10">
        <div className="py-5">
          <Link href="../category/news/fashion">
            <a>ファッション</a>
          </Link>
        </div>
        <div className="py-5">
          <Link href="../category/news/books">
            <a>書籍</a>
          </Link>
        </div>
        <div className="py-5">
          <Link href="../category/news/foods">
            <a>食品</a>
          </Link>
        </div>
        <div className="py-5">
          <Link href="">
            <a>音楽</a>
          </Link>
        </div>
        <div className="py-5">
          <Link href="">
            <a>玩具</a>
          </Link>
        </div>
      </div>
      <div className="flex justify-center py-10">
        <Paginate />
      </div>
    </div>
    <Footer />
  </>
);

export default News;
