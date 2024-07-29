import { request } from "@/services/axios";
interface Params {
  title: string;
}

const SingleProperty = ({ params }: { params: Params }) => {
  const title = decodeURIComponent(params.title as string).replace(/-/g, " ");

  const data: any = request({
    type: "get",
    endpoint: `property/${title}`,
  });

  return <div>My Post: {data.title}</div>;
};

export default SingleProperty;
