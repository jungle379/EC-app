import Head from "next/head";
import Link from "next/link";
import { toast, Toaster } from "react-hot-toast";
import Footer from "../../components/Footer";
import Header from "../../components/Header";

const notify = () => toast.error("dismiss!!");

const Privacy = () => (
  <>
    <Head>
      <title>プライバシー規約</title>
    </Head>
    <Header />
    <div className="h-screen bg-green-100">
      <div className="text-2xl mx-20 py-5">規約</div>
      <div className="text-xl mx-20">
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
      <div className="mx-40 py-10 text-4xl text-red-800">
        <button onClick={notify}>クリック！</button>
        <Toaster />
      </div>
      <div>
        <Link href="/">
          <a>Topへ</a>
        </Link>
      </div>
      <div></div>
    </div>
    <Footer />
  </>
);

export default Privacy;
