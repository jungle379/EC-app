import Head from "next/head";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Lock from "../../components/Lock";

const Apply = () => (
  <>
    <Head>
      <title>アプリでの支払い</title>
    </Head>
    <div className="bg-green-100">
      <Header />
      <div className="text-2xl py-20 px-40 font-bold">アプリ決済について</div>
      <div className="px-10 py-10">
        <Lock />
      </div>
    </div>
    <Footer />
  </>
);

export default Apply;
