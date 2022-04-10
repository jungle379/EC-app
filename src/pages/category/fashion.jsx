// import { Header } from "@mantine/core";
import Head from "next/head";
import Footer from "../../components/Footer";
import Header from "../../components/Header";

const Fashion = () => (
  <>
    <Head>
      <title>ファッション</title>
    </Head>
    <Header />
    <div className="h-screen bg-green-100">
      <div className="text-2xl">ファッション</div>
      <div></div>
      <div></div>
      <div></div>
    </div>
    <Footer />
  </>
);

export default Fashion;
