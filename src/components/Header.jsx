import Link from "next/link";
import { SignedIn, SignedOut, UserButton } from "@clerk/clerk-react";
import Hamburger from "./Burger";

const ButtonClick = (e) => {
  e.preventDefault();
  alert("ダミーリアクション");
};

const Header = () => (
  <>
    <div className="bg-gray-200 flex justify-between px-10 py-10">
      <div>ロゴ</div>
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
          <input className="w-[800px] h-[35px]" type="text" />
        </div>
        <div className="mr-20 border-2 border-gray-500 h-[40px]">
          <button
            onClick={ButtonClick}
            className="bg-orange-400 h-[37px] font-bold"
          >
            ボタン
          </button>
        </div>
        <div className="flex justify-end">
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
  </>
);

export default Header;
