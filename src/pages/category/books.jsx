import { Header } from "@mantine/core";
import Head from "next/head";
import Footer from "../../components/Footer";

const Books = () => (
  <>
    <Head>
      <title>書籍</title>
    </Head>
    <Header />
    <div className="h-screen bg-green-100">
      <div className="text-2xl">書籍</div>
      <div></div>
      <div></div>
      <div></div>
    </div>
    <Footer />
  </>
);

export default Books;
