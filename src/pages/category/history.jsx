import Head from "next/head";
import Footer from "../../components/Footer";
import Header from "../../components/Header";

const History = () => (
  <>
    <Head>
      <title>購入履歴</title>
    </Head>
    <Header />
    <div className="h-screen bg-green-100">
      <div className="text-2xl">購入履歴</div>
      <div></div>
      <div></div>
      <div></div>
    </div>
    <Footer />
  </>
);

export default History;
