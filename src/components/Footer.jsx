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
    <div className="bg-gray-700 text-white flex justify-center py-20">
      <Link href="/">
        <a>©️2022</a>
      </Link>
    </div>
  </>
);

export default Footer;
