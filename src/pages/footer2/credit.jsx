import Head from "next/head";
import Footer from "../../components/Footer";
import Header from "../../components/Header";

const Credit = () => (
  <>
    <Head>
      <title>クレジットカード決済</title>
    </Head>
    <div className="bg-green-100">
      <Header />
      <div className="text-2xl py-20 px-40 font-bold">
        クレジットカードでの支払いについて
      </div>
    </div>
    <Footer />
  </>
);

export default Credit;
