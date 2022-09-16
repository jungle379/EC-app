import Head from "next/head";
import Link from "next/link";
import Footer from "../../components/Footer";
import Header from "../../components/Header";

const End = () => {
  return (
    <>
      <Head>
        <title>入力完了</title>
      </Head>
      <div className="bg-green-100 min-h-screen">
        <Header />
        <div className="text-4xl py-10 px-40 font-bold">
          情報の入力が完了しました！！
        </div>
        <div className="flex justify-evenly mx-40 my-10">
          <Link href="/">Topへ戻る</Link>
          <Link href="..buy/registar2">修正する</Link>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default End;
