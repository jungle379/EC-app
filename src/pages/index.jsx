import Head from "next/head";
import toast, { Toaster } from "react-hot-toast";
import Hamburger from "../components/Burger";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Lock from "../components/Lock";

const notify = () => toast.success("TOASTを表示");

const Home = () => (
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
      <div>
        <div className="mx-10 py-20">
          <button onClick={notify}>クリックする</button>
          <Toaster />
        </div>
        <div className="px-10 py-10 bg-green-100">
          <Lock />
        </div>
      </div>
    </main>
    <Footer />
  </>
);

export default Home;
