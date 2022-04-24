import Head from "next/head";
import Link from "next/link";
import Footer from "../components/Footer";
import Header from "../components/Header";

const Popular = () => (
  <>
    <Head>
      <title>人気ランキング</title>
    </Head>
    <div className="bg-green-100 h-auto">
      <Header />
      <div className="text-xl py-10 px-20 font-bold">人気ランキング</div>
    </div>
    <Footer />
  </>
);

export default Popular;
