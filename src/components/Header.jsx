import Link from "next/link";
import { SignedIn, SignedOut, UserButton } from "@clerk/clerk-react";
import { useState } from "react";

const Header = (props) => {
  const [search, setSearch] = useState();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const q = event.currentTarget.query.value;
    const data = await fetch("/api/search");
    const json = await data.json();
    setSearch(json);
  };

  const contents = search ? search.contents : props.contents;

  return (
    <div>
      <div className="bg-gray-200 flex justify-between px-5 py-10">
        <div className="text-xl font-bold">
          <Link href="/">
            <a>Amazoness</a>
          </Link>
        </div>
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
              <input className="w-[800px] h-[35px]" type="text" name="query" />
              <button className="bg-orange-400 h-[37px] font-bold">
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
    </div>
  );
};

export default Header;
