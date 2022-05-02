import Head from "next/head";
import Link from "next/link";
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
    <main className="h-screen bg-green-100"></main>
    <Footer />
  </>
);

export default Home;
