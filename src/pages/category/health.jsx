import Head from "next/head";
import Footer from "../../components/Footer";
import Header from "../../components/Header";

const Health = () => (
  <>
    <Head>
      <title>ヘルス・ビューティー</title>
    </Head>
    <Header />
    <div className="h-screen bg-green-100">
      <div className="text-2xl">ヘルス・ビューティー</div>
      <div></div>
      <div></div>
      <div></div>
    </div>
    <Footer />
  </>
);

export default Health;
