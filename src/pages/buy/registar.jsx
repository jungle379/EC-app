import Head from "next/head";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Lock from "../components/Lock";
import { useState } from "react";
import { LoadingOverlay, Button, Group } from "@mantine/core";

const Registar = () => {
  const [visible, setVisible] = useState(false);
  return (
    <>
      <Head>
        <title>カテゴリー</title>
      </Head>
      <div className="bg-green-100">
        <Header />
        <div className="text-4xl my-10 mx-10 font-bold">情報入力</div>
        <div className="mx-20 text-2xl w-[350px]">
          <div style={{ width: 400, position: "relative" }}>
            <LoadingOverlay visible={visible} />
            {/* ...other content */}
          </div>

          <Group position="center">
            <Button onClick={() => setVisible((v) => !v)}>
              Toggle overlay
            </Button>
          </Group>
        </div>
        <div className="px-10 py-10">
          <Lock />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Registar;
