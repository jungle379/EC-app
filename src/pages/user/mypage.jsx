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
    <Header />
    <div className="min-h-screen">
      <div className="flex justify-between">
        <div className="text-4xl py-20 px-40 font-bold">マイページ</div>
        <div className="py-20 px-20">
          <Link href="/">ユーザ情報編集</Link>
        </div>
      </div>
      <div className="mx-40">
        <SimpleGrid cols={3}>
          <div className="py-10 border-4 border-gray-200">
            <Link href="/">注文履歴</Link>
            <h1 className="text-sm text-gray-400">
              配送状況の確認・返品手続き
            </h1>
          </div>
          <div className="py-10 border-4 border-gray-200">
            <Link href="/">ログインとセキュリティ</Link>
            <h1 className="text-sm text-gray-400">アカウント情報の変更</h1>
          </div>
          <div className="py-10 border-4 border-gray-200">
            <Link href="/">プライム</Link>
            <h1 className="text-sm text-gray-400">
              会員特典とお支払い方法の確認
            </h1>
          </div>
          <div className="py-10 border-4 border-gray-200">
            <Link href="/">アドレス帳</Link>
            <h1 className="text-sm text-gray-400">
              配送状況の確認・返品手続き
            </h1>
          </div>
          <div className="py-10 border-4 border-gray-200">
            <Link href="/">支払い方法</Link>
            <h1 className="text-sm text-gray-400">
              配送状況の確認・返品手続き
            </h1>
          </div>
          <div className="py-10 border-4 border-gray-200">
            <Link href="/">ギフト券</Link>
            <h1 className="text-sm text-gray-400">
              配送状況の確認・返品手続き
            </h1>
          </div>
          <div className="py-10 border-4 border-gray-200">
            <Link href="/">ギフト券</Link>
            <h1 className="text-sm text-gray-400">
              配送状況の確認・返品手続き
            </h1>
          </div>
          <div className="py-10 border-4 border-gray-200">
            <Link href="/">ギフト券</Link>
            <h1 className="text-sm text-gray-400">
              配送状況の確認・返品手続き
            </h1>
          </div>
          <div className="py-10 border-4 border-gray-200">
            <Link href="/">ギフト券</Link>
            <h1 className="text-sm text-gray-400">
              配送状況の確認・返品手続き
            </h1>
          </div>
        </SimpleGrid>
      </div>
      <div className="border-t-2 my-10 mx-40">
        <SimpleGrid cols={3}>
          <div className="mt-10 py-10 border-4 border-gray-200">
            <Link href="/">ギフト券</Link>
          </div>
          <div className="mt-10 py-10 border-4 border-gray-200">
            <Link href="/">ギフト券</Link>
          </div>
          <div className="mt-10 py-10 border-4 border-gray-200">
            <Link href="/">ギフト券</Link>
          </div>
        </SimpleGrid>
      </div>
      <div className="mx-40">
        <SimpleGrid cols={3}>
          <div className="py-10 border-4 border-gray-200">
            <Link href="/">ギフト券</Link>
          </div>
          <div className="py-10 border-4 border-gray-200">
            <Link href="/">ギフト券</Link>
          </div>
          <div className="py-10 border-4 border-gray-200">
            <Link href="/">ギフト券</Link>
          </div>
        </SimpleGrid>
      </div>
      <div className="mx-40">
        <SimpleGrid cols={2}>
          <div className="my-10 py-10 border-4 border-gray-200">
            <Link href="/">ギフト券</Link>
          </div>
          <div className="my-10 py-10 border-4 border-gray-200">
            <Link href="/">ギフト券</Link>
          </div>
        </SimpleGrid>
      </div>
    </div>
    <Footer />
  </>
);

export default Mypage;
