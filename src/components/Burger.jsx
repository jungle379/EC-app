import { SignedIn, SignedOut } from "@clerk/clerk-react";
import Link from "next/link";
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
    <div id="outer-container">
      <div id="menu-wrap">
        <Menu
          pageWrapId="page-wrap"
          outerContainerId="outer-container"
          noOverlay
          width={"240px"}
          {...props}
        >
          <div>
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
      </div>
    </div>
  );
};

export default Slide;
