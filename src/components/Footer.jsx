import Link from "next/link";

const Footer = () => (
  <>
    <div className="bg-gray-500 h-[80px]">
      <h1 className="text-white flex justify-center py-[30px]">
        <Link href="/">
          <a>トップに戻る</a>
        </Link>
      </h1>
    </div>
    <div className="bg-gray-700 text-white py-5">
      <div>
        <div className="flex justify-evenly py-5 text-xs">
          <h1 className="text-2xl">Amazonessについて</h1>
          <h2>test2</h2>
          <h3>test3</h3>
          <h4>test4</h4>
        </div>
        <div className="flex justify-evenly py-5 text-xs">
          <h1>
            <Link href="../footer2/signin">
              <a>アカウントの作成について</a>
            </Link>
          </h1>
          <h2>test6</h2>
          <h3>test7</h3>
          <h4>test8</h4>
        </div>
        <div className="flex justify-evenly py-5 text-xs">
          <h1>test9</h1>
          <h2>test10</h2>
          <h3>test11</h3>
          <h4>test12</h4>
        </div>
      </div>
    </div>
    <div className="bg-gray-900 text-white flex justify-center h-[20px] py-10">
      <h1 className="mx-5 border-r-2 border-r-white">
        <Link href="../../footer/kiyaku">
          <a>利用規約</a>
        </Link>
      </h1>
      <h2 className="mx-5 border-r-2 border-r-white">
        <Link href="../../footer/privacy">
          <a>プライバシー規約</a>
        </Link>
      </h2>
      <h3 className="mx-5 border-r-2 border-r-white">
        <Link href="../../footer/personal">
          <a>パーソナライズ広告規約</a>
        </Link>
      </h3>
      <h4 className="mx-5 border-r-2 border-r-white">
        <Link href="../../footer/others">
          <a>各種規約</a>
        </Link>
      </h4>
      <h5>©️2022 Amazoness</h5>
    </div>
  </>
);

export default Footer;
