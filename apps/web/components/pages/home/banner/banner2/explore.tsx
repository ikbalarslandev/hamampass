import { MdArrowForwardIos } from "react-icons/md";
import Link from "next/link";

const ExploreBanner = () => {
  return (
    <div className="relative mt-16 ">
      <Link
        href="#"
        className="absolute -top-8 right-0 rounded-none rounded-l-md py-5 bg-secondary-10 text-xl flex items-center px-5 text-white"
      >
        <p className="underline"> What is Hamam</p>
        <MdArrowForwardIos className="text-2xl ml-6 " />
      </Link>
      <div className="bg-primary-800 text-white text-5xl font-semibold py-14 px-5">
        Explore{" "}
        <span className="text-secondary-500">
          The <br /> best
        </span>{" "}
        Hamams
      </div>
    </div>
  );
};

export default ExploreBanner;
