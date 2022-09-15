import Head from "next/head";
import Link from "next/link";
import Footer from "../components/Footer";
import Header from "../components/Header";

const Gift = () => {
  return (
    <>
      <Head>
        <title>残高の確認・ギフト券の発行</title>
      </Head>
      <div className="bg-green-100 h-auto">
        <Header />
        <div className="flex justify-between">
          <div className="text-4xl py-10 px-40 font-bold">
            残高の確認・ギフト券の発行
          </div>
          <div className="flex justify-evenly">
            <div className="py-10 text-2xl px-20">
              <Link href="/">
                <a>残高の確認</a>
              </Link>
            </div>
            <div className="py-10 text-2xl px-20">
              <Link href="/">
                <a>ギフト券の発行</a>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Gift;
