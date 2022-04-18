import Head from "next/head";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Link from "next/link";

const Cart = () => (
  <>
    <Head>
      <title>カート内</title>
    </Head>
    <Header />
    <div className="h-auto bg-green-100">
      <div className="text-xl">カート</div>
      <div>
        <Link href="">
          <a></a>
        </Link>
      </div>
      <div></div>
    </div>
    <Footer />
  </>
);

export default Cart;
