import Link from "next/link";
import { SignedIn, SignedOut, UserButton } from "@clerk/clerk-react";

const ClerkFeatures = () => (
  <Link href="/user">
    <a className="text-blue-600 hover:text-red-500 hover:underline">
      アカウント管理ページへ
      {/* <img src="/icons/arrow-right.svg" /> */}
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
    <div className="flex justify-between mx-10 my-10 h-20">
      <div>ロゴ</div>
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
  </>
);

export default Header;
