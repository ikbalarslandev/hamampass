"use client";

import React, { useState, useEffect, ChangeEvent, MouseEvent } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useSearchParams } from "next/navigation";
import { IoSearchSharp } from "react-icons/io5";
import { Button } from "../ui/button";
import { VscSettings } from "react-icons/vsc";

const districtData = ["Kadıköy", "Beşiktaş", "Üsküdar"];

// Helper function to normalize text for accent-insensitive comparison
const normalizeText = (text: string): string => {
  return text.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
};

const DistrictComponent: React.FC = () => {
  const [inputValue, setInputValue] = useState<string>("");
  const [filteredDistricts, setFilteredDistricts] = useState<string[]>([]);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const searchParams = useSearchParams();

  // Update the input value from URL params on initial render
  useEffect(() => {
    const district = searchParams.get("district");
    if (district) {
      setInputValue(district);
    }
  }, [searchParams]);

  // Filter districtData based on inputValue
  useEffect(() => {
    if (inputValue) {
      const normalizedInput = normalizeText(inputValue).toLowerCase();
      const filtered = districtData.filter((district) =>
        normalizeText(district).toLowerCase().includes(normalizedInput)
      );
      setFilteredDistricts(filtered);
    } else {
      setFilteredDistricts([]);
      setIsOpen(false);
    }
  }, [inputValue]);

  // Update URL params based on inputValue
  useEffect(() => {
    const isExactMatch = districtData.includes(inputValue); // Check for exact match
    const newParams = new URLSearchParams(searchParams.toString());

    if (isExactMatch) {
      newParams.set("district", inputValue);
    } else {
      newParams.delete("district");
    }

    window.history.replaceState(
      null,
      "",
      `${window.location.pathname}?${newParams.toString()}`
    );
  }, [inputValue, searchParams]);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setInputValue(e.target.value);
    // Keep the recommendation list open only if the input value is non-empty
    if (e.target.value) {
      setIsOpen(true);
    }
  };

  const handleInputClick = (e: MouseEvent<HTMLInputElement>): void => {
    // Open the list only if it hasn't been opened yet
    if (filteredDistricts.length > 0 && !isOpen) {
      setIsOpen(true);
    }
  };

  const handleItemClick = (value: string): void => {
    setInputValue(value);
    setIsOpen(false);
  };

  return (
    <div className="flex items-center border rounded-lg mx-4 my-2 shadow-md  gap-1 relative">
      <IoSearchSharp size={22} className="mb-[.1rem] ml-2" />
      <Input
        type="text"
        id="district"
        placeholder="İlçe Seçiniz"
        value={inputValue}
        onChange={handleInputChange}
        onClick={handleInputClick}
        className="flex-1"
      />
      <Button variant="filter" onClick={() => console.log("hhhh")}>
        <VscSettings size={20} />
      </Button>
      {isOpen && filteredDistricts.length > 0 && (
        <ul className="absolute top-full   z-10 w-full border border-gray-300 bg-white shadow-lg">
          {filteredDistricts.map((district, index) => (
            <li
              key={index}
              className="cursor-pointer px-4 py-2 hover:bg-gray-200"
              onClick={() => handleItemClick(district)}
            >
              {district}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default DistrictComponent;
