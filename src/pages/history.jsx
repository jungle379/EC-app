import Head from "next/head";
import Link from "next/link";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Lock from "../components/Lock";

const History = () => (
  <>
    <Head>
      <title>購入履歴</title>
    </Head>
    <div className="bg-green-100">
      <Header />
      <div className="text-4xl py-20 px-20 font-bold">購入履歴</div>
      <div className="px-10 py-10">
        <Lock />
      </div>
    </div>
    <Footer />
  </>
);

export default History;
