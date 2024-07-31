"use client";

import { useSearchParams } from "next/navigation";
import { useState } from "react";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const SelectComponent = () => {
  const searchParams = useSearchParams();
  const [selectedValue, setSelectedValue] = useState(
    searchParams.get("sort") || ""
  );

  const handleSelectChange = (value: string) => {
    setSelectedValue(value);
    const newParams = new URLSearchParams(searchParams.toString());
    newParams.set("sort", value);

    // Update the URL with the new query parameter
    window.history.replaceState(
      null,
      "",
      `${window.location.pathname}?${newParams.toString()}`
    );
  };

  return (
    <Select value={selectedValue} onValueChange={handleSelectChange}>
      <SelectTrigger className="bg-blue-600">
        <SelectValue placeholder="Sort the prices" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="to-cheap">expensive to cheap</SelectItem>
        <SelectItem value="to-expensive">cheap to expensive</SelectItem>
      </SelectContent>
    </Select>
  );
};

export default SelectComponent;
