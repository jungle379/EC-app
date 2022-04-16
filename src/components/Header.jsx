import Link from "next/link";
import { SignedIn, SignedOut, UserButton } from "@clerk/clerk-react";
import Hamburger from "./Burger";

const ButtonClick = (e) => {
  e.preventDefault();
  alert("ダミー動作です");
};

const Header = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const q = event.currentTarger.query.value;
  };
  return (
    <div>
      <div className="bg-gray-200 flex justify-between px-10 py-10">
        <div className="text-xl font-bold">Amazoness</div>
        <div className="flex justify-center">
          <div className="border-2 border-gray-600">
            <select className="mr-[2px] h-[37px]">
              <option value="">---</option>
              <option value="fasion">ファッション</option>
              <option value="audio">音楽</option>
              <option value="health">ヘルス・ビューティー</option>
              <option value="book">書籍</option>
              <option value="music">音楽</option>
              <option value="good">雑貨</option>
              <option value="others">その他</option>
            </select>
          </div>
          <div className="mr-20 border-2 border-gray-500 h-[40px]">
            <form onSubmit={handleSubmit}>
              <input className="w-[800px] h-[35px]" type="text" />
              <button
                onClick={ButtonClick}
                className="bg-orange-400 h-[37px] font-bold"
              >
                ボタン
              </button>
            </form>
          </div>
          <div className="flex justify-end">
            <div>
              <Link href="/cart">
                <a>カート</a>
              </Link>
            </div>
            <div className="mx-5">
              <SignedOut>
                <Link href="/sign-in">Sign in</Link>
              </SignedOut>
              <SignedIn>
                <UserButton />
              </SignedIn>
            </div>
          </div>
        </div>
      </div>
      <div className="px-10 bg-green-100">
        <Hamburger />
      </div>
    </div>
  );
};

export default Header;
