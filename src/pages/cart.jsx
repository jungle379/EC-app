import Head from "next/head";
import Link from "next/link";
import { useState } from "react";
import { SignedIn, SignedOut, UserButton } from "@clerk/clerk-react";
import Footer from "../components/Footer";
import { client } from "../libs/client";
import { AiOutlineShoppingCart } from "react-icons/ai";
import Hamburger from "../components/Burger";
import { Button } from "@mantine/core";
import { useRouter } from "next/router";

export const getStaticProps = async () => {
  const data = await client.getList({
    endpoint: "cart",
    queries: { q: "" },
  });
  return {
    props: data,
  };
};

const Cart = (props) => {
  const [search, setSearch] = useState();
  const router = useRouter();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const q = event.currentTarget.query.value;
    const data = await fetch("/api/search", {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify({ q }),
    });
    const json = await data.json();
    setSearch(json);
  };

  const contents = search ? search.contents : props.contents;
  return (
    <>
      <Head>
        <title>カート内商品</title>
      </Head>
      <div>
        <div className="bg-gray-400 flex justify-evenly px-5 py-10">
          <div className="text-2xl font-bold pr-20">
            <Link href="/">
              <a>Amazoness</a>
            </Link>
          </div>
          <div className="flex justify-center">
            <div className="border-2 border-gray-600">
              <select className="mr-[2px] h-[37px]">
                <option value="">---</option>
                <option value="fasion">ファッション</option>
                <option value="music">音楽</option>
                <option value="health">ヘルス・ビューティー</option>
                <option value="book">書籍</option>
                <option value="food">食品</option>
                <option value="DVD">DVD/BD</option>
                <option value="products">雑貨</option>
                <option value="hobby">玩具</option>
                <option value="PC">パソコン製品</option>
                <option value="others">その他</option>
              </select>
            </div>
            <div className="mr-20 border-2 border-gray-600 h-[40px]">
              <form onSubmit={handleSubmit} autoComplete="off">
                <input
                  className="w-[600px] h-[35px]"
                  type="text"
                  name="query"
                />
                <button className="bg-orange-400 h-[37px] font-bold">
                  検索する
                </button>
              </form>
            </div>
            <div className="flex justify-end">
            <div className="border-4 bg-gray-200 border-orange-300 border-x-4 border-y-4 pt-[5px] w-[80px] mr-5 flex justify-center hover:text-red-500">
              <Link href="/header2/history">
                <a>購入履歴</a>
              </Link>
            </div>
            <div className="pt-[5px] w-[80px] border-4 bg-gray-200 border-orange-300 border-x-4 border-y-4 flex justify-center hover:text-red-500">
              <div className="pt-[3px]">
                <AiOutlineShoppingCart />
              </div>
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
        <div className="flex justify-between h-[50px] bg-gray-200">
          <div>
            <Hamburger />
          </div>
          <div className="pr-10 py-[15px] hover:text-red-500 text-sm">
            <Link href="../header2/points">
              <a>Amazoness_point</a>
            </Link>
          </div>
          <div className="px-10 py-[15px] hover:text-red-500 text-sm">
            <Link href="../header2/views">
              <a>閲覧履歴</a>
            </Link>
          </div>
          <div className="px-10 py-[15px] hover:text-red-500 text-sm">
            <Link href="../header2/history">
              <a>再購入</a>
            </Link>
          </div>
          <div className="px-10 py-[15px] hover:text-red-500 text-sm">
            <Link href="../category/foods">
              <a>食料品</a>
            </Link>
          </div>
          <div className="px-10 py-[15px] hover:text-red-500 text-sm">
            <Link href="../category/music">
              <a>音楽</a>
            </Link>
          </div>
          <div className="px-10 py-[15px] hover:text-red-500 text-sm">
            <Link href="../category/products">
              <a>雑貨</a>
            </Link>
          </div>
        </div>
      </div>
      <div className="h-screen bg-green-100">
        <div className="flex justify-between">
          <div className="text-4xl font-bold pt-20 px-40">カート</div>
          <div className="my-10 mx-40 py-[5px]w-[130px] flex justify-center">
          <Button
                onClick={() => router.push("../header2/history")}
                type="submit"
                mt="sm"
              >購入履歴へ</Button>
          </div>
        </div>
        <div className="mx-20 my-10 px-40 py-10 text-2xl border-2 border-red-500">
          <p>{`カート内に保存した商品: ${props.totalCount}個`}</p>
          <ul>
            {contents.map((content) => {
              return (
                <li className="mt-10" key={content.id}>
                  <Link href={`cart/${content.id}`}>
                    <a>{content.title}</a>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="flex justify-center text-2xl w-[80px] mx-[700px] my-20">
        <Button
                onClick={() => router.push("../buy/registar")}
                type="submit"
                mt="sm"
              >購入へ</Button>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Cart;
