import SinglePropertyPage from "@/components/pages/single-property";
import { getPropertyByTitle } from "@/actions/property";
import { NextRequest } from "next/server";
import { TProperty } from "@hamampass/db/types";
import HeaderGeneral from "@/components/commons/header";

const SingleProperty = async ({ params }: any) => {
  const { title } = params;

  const req = new NextRequest(`${process.env.BASE_URL}/api/property/${title}`);
  const res = (await getPropertyByTitle(req)) as unknown as TProperty;

  if (!res) {
    return {
      notFound: true,
    };
  }

  return (
    <main>
      <HeaderGeneral
        isHome={false}
        title={decodeURI(title.replace(/-/g, " "))}
      />
      <SinglePropertyPage data={res} />
    </main>
  );
};

export default SingleProperty;
