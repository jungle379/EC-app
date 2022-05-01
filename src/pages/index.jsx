import Head from "next/head";
import Link from "next/link";
import Hamburger from "../components/Burger";
import Footer from "../components/Footer";
import Header from "../components/Header";

export const Home = () => (
  <>
    <Head>
      <title>トップページ</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Header />
    <main className="h-screen bg-green-100">
      <div className="flex justify-between h-[100px]">
        <div className="px-10 py-5">
          <Hamburger />
        </div>
        <div className="px-10 py-5 hover:text-red-500">
          <Link href="/points">
            <a>Amazoness_point</a>
          </Link>
        </div>
        <div className="px-10 py-5 hover:text-red-500">
          <Link href="/views">
            <a>閲覧履歴</a>
          </Link>
        </div>
        <div className="px-10 py-5 hover:text-red-500">
          <Link href="/history">
            <a>購入履歴</a>
          </Link>
        </div>
        <div className="px-10 py-5 hover:text-red-500">
          <Link href="/">
            <a>***</a>
          </Link>
        </div>
        <div className="px-10 py-5 hover:text-red-500">
          <Link href="/">
            <a>***</a>
          </Link>
        </div>
        <div className="px-10 py-5 hover:text-red-500">
          <Link href="/">
            <a>***</a>
          </Link>
        </div>
      </div>
    </main>
    <Footer />
  </>
);

export default Home;
