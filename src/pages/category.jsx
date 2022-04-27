import Head from "next/head";
import Link from "next/link";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Lock from "../components/Lock";

const Category = () => (
  <>
    <Head>
      <title>カテゴリー</title>
    </Head>
    <div className="bg-green-100">
      <Header />
      <div className="text-xl my-10 mx-10 font-bold">カテゴリー一覧</div>
      <div className="mx-20">
        <div className="py-5">
          <Link href="../category/fashion">
            <a>ファッション</a>
          </Link>
        </div>
        <div className="py-5">
          <Link href="">
            <a>書籍</a>
          </Link>
        </div>
        <div className="py-5">
          <Link href="../category/foods">
            <a>食品</a>
          </Link>
        </div>
        <div className="py-5">
          <Link href="/">
            <a>DVD/BD</a>
          </Link>
        </div>
        <div className="py-5">
          <Link href="/">
            <a>玩具</a>
          </Link>
        </div>
        <div className="py-5">
          <Link href="/">
            <a>音楽</a>
          </Link>
        </div>
        <div className="px-10 py-10">
          <Lock />
        </div>
      </div>
    </div>
    <Footer />
  </>
);

export default Category;
