import Header from "@/components/commons/new-header";
import { DateForm } from "../hero/date-picker/form";

const StickyHeader = () => {
  return (
    <div className="bg-white sticky top-0 z-10 pl-2 pb-2">
      <Header variant="sticky" />
      <DateForm isSticky={true} />
    </div>
  );
};

export default StickyHeader;
