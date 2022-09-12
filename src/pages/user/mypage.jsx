import Head from "next/head";
import Link from "next/link";
import Footer from "../../components/Footer";
import Header from "../../components/Header";

const Mypage = () => (
  <>
    <Head>
      <title>マイページ</title>
    </Head>
    <div className="bg-green-100 h-auto">
      <Header />
      <div className="flex justify-between">
        <div className="text-2xl py-20 px-40 font-bold">マイページ</div>
        <div className="py-20 px-20">
          <Link href="/">購入履歴へ</Link>
        </div>
        <div></div>
      </div>
    </div>
    <Footer />
  </>
);

export default Mypage;
