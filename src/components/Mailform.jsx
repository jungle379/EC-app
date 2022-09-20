import { TextInput, Checkbox, Button, Group, Box } from "@mantine/core";
import { useForm } from "@mantine/form";
import { useRouter } from "next/router";

function Mailer() {
  const router = useRouter();
  const form = useForm({
    initialValues: {
      email: "",
      termsOfService: false,
    },

    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : "Invalid email"),
    },
  });

  return (
    <div className="px-[500px]">
      <Box sx={{ maxWidth: 400 }}>
        <form onSubmit={form.onSubmit((values) => console.log(values))}>
          <TextInput
            required
            label="Email"
            placeholder="your@email.com"
            {...form.getInputProps("email")}
          />

          <Checkbox
            mt="md"
            label="上記内容で問い合わせします"
            {...form.getInputProps("termsOfService", { type: "checkbox" })}
          />

          <Group position="right" mt="md">
            <Button onClick={() => router.push("../footer2/end")} type="submit">
              送信する
            </Button>
          </Group>
        </form>
      </Box>
    </div>
  );
}

export default Mailer;
