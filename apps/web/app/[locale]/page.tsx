import HeaderGeneral from "@/components/commons/header";
import HomePage from "@/components/pages/home";
import { jsonLd } from "@/utils/structuredData/home";

import type { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: { locale: string };
}): Promise<Metadata> {
  console.log("params", params);

  return {
    other: {
      "application/ld+json": JSON.stringify(jsonLd),
    },
  };
}

export default function Home({ params }: any) {
  const { locale } = params;

  return (
    <main className="flex flex-col h-svh">
      <HeaderGeneral isBgNone={true} />
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover -z-10"
      >
        <source src="/hero.mov" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <HomePage locale={locale} />
    </main>
  );
}
