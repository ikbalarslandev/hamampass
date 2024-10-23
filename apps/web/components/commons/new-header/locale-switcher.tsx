"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@hamampass/ui/primitives/select.tsx";
import { useRouter } from "next/navigation";
import { useParams } from "next/navigation";

const LocaleSwitcher = () => {
  const router = useRouter();
  const { locale } = useParams();
  const { title } = useParams();

  const handleOnLocaleChange = (locale: string) => {
    title ? router.push(`/${locale}/${title}`) : router.push(`/${locale}`);
  };

  return (
    <Select
      onValueChange={handleOnLocaleChange}
      defaultValue={locale as string}
    >
      <SelectTrigger
        className=" text-lg   bg-gray-800"
        aria-label="selected language"
      >
        <SelectValue placeholder="Language" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem className="" value="en">
          English
        </SelectItem>
        <SelectItem className="" value="tr">
          Türkçe
        </SelectItem>
      </SelectContent>
    </Select>
  );
};

export default LocaleSwitcher;
