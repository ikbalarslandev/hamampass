import {
  FaToiletPaper,
  FaSoap,
  FaLock,
  FaShower,
  FaHotjar,
  FaCloudRain,
  FaHotTub,
  FaSwimmingPool,
  FaBed,
} from "react-icons/fa";
import {
  PiTowelFill,
  PiThermometerColdFill,
  PiTeaBagFill,
} from "react-icons/pi";
import { IoIosWarning } from "react-icons/io";
import { TbMassage } from "react-icons/tb";
import { MdOutlineSevereCold } from "react-icons/md";
import { IoTicketOutline, IoBodyOutline } from "react-icons/io5";
import { BiSolidCoffeeBean } from "react-icons/bi";

const classN = "text-3xl";

const convertAFacilityIcon = (id: number, className = classN) => {
  switch (id.toString()) {
    case "0":
      return <FaToiletPaper className={className} />;
    case "1":
      return <FaBed className={className} />;
    case "2":
      return <FaLock className={className} />;
    case "3":
      return <FaShower className={className} />;
    case "4":
      return <FaHotjar className={className} />;
    case "5":
      return <FaCloudRain className={className} />;
    case "6":
      return <FaHotTub className={className} />;
    case "7":
      return <FaSwimmingPool className={className} />;
    case "8":
      return <TbMassage className={className} />;
    case "9":
      return <MdOutlineSevereCold className={className} />;
    case "10":
      return <PiThermometerColdFill className={className} />;
    default:
      return <IoIosWarning className={className} />;
  }
};

const convertAItemIcon = (id: number, className = classN) => {
  switch (id.toString()) {
    case "0":
      return <PiTowelFill className={className} />;
    case "1":
      return <FaSoap className={className} />;
    default:
      return <IoIosWarning className={className} />;
  }
};
const convertAFood_DrinkIcon = (id: number, className = classN) => {
  switch (id.toString()) {
    case "0":
      return <PiTeaBagFill className={className} />;
    case "1":
      return <BiSolidCoffeeBean className={className} />;

    default:
      return <IoIosWarning className={className} />;
  }
};

const convertProductIcon = (type: number, className = classN) => {
  switch (type.toString()) {
    case "0":
      return <IoTicketOutline className={className} />;
    case "1":
      return <IoBodyOutline className={className} />;
  }
};

export {
  convertProductIcon,
  convertAFacilityIcon,
  convertAItemIcon,
  convertAFood_DrinkIcon,
};
