import Image from "next/image";

const OnlyBanner = () => {
  return (
    <div className="flex flex-col mr-24 mt-10 mb-4">
      <Image src="/home/galata.png" alt="banner" width={1920} height={1080} />
      <h2 className="text-primary-10 text-3xl m-4">
        Only in Istanbul <br /> for Now
      </h2>
    </div>
  );
};

export default OnlyBanner;
