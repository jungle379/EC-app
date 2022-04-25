import Head from "next/head";
import Link from "next/link";
import Footer from "../components/Footer";
import Header from "../components/Header";

const ITEMS = [
  {
    href: "/",
    title: "1st",
  },
  {
    href: "/",
    title: "2nd",
  },
  {
    href: "/",
    title: "3rd",
  },
];

const Popular = () => (
  <>
    <Head>
      <title>人気ランキング</title>
    </Head>
    <div className="bg-green-100 h-auto">
      <Header />
      <div className="text-4xl py-10 px-20 font-bold">人気ランキング</div>
      {ITEMS.map((item) => {
        return (
          <div className="py-10 px-20 text-2xl w-[100px]">
            <Link href={item.href}>
              <a>{item.title}</a>
            </Link>
          </div>
        );
      })}
    </div>
    <Footer />
  </>
);

export default Popular;
