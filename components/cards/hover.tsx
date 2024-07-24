"use client";

import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { useState, useEffect } from "react";

import { FaBath } from "react-icons/fa";
import { FaShower } from "react-icons/fa6";
import { FaHotTub } from "react-icons/fa";
import { FaCloudRain } from "react-icons/fa";
import { FaHotjar } from "react-icons/fa6";
import { FaSwimmingPool } from "react-icons/fa";
import { MdOutlineSevereCold } from "react-icons/md";
import { IoIosWarning } from "react-icons/io";

const HoverComponent = ({ amenity }: any) => {
  const [item, setItem] = useState({
    Icon: <FaBath />,
    title: "",
  });

  useEffect(() => {
    switch (amenity) {
      case "Turkish_Bath":
        setItem({
          Icon: <FaBath />,
          title: "Turkish Bath",
        });
        break;
      case "Shower":
        setItem({
          Icon: <FaShower />,
          title: "Shower",
        });
        break;
      case "Sauna":
        setItem({
          Icon: <FaHotjar />,
          title: "Sauna",
        });
        break;
      case "Steam_Room":
        setItem({
          Icon: <FaCloudRain />,
          title: "Steam Room",
        });
        break;
      case "Jacuzzi":
        setItem({
          Icon: <FaHotTub />,
          title: "Jacuzzi",
        });
        break;
      case "Pool":
        setItem({
          Icon: <FaSwimmingPool />,
          title: "Pool",
        });
        break;
      case "Shock_Pool":
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
      <HoverCardTrigger className="text-slate-500">
        {item.Icon}
      </HoverCardTrigger>
      <HoverCardContent>{item.title}</HoverCardContent>
    </HoverCard>
  );
};

export default HoverComponent;
