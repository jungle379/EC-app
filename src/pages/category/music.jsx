import Head from "next/head";
import Footer from "../../components/Footer";
import Header from "../../components/Header";

const Music = () => (
  <>
    <Head>
      <title>音楽</title>
    </Head>
    <Header />
    <div className="h-screen bg-green-100">
      <div className="text-2xl">音楽</div>
      <div></div>
      <div></div>
      <div></div>
    </div>
    <Footer />
  </>
);

export default Music;
