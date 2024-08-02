"use client";

import { useState, useEffect } from "react";
import { Checkbox } from "@/components/ui/checkbox";
import { useSearchParams } from "next/navigation";

const CheckboxComponent = ({ id, name }: any) => {
  const [isChecked, setIsChecked] = useState(false);
  const searchParams = useSearchParams();

  const handleCheckboxChange = () => {
    const newCheckedState = !isChecked;
    setIsChecked(newCheckedState);

    // Update URL parameters
    const urlParams = new URLSearchParams(window.location.search);
    let vibeArray: number[] = urlParams.has("vibe")
      ? JSON.parse(urlParams.get("vibe") || "[]")
      : [];

    if (newCheckedState) {
      // Add value to the array
      vibeArray.push(id);
    } else {
      // Remove value from the array
      vibeArray = vibeArray.filter((vibe: number) => vibe !== id);
    }

    if (vibeArray.length > 0) {
      urlParams.set("vibe", JSON.stringify(vibeArray));
    } else {
      urlParams.delete("vibe");
    }

    window.history.replaceState(null, "", `?${urlParams.toString()}`);
    console.log("URL Params:", urlParams.get("vibe"));
  };

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const vibeParam = urlParams.get("vibe");
    const vibeArray: number[] = vibeParam ? JSON.parse(vibeParam) : [];
    setIsChecked(vibeArray.includes(id));
  }, [searchParams]);

  return (
    <label className="flex items-center gap-2">
      <Checkbox checked={isChecked} onClick={handleCheckboxChange} />
      <span>{name}</span>
    </label>
  );
};

export default CheckboxComponent;
