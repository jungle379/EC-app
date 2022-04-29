import Head from "next/head";
import Footer from "../../components/Footer";
import Header from "../../components/Header";

const Hobby = () => (
  <>
    <Head>
      <title>玩具</title>
    </Head>
    <Header />
    <div className="h-screen bg-green-100">
      <div className="text-2xl">玩具</div>
      <div></div>
      <div></div>
    </div>
    <Footer />
  </>
);

export default Hobby;
