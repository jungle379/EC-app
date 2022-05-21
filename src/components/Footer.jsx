import Link from "next/link";
import ReturnTopButton from "./ButtonTop";

const Footer = () => (
  <>
    <div className="bg-gray-500 h-[60px]">
      <h1 className="text-white flex justify-center py-[20px]">
        <ReturnTopButton />
      </h1>
    </div>
    <div className="bg-gray-700 text-white py-5">
      <div className="flex justify-evenly py-[20px]">
        <div className="">
          <h1 className="text-2xl py-5">Amazonessについて</h1>
          <h2 className="py-5">
            <Link href="../footer2/signin">
              <a>アカウントの作成について</a>
            </Link>
          </h2>
          <h3 className="py-5">
            <Link href="/footer2/company">
              <a>会社概要</a>
            </Link>
          </h3>
          <h4 className="py-5">
            <Link href="../footer2/recruit">
              <a>採用情報</a>
            </Link>
          </h4>
        </div>
        <div className="">
          <h1 className="text-2xl py-5">各種お支払い</h1>
          <h2 className="py-5">
            <Link href="../footer2/credit">
              <a>クレジットカード決済について</a>
            </Link>
          </h2>
          <h3 className="py-5">
            <Link href="/">
              <a>アプリ決済について</a>
            </Link>
          </h3>
          <h4 className="py-5">
            <Link href="/">
              <a>現金支払について</a>
            </Link>
          </h4>
        </div>
        <div className="">
          <h1 className="text-2xl py-5">ビジネス</h1>
          <h2 className="py-5">
            <Link href="">
              <a>商用利用について</a>
            </Link>
          </h2>
          <h3 className="py-5">
            <Link href="">
              <a>ToB製品群について</a>
            </Link>
          </h3>
          <h4 className="py-5">
            <Link href="../inquery">
              <a>各種お問い合わせ</a>
            </Link>
          </h4>
        </div>
        <div className="">
          <h1 className="text-2xl py-5">ヘルプ＆ガイド</h1>
          <h2 className="py-5">
            <Link href="/">
              <a>サイトガイド</a>
            </Link>
          </h2>
          <h3 className="py-5">
            <Link href="/">
              <a>ヘルプ</a>
            </Link>
          </h3>
          <h4 className="py-5">
            <Link href="/">
              <a>外部サイト</a>
            </Link>
          </h4>
        </div>
      </div>
    </div>
    <div className="bg-gray-900 text-white flex justify-evenly h-[20px] py-10">
      <h1 className="px-5 border-r-2 border-r-white">
        <Link href="../../footer/kiyaku">
          <a>利用規約</a>
        </Link>
      </h1>
      <h2 className="px-5 border-r-2 border-r-white">
        <Link href="../../footer/privacy">
          <a>プライバシー規約</a>
        </Link>
      </h2>
      <h3 className="px-5 border-r-2 border-r-white">
        <Link href="../../footer/personal">
          <a>パーソナライズ広告規約</a>
        </Link>
      </h3>
      <h4 className="px-5 border-r-2 border-r-white">
        <Link href="../../footer/others">
          <a>各種規約</a>
        </Link>
      </h4>
      <h5>©️2022 Amazoness.inc</h5>
    </div>
  </>
);

export default Footer;
