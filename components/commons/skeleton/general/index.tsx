import Image from "next/image";
import logo from "@/public/logo.png";

const SkeletonComponent = () => {
  return (
    <main
      className="w-full flex items-center justify-center h-[100vh]"
      role="status"
      aria-live="polite"
    >
      <Image
        src={logo}
        alt="logo"
        width={400}
        height={100}
        className="animate-pulse max-w-[90%] h-auto"
      />
    </main>
  );
};

export default SkeletonComponent;
