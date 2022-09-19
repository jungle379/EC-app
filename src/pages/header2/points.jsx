import Head from "next/head";
import Footer from "../../components/Footer";
import Header from "../../components/Header";

const Points = () => {
  return (
    <>
      <Head>
        <title>当サイトポイント</title>
      </Head>
      <div className="bg-green-100 h-auto">
        <Header />
        <div className="text-4xl py-20 px-40 font-bold">当サイトポイント</div>
        <div></div>
        <div></div>
      </div>
      <Footer />
    </>
  );
};

export default Points;
