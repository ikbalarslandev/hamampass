import { DatePickerForm } from "@/components/pages/home/date-picker";

const HomePage = () => {
  return (
    <div className="flex-1 flex flex-col items-center justify-end pb-[calc(2rem + env(safe-area-inset-bottom)) ] gap-5">
      <DatePickerForm />
    </div>
  );
};

export default HomePage;
