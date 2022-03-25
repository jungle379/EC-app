import Link from "next/link";
import { SignedIn, SignedOut, UserButton } from "@clerk/clerk-react";
import { slide as Menu } from "react-burger-menu";

const ClerkFeatures = () => (
  <Link href="/user">
    <a className="text-blue-600 hover:text-red-500 hover:underline">
      アカウント管理ページへ
    </a>
  </Link>
);
const SignupLink = () => (
  <Link href="/sign-up">
    <a className="">
      <img src="/icons/user-plus.svg" />
      <div className="">
        <img src="/icons/arrow-right.svg" />
      </div>
    </a>
  </Link>
);
const Slide = (props) => {
  return (
    <Menu noOverlay width={"240px"} {...props}>
      <div className="">
        <SignedIn>
          <ClerkFeatures />
        </SignedIn>
        <SignedOut>
          <SignupLink />
        </SignedOut>
      </div>
      <div>
        <Link href="/" className="">
          <a>ホームページ</a>
        </Link>
      </div>
      <div>
        <Link href="/page-2" className="">
          <a>ページ2</a>
        </Link>
      </div>
      <div>
        <Link href="/page-3" className="">
          <a>ページ3</a>
        </Link>
      </div>
      <div>
        <Link href="/page-4" className="">
          <a>ページ4</a>
        </Link>
      </div>
    </Menu>
  );
};

const Header = () => (
  <>
    <div className="bg-gray-200 flex justify-between px-10 py-10">
      <div>ロゴ</div>
      <div className="flex justify-center">
        <div className="border-2 border-gray-600">
          <select className="mr-[2px] h-[37px]">
            <option value="fasion">ファッション</option>
            <option value="audio">音楽</option>
            <option value="health">ヘルス・ビューティー</option>
            <option value="book">書籍</option>
            <option value="music">音楽</option>
          </select>
          <input className="w-[800px] h-[35px]" type="text" />
        </div>
        <div className="mr-20 border-2 border-gray-500 h-[40px]">
          <button className="bg-orange-400 h-[37px]">ボタン</button>
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
    <div className="bg-gray-200">
      <button onClick={Slide} className="mx-10">
        Sidevar
      </button>
      <Slide />
    </div>
  </>
);

export default Header;
