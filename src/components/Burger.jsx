import { SignedIn, SignedOut } from "@clerk/clerk-react";
import Link from "next/link";
import { useState } from "react";

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

function Hamburger(props) {
  const [menuState, setMenuState] = useState(false);
  const clickValue = () => {
    const newState = !menuState; // 状態を反転させる
    setMenuState(newState); // 状態を更新 (これでHamburgerコンポーネントの再描画が行われる)
    if (props.setOpenMenu) {
      props.setOpenMenu(newState); // 親コンポーネントに値を渡す
    }
  };
  return (
    <div onClick={clickValue}>
      {menuState ? (
        <>
          <div>
            <span className="absolute transform rotate-45 mt-0.5 h-0.5 w-5 bg-black"></span>
            <span className="absolute transform -rotate-45 mt-0.5 h-0.5 w-5 bg-black"></span>
            <div className="py-10 w-[200px]">
              <div>
                <SignedIn>
                  <ClerkFeatures />
                </SignedIn>
                <SignedOut>
                  <SignupLink />
                </SignedOut>
              </div>
              <div>
                <Link href="/newest" className="">
                  <a className="text-blue-600 hover:text-red-500 hover:underline">
                    新着商品
                  </a>
                </Link>
              </div>
              <div>
                <Link href="/category" className="">
                  <a className="text-blue-600 hover:text-red-500 hover:underline">
                    カテゴリー一覧
                  </a>
                </Link>
              </div>
              <div>
                <Link href="/inquery" className="">
                  <a className="text-blue-600 hover:text-red-500 hover:underline">
                    お問い合わせ
                  </a>
                </Link>
              </div>
              <div>
                <Link href="/" className="">
                  <a className="text-blue-600 hover:text-red-500 hover:underline">
                    ログアウト
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="flex justify-start">
            <div>
              <span className="absolute mt-2 h-0.5 w-5 bg-black"></span>
              <span className="absolute mt-3 h-0.5 w-5 bg-black"></span>
              <div className="px-10">すべて</div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default Hamburger;
