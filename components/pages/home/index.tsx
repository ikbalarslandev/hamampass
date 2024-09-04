import { DatePickerForm } from "@/components/pages/home/date-picker";

const HomePage = ({ locale }: { locale: string }) => {
  console.log(locale);
  return (
    <div className="flex-1 flex flex-col items-center justify-end mb-8 gap-8 mx-5">
      <div className=" w-full  ">
        {locale === "en" ? (
          <div className="  text-white flex flex-col gap-4">
            <div className="flex flex-col text-5xl font-semibold gap-2 ">
              <h1>Take a</h1>
              <h1>hamampass</h1>
            </div>
            <p>
              Experience İstanbul&apos;s best hamams
              <br /> no credit card required.
            </p>
          </div>
        ) : (
          <div className="text-white flex flex-col gap-4">
            <div className="flex flex-col text-5xl font-semibold gap-2">
              <h1>hamampass</h1>
            </div>
            <p>
              kredi kartı gerekmeden
              <br /> İstanbul&apos;un en iyi hamamlarını deneyimleyin
            </p>
          </div>
        )}
      </div>
      <DatePickerForm />
    </div>
  );
};

export default HomePage;
