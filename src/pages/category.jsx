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
    <div className="bg-green-100 h-auto">
      <Header />
      <div className="text-4xl my-10 mx-40 font-bold">カテゴリー一覧</div>
      <div className="px-40 text-2xl w-[600px]">
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
      <div className="px-10 py-10">
        <Lock />
      </div>
    </div>
    <Footer />
  </>
);

export default Category;
