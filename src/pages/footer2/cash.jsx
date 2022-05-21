import Head from "next/head";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Lock from "../../components/Lock";

const Cash = () => (
  <>
    <Head>
      <title>現金支払い</title>
    </Head>
    <div className="bg-green-100">
      <Header />
      <div className="text-2xl py-20 px-40 font-bold">
        現金での支払いについて
      </div>
      <div className="px-10 py-10">
        <Lock />
      </div>
    </div>
    <Footer />
  </>
);

export default Cash;
