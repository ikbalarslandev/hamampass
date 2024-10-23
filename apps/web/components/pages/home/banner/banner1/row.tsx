interface RowProps {
  color: "primary-10" | "secondary-700";
  icon: React.ReactNode;
  title: string;
  desc: string;
}

const Row = ({ color, icon, title, desc }: RowProps) => {
  const bgColor = color === "primary-10" ? "bg-primary-10" : "bg-secondary-700";
  const textColor =
    color === "primary-10" ? "text-primary-10" : "text-secondary-700";

  return (
    <div className="flex items-center gap-10">
      <div
        className={`w-16 h-16 border text-white flex items-center justify-center rounded-xl ${bgColor}`}
      >
        {icon}
      </div>

      <div className="flex-1">
        <h2 className={`text-xl font-semibold ${textColor}`}>{title}</h2>
        <p>{desc}</p>
      </div>
    </div>
  );
};

export default Row;
