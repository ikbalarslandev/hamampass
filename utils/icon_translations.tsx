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

const convertAFacilityIcon = (id: number) => {
  switch (id.toString()) {
    case "0":
      return <FaToiletPaper className={classN} />;
    case "1":
      return <FaBed className={classN} />;
    case "2":
      return <FaLock className={classN} />;
    case "3":
      return <FaShower className={classN} />;
    case "4":
      return <FaHotjar className={classN} />;
    case "5":
      return <FaCloudRain className={classN} />;
    case "6":
      return <FaHotTub className={classN} />;
    case "7":
      return <FaSwimmingPool className={classN} />;
    case "8":
      return <TbMassage className={classN} />;
    case "9":
      return <MdOutlineSevereCold className={classN} />;
    case "10":
      return <PiThermometerColdFill className={classN} />;
    default:
      return <IoIosWarning className={classN} />;
  }
};

const convertAItemIcon = (id: number) => {
  switch (id.toString()) {
    case "0":
      return <PiTowelFill className={classN} />;
    case "1":
      return <FaSoap className={classN} />;
    default:
      return <IoIosWarning className={classN} />;
  }
};
const convertAFood_DrinkIcon = (id: number) => {
  switch (id.toString()) {
    case "0":
      return <PiTeaBagFill className={classN} />;
    case "1":
      return <BiSolidCoffeeBean className={classN} />;

    default:
      return <IoIosWarning className={classN} />;
  }
};

const convertProductIcon = (type: number) => {
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
