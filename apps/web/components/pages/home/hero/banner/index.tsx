const Banner = ({ locale }: { locale: string }) => {
  return (
    <div className=" mt-16 text-white ">
      {locale === "en" ? (
        <div>
          <div className="flex flex-col gap-2 text-5xl">
            <h1>Discover</h1>
            <p className="text-4xl text-sgray-10">the best</p>
            <h1>Hamams</h1>
          </div>

          <p className="text-sgray-10 text-2xl mt-8">
            Like a <span className="text-white">Local</span>
          </p>
        </div>
      ) : (
        <div className=" flex flex-col gap-4">
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
  );
};

export default Banner;
