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
          url: "https://www.hamampass.com/_next/image?url=https%3A%2F%2Futfs.io%2Ff%2F0a1e95a6-f046-4d22-a2a5-ed90ae70fe2a-4gmqtj.JPEG&w=640&q=75",
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
