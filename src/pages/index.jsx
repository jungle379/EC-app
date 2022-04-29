import Head from "next/head";
import Hamburger from "../components/Burger";
import Footer from "../components/Footer";
import Header from "../components/Header";

export const Home = () => (
  <>
    <Head>
      <title>トップページ</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Header />
    <main className="flex h-auto bg-green-100">
      <div className="px-10 bg-green-100">
        <Hamburger />
      </div>
      <div></div>
      <div></div>
      <div></div>
    </main>
    <Footer />
  </>
);

export default Home;
