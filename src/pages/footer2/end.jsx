import Head from "next/head";
import Link from "next/link";
import Footer from "../../components/Footer";
import Header from "../../components/Header";

const End = () => {
  return (
    <>
      <Head>
        <title>支払い方法の確認</title>
      </Head>
      <Header />
      <div className="bg-green-100 min-h-screen">
        <div className="text-4xl py-20 px-[350px] font-bold">
          運営への問い合わせが完了しました！！
        </div>
        <div className="my-10 mx-20 flex justify-center hover:text-red-600 hover:underline">
          <Link href="/">Topへ戻る</Link>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default End;
