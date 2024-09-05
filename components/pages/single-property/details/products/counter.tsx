const CounterComponent = ({ count, setCount }: any) => {
  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count > 0 ? count - 1 : 0); // Prevents negative count

  return (
    <div className="flex items-center border  overflow-hidden  rounded-full shadow">
      <button
        className="py-1 px-3 ml-1 aspect-square border text-xl font-semibold border-r focus:outline-none rounded-full "
        onClick={decrement}
      >
        -
      </button>

      <input
        type="number"
        className="w-12 text-center px-2 py-2 text-lg  focus:outline-none"
        value={count}
        readOnly
      />
      <button
        className="py-1 px-3 mr-1 aspect-square bg-cyan-500 text-white text-lg font-semibold  focus:outline-none rounded-full"
        onClick={increment}
      >
        +
      </button>
    </div>
  );
};

export default CounterComponent;
