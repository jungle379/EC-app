import Head from "next/head";
import Footer from "../../components/Footer";
import Header from "../../components/Header";

const Site = () => (
  <>
    <Head>
      <title>サイトガイド</title>
    </Head>
    <div className="bg-green-100 h-auto">
      <Header />
      <div className="text-2xl py-20 px-40 font-bold">サイトガイド</div>
    </div>
    <Footer />
  </>
);

export default Site;
