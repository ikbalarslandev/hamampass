import { DatePicker } from "@/components/pages/home/hero/date-picker";
import Banner from "./banner";
import HeroHeader from "./header";

const HeroSection = ({ locale }: { locale: string }) => {
  return (
    <div className="mx-5  flex-1 flex flex-col">
      <HeroHeader />

      <Banner locale={locale} />
      <DatePicker />
    </div>
  );
};

export default HeroSection;
