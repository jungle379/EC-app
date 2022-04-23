import Head from "next/head";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Mailer from "../components/Mailform";

const Inquery = () => (
  <>
    <Head>
      <title>お問い合わせフォーム</title>
    </Head>
    <Header />
    <div className="h-screen bg-green-100">
      <div className="text-2xl">お問い合わせ</div>
      <div></div>
      <div></div>
      <div></div>
      <Mailer />
    </div>
    <Footer />
  </>
);

export default Inquery;
