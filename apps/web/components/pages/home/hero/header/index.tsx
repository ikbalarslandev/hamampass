import Image from "next/image";
import Header from "../../../../commons/new-header";

const HeroHeader = () => {
  return (
    <div>
      <Header />

      <Image
        src="/hero.jpg"
        alt="hero"
        layout="fill"
        objectFit="cover"
        objectPosition="center"
        className="absolute inset-0 w-screen h-svh object-cover -z-20"
      />
      <div className="absolute inset-0 w-screen h-svh bg-black/10 -z-10" />
    </div>
  );
};

export default HeroHeader;
