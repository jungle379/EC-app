import Head from "next/head";
import Footer from "../../components/Footer";
import Header from "../../components/Header";

const Help = () => (
  <>
    <Head>
      <title>ヘルプ</title>
    </Head>
    <div className="bg-green-100 h-auto">
      <Header />
      <div className="text-2xl py-20 px-40 font-bold">ヘルプ</div>
    </div>
    <Footer />
  </>
);

export default Help;
