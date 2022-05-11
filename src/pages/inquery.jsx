import Head from "next/head";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Mailer from "../components/Mailform";
import { Textarea, Select } from "@mantine/core";

const Inquery = () => (
  <>
    <Head>
      <title>お問い合わせフォーム</title>
    </Head>
    <Header />
    <div className="h-screen bg-green-100">
      <div className="text-4xl font-bold px-40 py-20">お問い合わせ</div>
      <div className="py-5 px-[500px]">
        <Select
          className="w-[500px]"
          label="何についてのお問合せですか？"
          placeholder="Pick one"
          data={[
            { value: "conpany", label: "企業について" },
            { value: "product", label: "商品について" },
            { value: "opinion", label: "ご意見" },
            { value: "other", label: "その他" },
          ]}
        />
      </div>
      <div className="py-5 px-[500px]">
        <Textarea
          className="w-[600px]"
          placeholder="Your comment"
          label="Your comment"
          error=""
          size="lg"
          required
        />
      </div>
      <Mailer />
    </div>
    <Footer />
  </>
);

export default Inquery;
