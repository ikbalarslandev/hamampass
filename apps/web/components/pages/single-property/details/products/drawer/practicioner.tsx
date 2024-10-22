import { useEffect } from "react";
import { TPracticioner } from "@hamampass/db/types";

const Practicioner = ({
  data,
  count,
  selectedPracticioner,
  setSelectedPracticioner,
}: {
  data: TPracticioner[];
  count: number;
  selectedPracticioner: string | null;
  setSelectedPracticioner: (id: string | null) => void;
}) => {
  const isPracticioner = data.length > 0;

  // Effect to reset selected practitioner when count becomes 0
  useEffect(() => {
    if (count === 0) {
      setSelectedPracticioner(null);
    }
  }, [count]);

  const handleSelect = (id: string) => {
    if (count === 0) return; // Disable selection if count is 0

    // If the clicked practitioner is already selected, deactivate it
    if (selectedPracticioner === id) {
      setSelectedPracticioner(null);
    } else {
      setSelectedPracticioner(id);
    }
  };

  return (
    <div>
      {isPracticioner && (
        <div className="border p-2 rounded mt-1 flex flex-col gap-2">
          <h2 className="my-1">Choose the body scrub practitioner</h2>
          {data.map((item) => (
            <div
              key={item.id}
              className={`flex items-center gap-1 text-black text-md rounded border p-1 cursor-pointer ${
                selectedPracticioner === item.id
                  ? "bg-green-500"
                  : "bg-gray-300"
              } ${count === 0 ? "cursor-not-allowed opacity-50" : ""}`} // Style to indicate unavailability
              onClick={() => handleSelect(item.id)}
            >
              <span>{item.name}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Practicioner;
