import Head from "next/head";
import Footer from "../components/Footer";
import Header from "../components/Header";

const Card = () => {
  return (
    <>
      <Head>
        <title>Amazonessカードについて</title>
      </Head>
      <div className="bg-green-100 h-auto">
        <Header />
        <div className="text-4xl py-10 px-40 font-bold">Amazonessカード</div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <Footer />
    </>
  );
};

export default Card;
