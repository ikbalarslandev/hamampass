import JsxParser from "react-jsx-parser";
import { MdKeyboardArrowRight } from "react-icons/md";
import AboutDrawerComponent from "./drawer";

const AboutComponent = ({ desc }: any) => {
  const description = <JsxParser components={{}} jsx={desc} />;

  return (
    <div>
      <h2 className="font-bold text-xl text-gray-600 mt-5 mb-3">About </h2>

      <div className="max-h-40 overflow-hidden">{description}</div>

      <AboutDrawerComponent
        trigger={
          <p className="flex items-center justify-end underline">
            <span>Read more</span>
            <MdKeyboardArrowRight size={20} />
          </p>
        }
        description={description}
      />
    </div>
  );
};

export default AboutComponent;
