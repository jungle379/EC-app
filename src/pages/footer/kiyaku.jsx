import Head from "next/head";
import Link from "next/link";
import Footer from "../../components/Footer";
import Header from "../../components/Header";

const Kiyaku = () => (
  <>
    <Head>
      <title>規約</title>
    </Head>
    <Header />
    <div className="h-screen bg-green-100">
      <div className="text-xl">規約</div>
      <div>
        当サイトの規約
        <h1>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Error quidem
          iure soluta itaque natus impedit autem consequuntur pariatur
          voluptatem aperiam temporibus sapiente excepturi neque, quod fuga
          ullam doloremque eveniet ab!
        </h1>
        <h2>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Error velit
          ad quasi odit illo praesentium dicta earum sit! Quidem dolores at
          pariatur quo aperiam hic laborum quasi architecto, magni facilis.
        </h2>
      </div>
      <div>
        <Link href="/">
          <a></a>
        </Link>
      </div>
      <div></div>
    </div>
    <Footer />
  </>
);

export default Kiyaku;
