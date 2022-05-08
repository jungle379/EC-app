import Head from "next/head";
import Link from "next/link";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Lock from "../../components/Lock";

const Company = () => (
  <>
    <Head>
      <title>会社概要</title>
    </Head>
    <div className="bg-green-100">
      <Header />
      <div className="text-4xl my-10 mx-10 font-bold">会社概要</div>
      <div className="px-10 py-10">
        <Lock />
      </div>
    </div>
    <Footer />
  </>
);

export default Company;
