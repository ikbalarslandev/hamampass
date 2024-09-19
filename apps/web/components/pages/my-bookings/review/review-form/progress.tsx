import { Slider } from "@/components/ui/slider";
import { Controller } from "react-hook-form";

interface ProgressComponentProps {
  title: string;
  name: string;
  control: any;
  defaultValue: number;
}

const ProgressComponent = ({
  title,
  name,
  control,
  defaultValue,
}: ProgressComponentProps) => {
  return (
    <div className="flex items-center">
      <h1 className="text-gray-700 flex-1">{title}</h1>
      <div className="flex items-center gap-2 flex-1">
        <Controller
          name={name}
          control={control}
          defaultValue={defaultValue}
          render={({ field: { value, onChange } }) => (
            <>
              <Slider
                value={[value]}
                max={5}
                min={1}
                step={1}
                onValueChange={(newValue) => onChange(newValue[0])}
              />
              <p className="font-semibold">{value}</p>
            </>
          )}
        />
      </div>
    </div>
  );
};

export default ProgressComponent;
