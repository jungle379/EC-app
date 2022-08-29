import Head from "next/head";
import Footer from "../../components/Footer";
import Header from "../../components/Header";

const Conform = () => (
  <>
    <Head>
      <title>各種問い合わせ</title>
    </Head>
    <div className="bg-green-100 h-auto">
      <Header />
      <div className="text-2xl py-20 px-40 font-bold">各種問い合わせ</div>
    </div>
    <Footer />
  </>
);

export default Conform;
