import { Checkbox } from "@hamampass/ui/primitives/checkbox.tsx";
import { Label } from "@hamampass/ui/primitives/label.tsx";

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
