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
  return {
    title: decodedTitle,
    openGraph: {
      title: decodedTitle,
      description: `Read more about ${decodedTitle}`,
      url: `${process.env.BASE_URL}/en/properties/${title}`, // Replace with your page URL
      images: [
        {
          url: "https://duckduckgo.com/?q=car&t=brave&iax=images&ia=images&iai=https%3A%2F%2Fstatic1.hotcarsimages.com%2Fwordpress%2Fwp-content%2Fuploads%2F2019%2F07%2Fhttps-api.thedrive.com-wp-content-uploads-2018-09-jaguaripacefirstedition0131.jpgquality85-1.jpeg", // Update with dynamic or static image path
          width: 1200,
          height: 630,
          alt: `${decodedTitle} image`,
        },
      ],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: decodedTitle,
      description: `Read more about ${decodedTitle}`,
      images: [
        "https://duckduckgo.com/?q=car&t=brave&iax=images&ia=images&iai=https%3A%2F%2Fstatic1.hotcarsimages.com%2Fwordpress%2Fwp-content%2Fuploads%2F2019%2F07%2Fhttps-api.thedrive.com-wp-content-uploads-2018-09-jaguaripacefirstedition0131.jpgquality85-1.jpeg",
      ], // Update with the correct image URL
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
