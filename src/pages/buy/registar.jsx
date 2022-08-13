import Head from "next/head";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Lock from "../../components/Lock";
import { useRouter } from "next/router";
import { useState } from "react";
import { DatePicker } from "@mantine/dates";
import {
  LoadingOverlay,
  Button,
  Group,
  NumberInput,
  TextInput,
} from "@mantine/core";
import { useForm } from "@mantine/form";

const Registar = () => {
  const [visible, setVisible] = useState(false);
  const router = useRouter();
  const form = useForm({
    initialValues: { name: "", email: "", age: 0 },

    validate: {
      name: (value) =>
        value.length < 2 ? "Name must have at least 2 letters" : null,
      email: (value) => (/^\S+@\S+$/.test(value) ? null : "Invalid email"),
      age: (value) =>
        value < 18 ? "You must be at least 18 to register" : null,
    },
  });
  return (
    <>
      <Head>
        <title>入力フォーム</title>
      </Head>
      <div className="bg-green-100 h-auto">
        <Header />
        <div className="text-4xl font-bold pt-20 px-40">情報入力</div>
        <div className="mx-40 my-10 text-2xl w-[350px]">
          <div
            className="flex justify-center mx-10 my-10"
            style={{ width: 400, position: "relative" }}
          >
            <LoadingOverlay visible={visible} />
            <form onSubmit={form.onSubmit(console.log)}>
              <TextInput
                label="Name"
                placeholder="Name"
                {...form.getInputProps("name")}
              />
              <TextInput
                mt="sm"
                label="Email"
                placeholder="Email"
                {...form.getInputProps("email")}
              />
              <TextInput
                mt="sm"
                label="Address"
                placeholder="Address"
                {...form.getInputProps("")}
              />
              <NumberInput
                mt="sm"
                label="Age"
                placeholder="Age"
                min={0}
                max={99}
                {...form.getInputProps("age")}
              />
              {/* <FileInput
      placeholder="Pick file"
      label="Your resume"
      required
    /> */}
              <DatePicker placeholder="Pick date" label="Event date" required />
              <Button
                onClick={() => router.push("../buy/registar-2")}
                type="submit"
                mt="sm"
              >
                Submit
              </Button>
            </form>
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
