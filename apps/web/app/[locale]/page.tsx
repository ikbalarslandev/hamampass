import HeaderGeneral from "@/components/commons/header";
import HomePage from "@/components/pages/home";
import { jsonLd } from "@/utils/structuredData/home";

export default function Home({ params }: any) {
  const { locale } = params;

  return (
    <main className="flex flex-col h-svh">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd(locale)) }}
      />
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
