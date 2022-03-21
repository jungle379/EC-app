import Link from "next/link";
import { SignedIn, SignedOut, UserButton } from "@clerk/clerk-react";
import { slide as Menu } from "react-burger-menu";

const Slide = (props) => {
  return (
    <Menu {...props}>
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

const Header = () => (
  <>
    <div className="flex justify-between px-10 my-10">
      <div>ロゴ</div>
      <div className="flex justify-center">
        <div className="border-2 border-gray-600 mx-20">
          <input className="w-[600px] h-[25px]" type="text" />
        </div>
        <div className="mx-20 border-2 border-gray-500">
          <button>ボタン</button>
        </div>
        <div className="flex justify-end">
          <div className="pr-5">
            <SignedIn>
              <ClerkFeatures />
            </SignedIn>
            <SignedOut>
              <SignupLink />
            </SignedOut>
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
    <div>
      <div className="mx-10">Sidevar</div>
      <Slide />
    </div>
  </>
);

export default Header;
