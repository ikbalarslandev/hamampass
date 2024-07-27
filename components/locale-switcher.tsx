import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";

const LocaleSwitcher = () => {
  const router = useRouter();
  const pathname = usePathname();
  const defaultLocale = pathname.split("/")[1] || "en";

  const handleOnLocaleChange = (locale: string) => {
    router.push(`/${locale}`);
  };

  return (
    <Select onValueChange={handleOnLocaleChange} defaultValue={defaultLocale}>
      <SelectTrigger className="w-[180px] bg-cyan-600">
        <SelectValue placeholder="Language" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="en">English</SelectItem>
        <SelectItem value="tr">Turkish</SelectItem>
      </SelectContent>
    </Select>
  );
};

export default LocaleSwitcher;
