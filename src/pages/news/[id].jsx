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
  const data = await client.getList({ endpoint: "news" });
  const ids = data.contents.map((content) => `/news/${content.id}`);
  return {
    paths: ids,
    fallback: false,
  };
};

export const getStaticProps = async (ctx) => {
  const data = await client.getListDetail({
    endpoint: "news",
    contentId: ctx.params.id,
  });
  return {
    props: data,
  };
};
export default NewsId;
