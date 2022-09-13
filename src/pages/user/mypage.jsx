import Head from "next/head";
import Link from "next/link";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { SimpleGrid } from "@mantine/core";

const Mypage = () => (
  <>
    <Head>
      <title>マイページ</title>
    </Head>
    <div className="h-screen">
      <Header />
      <div className="flex justify-between">
        <div className="text-2xl py-20 px-40 font-bold">マイページ</div>
        <div className="py-20 px-20">
          <Link href="/">ユーザ情報編集</Link>
        </div>
      </div>
      <div className="mx-40">
        <SimpleGrid cols={3}>
          <div className="py-10 border-4 border-gray-200">
            <Link href="/">注文履歴</Link>
          </div>
          <div className="py-10 border-4 border-gray-200">
            <Link href="/">アカウントサービス</Link>
          </div>
          <div className="py-10 border-4 border-gray-200">
            <Link href="/">プライム</Link>
          </div>
          <div className="py-10 border-4 border-gray-200">
            <Link href="/">アドレス帳</Link>
          </div>
          <div className="py-10 border-4 border-gray-200">
            <Link href="/">支払い方法</Link>
          </div>
          <div className="py-10 border-4 border-gray-200">
            <Link href="/">ギフト券</Link>
          </div>
        </SimpleGrid>
      </div>
    </div>
    <Footer />
  </>
);

export default Mypage;
