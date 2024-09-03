import HeaderGeneral from "@/components/commons/header";
import HomePage from "@/components/pages/home";

export default function Home() {
  return (
    <main className="flex flex-col  min-h-screen bg-hero">
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
      <HomePage />
    </main>
  );
}
