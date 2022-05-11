import Head from "next/head";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Lock from "../components/Lock";

const Points = () => (
  <>
    <Head>
      <title>Amazonessポイント</title>
    </Head>
    <div className="bg-green-100 h-screen">
      <Header />
      <div className="text-4xl py-20 px-20 font-bold">ポイントを使用する</div>
      <div className="px-10 py-10">
        <Lock />
      </div>
    </div>
    <Footer />
  </>
);

export default Points;
