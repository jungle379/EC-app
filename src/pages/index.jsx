import Head from "next/head";
import Footer from "../components/Footer";
import Header from "../components/Header";

export default function Home() {
  return (
    <div>
      <Head>
        <title>top page</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main></main>
      <Footer />
    </div>
  );
}
