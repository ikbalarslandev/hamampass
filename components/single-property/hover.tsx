"use client";

import { HoverCard, HoverCardTrigger } from "@/components/ui/hover-card";
import { useState, useEffect } from "react";
import { useTranslations } from "next-intl";

import { FaShower } from "react-icons/fa6";
import { FaHotTub } from "react-icons/fa";
import { FaCloudRain } from "react-icons/fa";
import { FaHotjar } from "react-icons/fa6";
import { FaSwimmingPool } from "react-icons/fa";
import { MdOutlineSevereCold } from "react-icons/md";
import { IoIosWarning } from "react-icons/io";
import { PiThermometerColdFill } from "react-icons/pi";
import { TbMassage } from "react-icons/tb";

const HoverComponent = ({ amenity }: { amenity: number }) => {
  const t = useTranslations("amenities");

  const [item, setItem] = useState({
    Icon: <IoIosWarning />,
  });

  useEffect(() => {
    switch (amenity) {
      case 0:
        setItem({
          Icon: <FaShower />,
        });
        break;
      case 1:
        setItem({
          Icon: <FaHotjar />,
        });
        break;
      case 2:
        setItem({
          Icon: <FaCloudRain />,
        });
        break;
      case 3:
        setItem({
          Icon: <FaHotTub />,
        });
        break;
      case 4:
        setItem({
          Icon: <FaSwimmingPool />,
        });
        break;
      case 5:
        setItem({
          Icon: <TbMassage />,
        });
        break;
      case 6:
        setItem({
          Icon: <MdOutlineSevereCold />,
        });
        break;
      case 7:
        setItem({
          Icon: <PiThermometerColdFill />,
        });
        break;
      default:
        setItem({
          Icon: <IoIosWarning />,
        });
        break;
    }
  }, [amenity]);

  return (
    <HoverCard>
      <HoverCardTrigger className="text-slate-500 flex gap-4">
        <p className="text-2xl">{item.Icon}</p>
        <p>{t(amenity.toString())}</p>
      </HoverCardTrigger>
    </HoverCard>
  );
};

export default HoverComponent;
