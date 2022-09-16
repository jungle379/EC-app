import Head from "next/head";
import Link from "next/link";
import Footer from "../../components/Footer";
import Header from "../../components/Header";

const Payment = () => {
  return (
    <>
      <Head>
        <title>支払い方法の確認</title>
      </Head>
      <Header />
      <div className="bg-green-100 min-h-screen">
        <div className="text-4xl py-10 px-40 font-bold">
          お客様の支払い方法について
        </div>
        <div className="flex justify-evenly">
          <div className="py-10 text-xl px-20">
            <Link href="/">
              <a>残高の確認</a>
            </Link>
          </div>
          <div className="py-10 text-xl px-20">
            <Link href="/">
              <a>ギフト券の発行</a>
            </Link>
          </div>
        </div>
        <div className="my-10 mx-20 flex justify-end">
          <Link href="/">Topへ戻る</Link>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Payment;
