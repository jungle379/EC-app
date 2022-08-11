import Head from "next/head";
import Footer from "../components/Footer";
import Header from "../components/Header";
import TestCarousel from "../components/Swiper";
import Lock from "../components/Lock";
import Link from "next/link";
import { AspectRatio, Image } from '@mantine/core';
import TestCarousel2 from "../components/Swiper2";

const Home = () => {
  return (
    <>
      <Head>
        <title>トップページ</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className="h-auto bg-green-100">
        <div>
          <TestCarousel />
        </div>
        <div className="flex justify-evenly my-20">
          <div className="mx-10 bg-white h-[300px] w-1/4">
            <Link href="/header2/history">
              <a>再び購入</a>
            </Link>
          </div>
          <div className="mx-10 bg-white h-[300px] w-1/4">
            <Link href="/">
              <a>注目のタイムセール</a>
            </Link>
          </div>
          <div className="mx-10 bg-white h-[300px] w-1/4">
            <Link href="/card">
              <a>Amazonessカードの入会</a>
            </Link>
          </div>
          <div className="mx-10 w-1/4">
            <div className="bg-white h-[110px]">
              <Link href="/">
                <a>カードA1</a>
              </Link>
            </div>
            <div className="bg-white h-[150px] my-10">
              <Link href="/">
                <a>カードA2</a>
              </Link>
            </div>
          </div>
        </div>
        <div className="text-2xl font-bold">
          <Link href="/">
            <a>こちらもおすすめ</a>
          </Link>
          <TestCarousel2 />
        </div>
        <div className="flex justify-evenly my-20">
          <div className="mx-10 bg-white h-[300px] w-1/4">
            <Link href="/">
              <a>マイページへ</a>
            </Link>
          </div>
          <div className="mx-10 bg-white h-[300px] w-1/4">
            <Link href="/">
              <a>あなたの購入志向から</a>
            </Link>
          </div>
          <div className="mx-10 bg-white h-[300px] w-1/4">
            <Link href="/">
              <a>AmazonessPrimeについて</a>
            </Link>
          </div>
          <div className="mx-10 mt-10 bg-white h-[200px] w-1/4">
            <Link href="/">
              <a>カードA3</a>
            </Link>
            <AspectRatio ratio={16 / 9}>
      <iframe
        src="https://www.youtube.com/embed/Dorf8i6lCuk"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </AspectRatio>
          </div>
        </div>
        <div className="my-20">
        <AspectRatio ratio={720 / 1080} sx={{ maxWidth: 300 }} mx="auto">
      <Image
        src="https://images.unsplash.com/photo-1527118732049-c88155f2107c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80"
        alt="Panda"
      />
    </AspectRatio>
        </div>
        <div className="my-20 mx-40">
        <AspectRatio ratio={16 / 9}>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3025.3063874233135!2d-74.04668908358428!3d40.68924937933441!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25090129c363d%3A0x40c6a5770d25022b!2sStatue%20of%20Liberty%20National%20Monument!5e0!3m2!1sen!2sru!4v1644262070010!5m2!1sen!2sru"
        title="Google map"
        frameBorder="0"
      />
    </AspectRatio>
        </div>
        <div className="my-20 mx-40">
        <AspectRatio ratio={16 / 9}>
      <iframe
        src="https://www.youtube.com/embed/Dorf8i6lCuk"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </AspectRatio>
    </div>
        <div className="py-20 px-20 flex justify-center">
          <div className="my-20 mx-20">
            <Lock />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Home;
