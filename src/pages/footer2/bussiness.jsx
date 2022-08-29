import Head from "next/head";
import Footer from "../../components/Footer";
import Header from "../../components/Header";

const Bussiness = () => (
  <>
    <Head>
      <title>商用利用について</title>
    </Head>
    <div className="bg-green-100 h-auto">
      <Header />
      <div className="text-2xl py-20 px-40 font-bold">商用利用について</div>
    </div>
    <Footer />
  </>
);

export default Bussiness;
