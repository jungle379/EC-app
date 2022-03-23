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
    <div className="bg-gray-700 text-white py-10">
      <div>
        <div className="flex justify-evenly py-5 text-xs">
          <h1>test1</h1>
          <h2>test2</h2>
          <h3>test3</h3>
          <h4>test4</h4>
        </div>
        <div className="flex justify-evenly py-5 text-xs">
          <h1>test1</h1>
          <h2>test2</h2>
          <h3>test3</h3>
          <h4>test4</h4>
        </div>
      </div>
    </div>
    <div className="bg-gray-900 text-white flex justify-center h-[20px] py-10">
      <h1 className="mx-5 border-r-2 border-r-white">利用規約</h1>
      <h2 className="mx-5 border-r-2 border-r-white">プライバシー規約</h2>
      <h3 className="mx-5 border-r-2 border-r-white">パーソナライズ広告規約</h3>
      <h4 className="mx-5 border-r-2 border-r-white">各種規約</h4>
      <h5>©️2022</h5>
    </div>
  </>
);

export default Footer;
