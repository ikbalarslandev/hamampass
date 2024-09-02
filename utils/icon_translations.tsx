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

const convertAFacilityIcon = (id: number) => {
  switch (id.toString()) {
    case "0":
      return <FaToiletPaper />;
    case "1":
      return <FaBed />;
    case "2":
      return <FaLock />;
    case "3":
      return <FaShower />;
    case "4":
      return <FaHotjar />;
    case "5":
      return <FaCloudRain />;
    case "6":
      return <FaHotTub />;
    case "7":
      return <FaSwimmingPool />;
    case "8":
      return <TbMassage />;
    case "9":
      return <MdOutlineSevereCold />;
    case "10":
      return <PiThermometerColdFill />;
    default:
      return <IoIosWarning />;
  }
};

const convertAItemIcon = (id: number) => {
  switch (id.toString()) {
    case "0":
      return <PiTowelFill />;
    case "1":
      return <FaSoap />;
    default:
      return <IoIosWarning />;
  }
};
const convertAFood_DrinkIcon = (id: number) => {
  switch (id.toString()) {
    case "0":
      return <PiTeaBagFill />;
    case "1":
      return <BiSolidCoffeeBean />;

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

export {
  convertProductIcon,
  convertAFacilityIcon,
  convertAItemIcon,
  convertAFood_DrinkIcon,
};
