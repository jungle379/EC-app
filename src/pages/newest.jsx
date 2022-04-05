import Head from "next/head";
import Link from "next/link";
import { Pagination } from "@mantine/core";
import { useState } from "react";

function Paginate() {
  const [activePage, setPage] = useState(1);
  return <Pagination page={activePage} onChange={setPage} total={10} />;
}

const News = () => (
  <>
    <Head>
      <title>新着商品</title>
    </Head>
    <div>各ジャンルの新着商品</div>
    <div>
      <Link href="../category/news/fashion">
        <a>ファッション</a>
      </Link>
    </div>
    <div>
      <Link href="../category/news/books">
        <a>書籍</a>
      </Link>
    </div>
    <div>
      <Link href="../category/news/foods">
        <a>食品</a>
      </Link>
    </div>
    <div>
      <Link href="">
        <a>音楽</a>
      </Link>
    </div>
    <div>
      <Link href="">
        <a>玩具</a>
      </Link>
    </div>
    <div></div>
    <Paginate />
  </>
);

export default News;
