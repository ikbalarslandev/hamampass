import HeroSection from "./hero";

const HomePage = ({ locale }: { locale: string }) => {
  return (
    <div className="flex flex-col  min-h-svh ">
      <HeroSection locale={locale} />
    </div>
  );
};

export default HomePage;
