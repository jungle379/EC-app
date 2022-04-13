import Head from "next/head";
import toast, { Toaster } from "react-hot-toast";
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
    <div className="h-auto bg-green-100">
      <div className="mx-10 py-20">
        <button onClick={notify}>クリックする</button>
        <Toaster />
      </div>
    </div>
    <div className="px-10 py-10 bg-green-100">
      <Lock />
    </div>
    <Footer />
  </>
);

export default Home;
