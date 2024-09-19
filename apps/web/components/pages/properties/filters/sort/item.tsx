import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

const Item = ({
  label,
  checked,
  onClick,
}: {
  label: string;
  checked: boolean;
  onClick: () => void;
}) => {
  return (
    <Label className="flex justify-between">
      <p>{label}</p>
      <Checkbox checked={checked} onClick={onClick} className="w-6 h-6" />
    </Label>
  );
};

export default Item;
