import { FaShower } from "react-icons/fa6";
import { FaHotTub } from "react-icons/fa";
import { FaCloudRain } from "react-icons/fa";
import { FaHotjar } from "react-icons/fa6";
import { FaSwimmingPool } from "react-icons/fa";
import { MdOutlineSevereCold } from "react-icons/md";
import { IoIosWarning } from "react-icons/io";
import { TbMassage } from "react-icons/tb";
import { PiThermometerColdFill } from "react-icons/pi";
import { IoBodyOutline } from "react-icons/io5";
import { IoTicketOutline } from "react-icons/io5";
import { FaToiletPaper } from "react-icons/fa";
import { PiTowelFill } from "react-icons/pi";
import { FaSoap } from "react-icons/fa";
import { IoBody } from "react-icons/io5";
import { FaLock } from "react-icons/fa";

const convertAgeRange = (n: number) => {
  switch (n) {
    case 0:
      return "0-17";
    case 1:
      return "18-24";
    case 2:
      return "25-30";
    case 3:
      return "31-40";
    case 4:
      return "41+";
    default:
      return "Invalid age range";
  }
};

const convertAmenityIcon = (id: number) => {
  switch (id.toString()) {
    case "0":
      return <FaToiletPaper />;
    case "1":
      return <PiTowelFill />;
    case "2":
      return <FaSoap />;
    case "3":
      return <IoBody />;
    case "4":
      return <FaLock />;
    case "5":
      return <FaShower />;
    case "6":
      return <FaHotjar />;
    case "7":
      return <FaCloudRain />;
    case "8":
      return <FaHotTub />;
    case "9":
      return <FaSwimmingPool />;
    case "10":
      return <TbMassage />;
    case "11":
      return <MdOutlineSevereCold />;
    case "12":
      return <PiThermometerColdFill />;
    default:
      return <IoIosWarning />;
  }
};

const convertProductIcon = (type: number) => {
  const classN = "text-3xl";

  switch (type.toString()) {
    case "0":
      return <IoTicketOutline className={classN} />;
    case "1":
      return <IoBodyOutline className={classN} />;
  }
};

export { convertAgeRange, convertAmenityIcon, convertProductIcon };
