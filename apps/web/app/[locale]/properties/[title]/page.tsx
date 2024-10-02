import SinglePropertyPage from "@/components/pages/single-property";
import { getPropertyByTitle } from "@/actions/property";
import { NextRequest } from "next/server";
import { TProperty } from "@/types";
import HeaderGeneral from "@/components/commons/header";
import type { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: { title: string };
}): Promise<Metadata> {
  const { title } = params;
  const decodedTitle = decodeURI(title.replace(/-/g, " "));

  const req = new NextRequest(`${process.env.BASE_URL}/api/property/${title}`);
  const res = (await getPropertyByTitle(req)) as unknown as TProperty;
  const image = res.photos[0];

  return {
    title: decodedTitle,
    openGraph: {
      title: decodedTitle,
      description: `Read more about ${decodedTitle}`,
      url: `${process.env.BASE_URL}/en/properties/${title}`,
      images: [
        {
          url: image,
          width: 1920,
          height: 1080,
          alt: `${decodedTitle} image`,
        },
      ],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: decodedTitle,
      description: `Read more about ${decodedTitle}`,
      images: [image],
    },
  };
}

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
