import HeaderGeneral from "@/components/commons/header";
import HomePage from "@/components/pages/home";
import { Button } from "@hamampass/ui/primitives/button.tsx";

export default function Home({ params }: any) {
  const { locale } = params;
  return (
    <main className="flex flex-col  h-svh ">
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
