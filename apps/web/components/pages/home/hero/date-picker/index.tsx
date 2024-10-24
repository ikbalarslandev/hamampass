import { DateForm } from "./form";

export function DatePicker() {
  return (
    <div id="dateForm" className="flex flex-col  w-full mt-auto mb-6">
      <DateForm />
      <p className="text-xs mt-2 text-white">No Payment Required to Reserve.</p>
    </div>
  );
}
