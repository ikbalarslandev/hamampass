import SinglePropertyPage from "@/components/single-property";
import HeaderComponent from "@/components/single-property/header";
import { getPropertyByTitle } from "@/actions/property";
import { NextRequest } from "next/server";
import { TProperty } from "@/types";
const SingleProperty = async ({ params }: any) => {
  const { title } = params;

  const req = new NextRequest(`http://localhost:3000/api/property/${title}`);
  const res = (await getPropertyByTitle(req)) as unknown as TProperty;

  if (!res) {
    return {
      notFound: true,
    };
  }

  return (
    <main>
      <HeaderComponent />
      <SinglePropertyPage data={res} />
    </main>
  );
};

export default SingleProperty;
