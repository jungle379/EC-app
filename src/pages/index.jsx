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
      <div className="flex justify-between h-[100px] py-5">
        <div className="px-10">
          <Hamburger />
        </div>
        <div className="px-10">
          <Link href="/">
            <a>Amazoness_point</a>
          </Link>
        </div>
        <div className="px-10">
          <Link href="/views">
            <a>閲覧履歴</a>
          </Link>
        </div>
        <div className="px-10">
          <Link href="/history">
            <a>購入履歴</a>
          </Link>
        </div>
        <div className="px-10">
          <Link href="/history">
            <a>***</a>
          </Link>
        </div>
        <div className="px-10">
          <Link href="/history">
            <a>***</a>
          </Link>
        </div>
        <div className="px-10">
          <Link href="/history">
            <a>***</a>
          </Link>
        </div>
      </div>
    </main>
    <Footer />
  </>
);

export default Home;
