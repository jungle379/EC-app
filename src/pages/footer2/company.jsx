import Head from "next/head";
import Link from "next/link";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Lock from "../../components/Lock";

const Company = () => (
  <>
    <Head>
      <title>会社概要</title>
    </Head>
    <div className="bg-green-100">
      <Header />
      <div className="px-40">
        <div className="text-4xl py-10 font-bold">会社概要</div>
        <div>社名:</div>
        <div>住所:東京都中央区＊＊＊</div>
        <div>TEL:080-****-****</div>
        <div>E-mail:****@gmail.com</div>
        <div>社歴:</div>
        <div className="text-blue-500 py-10">
          <Link href="https://twitter.com/hirokimorino">Tweeter</Link>
        </div>
        <div className="text-blue-500 py-10">
          <Link href="https://www.facebook.com/hiroki.morino.9/">Facebook</Link>
        </div>
        <div className="px-10 py-10">
          <Lock />
        </div>
      </div>
    </div>
    <Footer />
  </>
);

export default Company;
