import Head from "next/head";
import Link from "next/link";
import Footer from "../components/Footer";
import Header from "../components/Header";

const Category = () => (
  <>
    <Head>
      <title>カテゴリー</title>
    </Head>
    <Header />
    <div className="bg-green-100 min-h-screen">
      <div className="text-4xl pt-20 px-40 font-bold">カテゴリー一覧</div>
      <div className="px-40 py-20 text-2xl w-[600px]">
        <div className="py-5 hover:text-red-600 hover:underline">
          <Link href="../category/fashion">
            <a>ファッション</a>
          </Link>
        </div>
        <div className="py-5 hover:text-red-600 hover:underline">
          <Link href="../category/music">
            <a>音楽</a>
          </Link>
        </div>
        <div className="py-5 hover:text-red-600 hover:underline">
          <Link href="../category/health">
            <a>ヘルス・ビューティー</a>
          </Link>
        </div>
        <div className="py-5 hover:text-red-600 hover:underline">
          <Link href="../category/books">
            <a>書籍</a>
          </Link>
        </div>
        <div className="py-5 hover:text-red-600 hover:underline">
          <Link href="../category/foods">
            <a>食品</a>
          </Link>
        </div>
        <div className="py-5 hover:text-red-600 hover:underline">
          <Link href="../category/DVD">
            <a>DVD/BD</a>
          </Link>
        </div>
        <div className="py-5 hover:text-red-600 hover:underline">
          <Link href="../category/products">
            <a>雑貨</a>
          </Link>
        </div>
        <div className="py-5 hover:text-red-600 hover:underline">
          <Link href="../category/hobby">
            <a>玩具</a>
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  </>
);

export default Category;
