import Head from "next/head";
import Footer from "../../components/Footer";
import Header from "../../components/Header";

const Outside = () => (
  <>
    <Head>
      <title>外部サイトについて</title>
    </Head>
    <div className="bg-green-100 h-auto">
      <Header />
      <div className="text-2xl py-20 px-40 font-bold">外部サイトについて</div>
    </div>
    <Footer />
  </>
);

export default Outside;
