import Head from "next/head";
import Footer from "../../components/Footer";
import Header from "../../components/Header";

const DVD = () => (
  <>
    <Head>
      <title>DVD/BD</title>
    </Head>
    <Header />
    <div className="h-screen bg-green-100">
      <div className="text-2xl">DVD/BD</div>
      <div></div>
      <div></div>
    </div>
    <Footer />
  </>
);

export default DVD;
