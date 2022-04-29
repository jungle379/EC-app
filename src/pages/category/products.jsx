import Head from "next/head";
import Footer from "../../components/Footer";
import Header from "../../components/Header";

const Products = () => (
  <>
    <Head>
      <title>雑貨</title>
    </Head>
    <Header />
    <div className="h-screen bg-green-100">
      <div className="text-2xl">雑貨</div>
      <div></div>
      <div></div>
      <div></div>
    </div>
    <Footer />
  </>
);

export default Products;
