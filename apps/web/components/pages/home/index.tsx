import BannerSection from "./banner";
import HeroSection from "./hero";
import CardSection from "./card";
import StickyHeader from "./sticky-header";

const HomePage = ({ locale }: { locale: string }) => {
  return (
    <div className="flex flex-col  min-h-svh ">
      <HeroSection locale={locale} />
      <StickyHeader />
      <BannerSection>
        <CardSection />
      </BannerSection>
    </div>
  );
};

export default HomePage;
