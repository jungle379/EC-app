import Link from "next/link";
import { SignedIn, SignedOut, UserButton } from "@clerk/clerk-react";
import Slide from "./burger";

const Header = () => (
  <>
    <div className="bg-gray-200 flex justify-between px-10 py-10">
      <div>ロゴ</div>
      <div className="flex justify-center">
        <div className="border-2 border-gray-600">
          <input className="w-[800px] h-[35px]" type="text" />
        </div>
        <div className="mr-20 border-2 border-gray-500 h-[40px]">
          <button className="py-[5px]">ボタン</button>
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
      {/* <Slide className="mx-10 my-10" /> */}
    </div>
  </>
);

export default Header;
