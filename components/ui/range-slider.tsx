"use client";

import * as Slider from "@radix-ui/react-slider";
import { useState, useEffect } from "react";

const RangeSlider = ({ min, max, onRangeChange }: any) => {
  const [value, setValue] = useState([min, max]);

  useEffect(() => {
    setValue([min, max]);
  }, [min, max]);

  const handleValueChange = (newValue: any) => {
    setValue(newValue);
    onRangeChange(newValue);
  };

  return (
    <Slider.Root
      className="relative flex w-full touch-none select-none items-center"
      defaultValue={[min, max]}
      max={2100}
      min={100}
      step={1}
      minStepsBetweenThumbs={1}
      value={value}
      onValueChange={handleValueChange}
    >
      <Slider.Track className="relative h-[1px] w-full grow overflow-hidden  rounded-full bg-secondary">
        <Slider.Range className="absolute h-full bg-cyan-500" />
      </Slider.Track>
      <Slider.Thumb className="block h-5 w-5 rounded-full border-2 border-gray-400 bg-background ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50" />
      <Slider.Thumb className="block h-5 w-5 rounded-full border-2 border-gray-400 bg-background ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50" />
    </Slider.Root>
  );
};

export default RangeSlider;
