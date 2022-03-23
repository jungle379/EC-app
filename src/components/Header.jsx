import Link from "next/link";
import { SignedIn, SignedOut, UserButton } from "@clerk/clerk-react";
import Slide from "./burger";

const Header = () => (
  <>
    <div className="bg-gray-200 flex justify-between px-10 py-10 z-10">
      <div>ロゴ</div>
      <div className="flex justify-center">
        <div className="border-2 border-gray-600 mx-20">
          <input className="w-[600px] h-[35px]" type="text" />
        </div>
        <div className="mx-20 border-2 border-gray-500">
          <button>ボタン</button>
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
    <div>
      <button onClick={Slide} className="mx-10">
        Sidevar
      </button>
      <Slide className="mx-10 my-10" />
    </div>
  </>
);

export default Header;
