import Head from "next/head";
import Footer from "../components/Footer";
import Header from "../components/Header";

const Home = () => (
  <>
    <Head>
      <title>トップページ</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Header />
    <main>
      <div className="border-x-2">
        <input type="text" />
      </div>
      <div>
        <button>ボタン</button>
      </div>
    </main>
    <Footer />
  </>
);

export default Home;
