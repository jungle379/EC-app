import Head from "next/head";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Link from "next/link";
import { client } from "../libs/client";

export const getStaticProps = async () => {
  const data = await client.getList({
    endpoint: "cart",
    queries: { q: "" },
  });
  return {
    props: data,
  };
};

const Cart = (props) => (
  <>
    <Head>
      <title>カート内商品</title>
    </Head>
    <Header />
    <div className="h-screen bg-green-100">
      <div className="flex justify-between">
        <div className="text-4xl font-bold pt-20 px-40">カート</div>
        <div className="text-xl hover:text-red-500 my-10 mx-40 py-[5px] bg-yellow-200 w-[130px] flex justify-center border-2">
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
      <div className="flex justify-center text-0.5xl hover:text-red-600 border-2 bg-yellow-200 w-[40px] mx-[700px]">
        <Link href="../buy/registar">
          <a>購入</a>
        </Link>
      </div>
    </div>
    <Footer />
  </>
);

export default Cart;
