import Head from "next/head";
import Link from "next/link";
import toast, { Toaster } from "react-hot-toast";
import Hamburger from "../components/Burger";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Lock from "../components/Lock";
import { client } from "../libs/client";
// import { Checkbox } from "@mantine/core";

const notify = () => toast.success("TOASTを表示");

export const getStaticProps = async () => {
  const data = await client.getList({ endpoint: "news" });
  return {
    props: data,
  };
};

export const Home = (props) => (
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
      <div className="">
        <div className="mx-10 py-20">
          <button onClick={notify}>クリックする</button>
          <Toaster />
        </div>
        <div className="px-10 py-10 bg-green-100">
          <Lock />
          {/* <Checkbox label="I agree to sell my privacy" /> */}
        </div>
        <div>
          <p>{`総数: ${props.totalCount}件`}</p>
          <ul>
            {props.contents.map((content) => {
              return (
                <li key={content.id}>
                  <Link href={`news/${content.id}`}>
                    <a>{content.title}</a>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </main>
    <Footer />
  </>
);

export default Home;
