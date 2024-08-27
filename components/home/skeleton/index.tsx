import Image from "next/image";
import logo from "@/public/logo.png";

const SkeletonComponent = () => {
  return (
    <div className="w-full flex items-center justify-center h-[100vh] ">
      <Image
        src={logo}
        alt="logo"
        width={400}
        height={100}
        className=" animate-pulse"
      />
    </div>
  );
};

export default SkeletonComponent;
