import { client } from "../../libs/client";

const handler = async (req, res) => {
  const data = await client.getList({
    endpoint: "news",
    queries: { q: req.body.q },
  });
  console.log(data);
  res.status(200).json(data);
};
export default handler;
