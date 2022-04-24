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
      <title>カート内</title>
    </Head>
    <Header />
    <div className="h-auto bg-green-100">
      <div className="text-4xl font-bold pt-20 px-20">カート</div>
      <div>
        <Link href="">
          <a></a>
        </Link>
      </div>
      <div className="px-40 py-10 text-2xl">
        <p>{`カート内に保存した商品: ${props.totalCount}品`}</p>
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
    </div>
    <Footer />
  </>
);

export default Cart;
