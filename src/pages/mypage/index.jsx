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
      <div className="text-4xl py-10 px-40 font-bold">マイページ</div>
      <div className="mx-40">
        <SimpleGrid cols={3}>
          <div className="py-10 border-4 border-gray-200">
            <Link href="/header2/history">注文履歴</Link>
            <h1 className="text-sm text-gray-400">
              配送状況の確認・返品手続き
            </h1>
          </div>
          <div className="py-10 border-4 border-gray-200">
            <Link href="/user">ログインとセキュリティ</Link>
            <h1 className="text-sm text-gray-400">アカウント情報の変更</h1>
          </div>
          <div className="py-10 border-4 border-gray-200">
            <Link href="/">プライム</Link>
            <h1 className="text-sm text-gray-400">
              会員特典とお支払い方法の確認
            </h1>
          </div>
          <div className="py-10 border-4 border-gray-200">
            <Link href="/user">アドレス帳</Link>
            <h1 className="text-sm text-gray-400">登録住所の追加・変更</h1>
          </div>
          <div className="py-10 border-4 border-gray-200">
            <Link href="/mypage/payment">お客様の支払い方法</Link>
            <h1 className="text-sm text-gray-400">
              支払い方法と設定の管理、全てのトランザクションの表示
            </h1>
          </div>
          <div className="py-10 border-4 border-gray-200">
            <Link href="/mypage/gift">ギフト券</Link>
            <h1 className="text-sm text-gray-400">
              残高の確認・ギフト券の発行
            </h1>
          </div>
          <div className="py-10 border-4 border-gray-200">
            <Link href="/">メッセージセンター</Link>
            <h1 className="text-sm text-gray-400">お知らせのEメールを確認</h1>
          </div>
          <div className="py-10 border-4 border-gray-200">
            <Link href="/">カスタマーサービスに連絡</Link>
            <h1 className="text-sm text-gray-400">
              お電話またはチャットでお問い合わせ
            </h1>
          </div>
          <div className="py-10 border-4 border-gray-200">
            <Link href="https://www.apple.com/jp/app-store/">
              モバイルアプリ
            </Link>
            <h1 className="text-sm text-gray-400">アプリをダウンロード</h1>
          </div>
        </SimpleGrid>
      </div>
      <div className="border-t-2 my-10 mx-40">
        <SimpleGrid cols={3}>
          <div className="mt-10 py-[20px] px-[10px] border-4 border-gray-200">
            <div className="font-bold">
              <Link href="/">デジタルコンテンツとデバイス</Link>
            </div>
            <div className="text-blue-300 hover:text-red-500 hover:underline">
              <Link href="/">Audible設定</Link>
            </div>
            <div className="text-blue-300 hover:text-red-500 hover:underline">
              <Link href="/">当サイト Driveの管理</Link>
            </div>
            <div className="text-blue-300 hover:text-red-500 hover:underline">
              <Link href="/">アプリライブラリと端末の管理</Link>
            </div>
          </div>
          <div className="mt-10 py-10 border-4 border-gray-200">
            <div className="font-bold">
              <Link href="/">Eメールとメッセージ</Link>
            </div>
          </div>
          <div className="mt-10 py-10 border-4 border-gray-200">
            <div className="font-bold">
              <Link href="/">その他の支払い方法</Link>
            </div>
          </div>
        </SimpleGrid>
      </div>
      <div className="mx-40">
        <SimpleGrid cols={3}>
          <div className="py-10 border-4 border-gray-200">
            <div className="font-bold">
              <Link href="/">お買い物設定</Link>
            </div>
          </div>
          <div className="py-10 border-4 border-gray-200">
            <div className="font-bold">
              <Link href="/user">その他のアカウント</Link>
            </div>
          </div>
          <div className="py-10 border-4 border-gray-200">
            <div className="font-bold">
              <Link href="/">お買い物プログラム</Link>
            </div>
          </div>
        </SimpleGrid>
      </div>
      <div className="mx-40">
        <SimpleGrid cols={2}>
          <div className="my-10 py-10 border-4 border-gray-200">
            <div className="font-bold">
              <Link href="/">メールマガジン＆その他の設定</Link>
            </div>
          </div>
          <div className="my-10 py-10 border-4 border-gray-200">
            <div className="font-bold">
              <Link href="/">データとプライバシー</Link>
            </div>
          </div>
        </SimpleGrid>
      </div>
    </div>
    <Footer />
  </>
);

export default Mypage;
