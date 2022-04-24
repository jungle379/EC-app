import Head from "next/head";
import Hamburger from "../components/Burger";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Lock from "../components/Lock";

export const Home = () => (
  <>
    <Head>
      <title>トップページ</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Header />
    <main className="flex h-screen bg-green-100">
      <div className="px-10 bg-green-100">
        <Hamburger />
      </div>
      <div className="px-10 py-10">
        <Lock />
      </div>
    </main>
    <Footer />
  </>
);

export default Home;
