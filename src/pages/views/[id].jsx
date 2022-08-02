import { client } from "../../libs/client";

const NewsId = (props) => {
  return (
    <div>
      <h1>{props.title}</h1>
      <time>{props.publishedAt}</time>
      <div dangerouslySetInnerHTML={{ __html: props.body }} />
    </div>
  );
};

export const getStaticPaths = async () => {
  const data = await client.getList({ endpoint: "views" });
  const ids = data.contents.map((content) => `/views/${content.id}`);
  return {
    paths: ids,
    fallback: false,
  };
};

export const getStaticProps = async (ctx) => {
  const data = await client.getListDetail({
    endpoint: "views",
    contentId: ctx.params.id,
  });
  return {
    props: data,
  };
};
export default NewsId;
