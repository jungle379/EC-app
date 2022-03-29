import Head from "next/head";
import Link from "next/link";

const Category = () => (
  <>
    <Head>
      <title>各カテゴリー</title>
    </Head>
    <div></div>
    <div>
      <Link href="../category/fashion">
        <a>ファッション</a>
      </Link>
    </div>
    <div>
      <Link href="">
        <a>書籍</a>
      </Link>
    </div>
    <div>
      <Link href="../category/foods">
        <a>食品</a>
      </Link>
    </div>
    <div></div>
  </>
);

export default Category;
