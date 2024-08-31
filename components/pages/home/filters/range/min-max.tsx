const MinMax = ({ range }: { range: number[] }) => {
  const [min, max] = range;

  return (
    <div className="flex items-center justify-between mt-10 mb-4 mx-10">
      <div className="border border-gray-500 pl-2 pr-10 py-2 rounded-lg">
        <h3 className="text-sm text-gray-500">Minimum</h3>
        <p className="text-sm font-medium">₺ {min}</p>
      </div>

      <p className="text-gray-500">-</p>

      <div className="border border-gray-500 pl-2 pr-10 py-2 rounded-lg">
        <h3 className="text-sm text-gray-500">Maximum</h3>
        <p className="text-sm font-medium">₺ {max}</p>
      </div>
    </div>
  );
};

export default MinMax;
