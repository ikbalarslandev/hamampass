import { DatePickerForm } from "@/components/pages/home/date-picker";

const HomePage = () => {
  return (
    <div className="flex-1 flex flex-col items-center justify-end mb-8 gap-8 mx-5">
      <div className=" w-full  ">
        <div className="  text-white flex flex-col gap-4">
          {" "}
          <div className="flex flex-col text-5xl font-semibold gap-2 ">
            <h1>Take a</h1>
            <h1>hamampass</h1>
          </div>
          <p>
            Experience İstanbul’s best hamams
            <br /> no credit card required.
          </p>
        </div>
      </div>
      <DatePickerForm />
    </div>
  );
};

export default HomePage;
