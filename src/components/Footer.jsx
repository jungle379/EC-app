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
        <div className="flex justify-evenly py-5">
          <h1>test1</h1>
          <h2>test2</h2>
          <h3>test3</h3>
          <h4>test4</h4>
        </div>
        <div className="flex justify-evenly py-5">
          <h1>test1</h1>
          <h2>test2</h2>
          <h3>test3</h3>
          <h4>test4</h4>
        </div>
      </div>
      <div className="flex justify-center">
        <Link href="/">
          <a>©️2022</a>
        </Link>
      </div>
    </div>
  </>
);

export default Footer;
