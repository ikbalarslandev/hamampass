import { useTranslations } from "next-intl";

interface SwitchComponentProps {
  selectedTab: "details" | "reviews";
  setSelectedTab: (tab: "details" | "reviews") => void;
}

const SwitchComponent = ({
  selectedTab,
  setSelectedTab,
}: SwitchComponentProps) => {
  const switch_type = useTranslations("single.switch");
  return (
    <div className="relative w-full flex text-center mt-5">
      <div className="flex-1" onClick={() => setSelectedTab("details")}>
        {switch_type("details")}
      </div>
      <div className="flex-1" onClick={() => setSelectedTab("reviews")}>
        {switch_type("reviews")}
      </div>

      <div
        className="absolute -bottom-2 left-0 h-1 bg-cyan-500 transition-transform "
        style={{
          width: "50%",
          transform: `translateX(${selectedTab === "details" ? "0%" : "100%"})`,
        }}
      />
    </div>
  );
};

export default SwitchComponent;
