import Banner1 from "./banner1";
import Banner2 from "./banner2";

interface BannerSectionProps {
  children?: React.ReactNode;
}

const BannerSection = ({ children }: BannerSectionProps) => {
  return (
    <div className="flex flex-col">
      <Banner1 />
      <Banner2>{children}</Banner2>
    </div>
  );
};

export default BannerSection;
