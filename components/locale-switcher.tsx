"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
import { useParams } from "next/navigation";

const LocaleSwitcher = () => {
  const router = useRouter();
  const { locale } = useParams();

  const handleOnLocaleChange = (locale: string) => {
    router.push(`/${locale}`);
  };

  return (
    <Select
      onValueChange={handleOnLocaleChange}
      defaultValue={locale as string}
    >
      <SelectTrigger className=" text-2xl bg-cyan-600">
        <SelectValue placeholder="Language" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem className="text-2xl" value="en">
          🇺🇸
        </SelectItem>
        <SelectItem className="text-2xl" value="tr">
          🇹🇷
        </SelectItem>
      </SelectContent>
    </Select>
  );
};

export default LocaleSwitcher;
