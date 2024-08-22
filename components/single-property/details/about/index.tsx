import JsxParser from "react-jsx-parser";
import { MdKeyboardArrowRight } from "react-icons/md";

const AboutComponent = ({ desc }: any) => {
  return (
    <div>
      <h2 className="font-bold text-xl text-gray-600 mt-5 mb-3">About </h2>
      {/* if overflow happens console log it overlfows */}

      <div className="max-h-40 overflow-hidden">
        <JsxParser components={{}} jsx={desc} />
      </div>
      <p className="flex items-center justify-end underline">
        <span>Read more</span>
        <MdKeyboardArrowRight size={20} />
      </p>
    </div>
  );
};

export default AboutComponent;
