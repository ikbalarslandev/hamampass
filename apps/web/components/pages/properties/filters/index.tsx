"use client";
import React, { useState, useEffect, ChangeEvent } from "react";
import { useTranslations } from "@hamampass/i18n";
import { useSearchParams } from "next/navigation";

import { IoSearchSharp } from "react-icons/io5";
import { normalizeText } from "@/utils/normalize";

import DrawerComponent from "@/components/pages/properties/filters/drawer";
import { Input } from "@hamampass/ui/primitives/input.tsx";

const districtData = ["Kadıköy"];

const FilterComponent: React.FC = () => {
  const [inputValue, setInputValue] = useState<string>("");
  const [filteredDistricts, setFilteredDistricts] = useState<string[]>([]);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const searchParams = useSearchParams();
  const input = useTranslations("home.filters");

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
      setFilteredDistricts(districtData);
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

  const handleInputClick = (): void => {
    if (filteredDistricts.length > 0 && !isOpen) {
      setIsOpen(true);
    }
  };

  const handleItemClick = (value: string): void => {
    setInputValue(value);
    setIsOpen(false);
  };

  return (
    <div className="flex items-center border rounded-lg mx-8 my-2 shadow-md  gap-1 relative">
      <IoSearchSharp size={22} className="mb-[.1rem] ml-2" />
      <Input
        type="text"
        id="district"
        placeholder={input("placeholder")}
        value={inputValue}
        onChange={handleInputChange}
        onClick={handleInputClick}
        className="flex-1"
        autoComplete="off"
      />
      <DrawerComponent
        trigger={
          <p className="mx-2 underline text-slate-600">{input("filter")}</p>
        }
      />

      {searchParams.size !== 0 && (
        <div className="py-0.5 px-[.28rem] text-cente min-w-3 text-xs/3 bg-cyan-500 rounded-full text-white absolute -right-1 -top-1">
          {searchParams.size}
        </div>
      )}
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

export default FilterComponent;
