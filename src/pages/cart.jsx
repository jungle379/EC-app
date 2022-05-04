import Head from "next/head";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Link from "next/link";
import { client } from "../libs/client";
import { useState } from "react";
import { Calendar } from "@mantine/dates";

export const getStaticProps = async () => {
  const data = await client.getList({
    endpoint: "cart",
    queries: { q: "" },
  });
  return {
    props: data,
  };
};

const Cart = (props) => {
  const [value, setValue] = useState(null);
  return (
    <>
      <Head>
        <title>カート内</title>
      </Head>
      <Header />
      <div className="h-auto bg-green-100">
        <div className="flex justify-between">
          <div className="text-4xl font-bold pt-20 px-20">カート</div>
          <div className="text-xl hover:text-red-500 py-10 px-40">
            <Link href="/history">
              <a>購入履歴へ</a>
            </Link>
          </div>
        </div>
        <div className="px-40 py-10 text-2xl">
          <p>{`カート内に保存した商品: ${props.totalCount}個`}</p>
          <ul>
            {props.contents.map((content) => {
              return (
                <li key={content.id}>
                  <Link href={`cart/${content.id}`}>
                    <a>{content.title}</a>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="py-40 flex justify-end px-40">
          <Calendar value={value} onChange={setValue} />;
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Cart;
