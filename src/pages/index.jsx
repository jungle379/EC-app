import Head from "next/head";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Lock from "../components/lock";

const Home = () => (
  <>
    <Head>
      <title>トップページ</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Header />
    <main className="h-screen bg-green-100">
      <div></div>
      <div></div>
      <div className="">
        <Lock />
      </div>
    </main>
    <Footer />
  </>
);

export default Home;
