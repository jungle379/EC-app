import Head from "next/head";
import Link from "next/link";
import Footer from "../components/Footer";
import Header from "../components/Header";

const Card = () => {
  return (
    <>
      <Head>
        <title>当サイトカードについて</title>
      </Head>
      <div className="bg-green-100 h-auto">
        <Header />
        <div className="flex justify-between">
          <div className="text-4xl py-10 px-40 font-bold">当サイトカード</div>
          <div className="py-10 text-2xl px-20">
            <Link href="/">
              <a>カードを申し込む</a>
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Card;
