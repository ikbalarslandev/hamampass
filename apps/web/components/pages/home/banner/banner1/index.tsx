import Row from "./row";
import { FaSpa } from "react-icons/fa";
import { IoPricetags } from "react-icons/io5";
import { FaCalendarAlt } from "react-icons/fa";

const Banner1 = () => {
  return (
    <div className="flex flex-col gap-10 mx-4 my-10 ">
      <Row
        color="primary-10"
        title="Authentic hamams"
        desc="Discover Turkish Hamams A Traditional Spa Experience"
        icon={<FaSpa className="text-4xl" />}
      />
      <Row
        color="secondary-700"
        title="Honest Prices"
        desc="Get the best hamam experiences at a fair price"
        icon={<IoPricetags className="text-4xl" />}
      />
      <Row
        color="primary-10"
        title="Simple Reservation"
        desc="Tap. Reserve. Recharge."
        icon={<FaCalendarAlt className="text-4xl" />}
      />
    </div>
  );
};

export default Banner1;
