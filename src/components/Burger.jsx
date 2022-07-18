import { SignedIn, SignedOut } from "@clerk/clerk-react";
import Link from "next/link";
import { useState } from "react";

const ClerkFeatures = () => (
  <Link href="/user">
    <a className="text-blue-600 hover:text-red-500 hover:underline">
      アカウント管理ページ
    </a>
  </Link>
);

const SignupLink = () => (
  <Link href="/sign-up">
    <a>
      <img src="/icons/user-plus.svg" />
      <div>
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
          <div className="bg-white h-[300px]">
            <div className="pt-5">
              <span className="absolute transform rotate-45 h-0.5 w-5 bg-black"></span>
              <span className="absolute transform -rotate-45 h-0.5 w-5 bg-black"></span>
            </div>
            <div className="py-10 w-[300px] h-[500px]">
              <div className="py-[5px]">
                <SignedIn>
                  <ClerkFeatures />
                </SignedIn>
                <SignedOut>
                  <SignupLink />
                </SignedOut>
              </div>
              <div className="py-[5px]">
                <Link href="/popular">
                  <a className="text-blue-600 hover:text-red-500 hover:underline">
                    人気ランキング
                  </a>
                </Link>
              </div>
              <div className="py-[5px]">
                <Link href="/newest">
                  <a className="text-blue-600 hover:text-red-500 hover:underline">
                    新着商品
                  </a>
                </Link>
              </div>
              <div className="py-[5px]">
                <Link href="/category">
                  <a className="text-blue-600 hover:text-red-500 hover:underline">
                    カテゴリー一覧
                  </a>
                </Link>
              </div>
              <div className="py-[5px]">
                <Link href="/">
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
          <div className="flex justify-start px-10 py-[15px]">
            <div>
              <span className="absolute mt-2 h-0.5 w-5 bg-black"></span>
              <span className="absolute mt-3 h-0.5 w-5 bg-black"></span>
              <div className="px-10 w-[200px]">すべて</div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default Hamburger;
