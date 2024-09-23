import AcordionTemplate from "./template";
import data from "./data";

const HelpPage = () => {
  return (
    <div className="flex items-center flex-col  px-4">
      <h1 className="text-xl font-semibold my-14">FAQ</h1>

      {data.map((item, index) => (
        <AcordionTemplate key={index} title={item.title} desc={item.desc} />
      ))}
    </div>
  );
};

export default HelpPage;
