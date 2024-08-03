"use client";

import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { useState, useEffect } from "react";
import { useTranslations } from "next-intl";

import { FaBath } from "react-icons/fa";
import { FaShower } from "react-icons/fa6";
import { FaHotTub } from "react-icons/fa";
import { FaCloudRain } from "react-icons/fa";
import { FaHotjar } from "react-icons/fa6";
import { FaSwimmingPool } from "react-icons/fa";
import { MdOutlineSevereCold } from "react-icons/md";
import { IoIosWarning } from "react-icons/io";

const HoverComponent = ({ amenity }: any) => {
  const t = useTranslations("amenities");

  const [item, setItem] = useState({
    Icon: <FaBath />,
    title: "",
  });

  useEffect(() => {
    switch (amenity) {
      case 0:
        setItem({
          Icon: <FaBath />,
          title: "Turkish Bath",
        });
        break;
      case 1:
        setItem({
          Icon: <FaShower />,
          title: "Shower",
        });
        break;
      case 2:
        setItem({
          Icon: <FaHotjar />,
          title: "Sauna",
        });
        break;
      case 3:
        setItem({
          Icon: <FaCloudRain />,
          title: "Steam Room",
        });
        break;
      case 4:
        setItem({
          Icon: <FaHotTub />,
          title: "Jacuzzi",
        });
        break;
      case 5:
        setItem({
          Icon: <FaSwimmingPool />,
          title: "Pool",
        });
        break;
      case 6:
        setItem({
          Icon: <MdOutlineSevereCold />,
          title: "Shock Pool",
        });
        break;

      default:
        setItem({
          Icon: <IoIosWarning />,
          title: "",
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
      <HoverCardContent>{t(amenity)}</HoverCardContent>
    </HoverCard>
  );
};

export default HoverComponent;
