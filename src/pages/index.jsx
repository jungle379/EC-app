import Head from "next/head";
import toast, { Toaster } from "react-hot-toast";
import Footer from "../components/Footer";
import Header from "../components/Header";
// import Lock from "../components/Lock";

const notify = () => toast.success("TOASTを表示");

const Home = () => (
  <>
    <Head>
      <title>トップページ</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Header />
    <main className="h-screen bg-green-100">
      <div>
        <button onClick={notify}>Make me a toast</button>
        <Toaster />
      </div>
      <div className="px-10 py-10">
        <Lock />
      </div>
    </main>
    <Footer />
  </>
);

export default Home;
