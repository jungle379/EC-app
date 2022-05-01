import Head from "next/head";
import Link from "next/link";
import Hamburger from "../components/Burger";
import Footer from "../components/Footer";
import Header from "../components/Header";

export const Views = () => (
  <>
    <Head>
      <title>閲覧履歴</title>
    </Head>
    <Header />
    <div className="bg-green-100 flex h-screen">
      <Hamburger />
      <div className="px-20 py-20 text-4xl font-bold">閲覧履歴</div>
    </div>
    <div></div>
    <div></div>
    <Footer />
  </>
);

export default Views;
