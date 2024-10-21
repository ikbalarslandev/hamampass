import { TContact } from "@hamampass/db/types";
import { useTranslations } from "@hamampass/i18n";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { BsCopy } from "react-icons/bs";
import { MdKeyboardArrowRight } from "react-icons/md";
import { useToast } from "@hamampass/ui/primitives/hooks/use-toast.ts";
import DrawerGeneral from "@/components/commons/drawer";
import GoogleMapComponent from "@/components/pages/single-property/details/location/map";

const LocationComponent = ({ contact }: { contact: TContact }) => {
  const s = useTranslations("single");
  const title = useTranslations("titles");
  const { toast } = useToast();

  const handleCopy = () => {
    navigator.clipboard.writeText(contact.address);
    toast({
      title: s("copy"),
      className: "bg-green-500 text-white py-2",
      duration: 300,
    });
  };

  return (
    <section className="flex flex-col gap-2 mb-10 ">
      <hr />
      <h2 className="font-bold text-xl text-gray-600">
        {title("location-title")}
      </h2>

      <div className="text-gray-600 flex items-center gap-3">
        <FaLocationDot className="text-gray-500" size={15} />
        <span className="text-sm">
          {contact.address.length > 20
            ? contact.address.slice(0, 20) + " ..."
            : contact.address}
        </span>
        <button onClick={handleCopy} className="ml-5">
          <BsCopy size={17} />
        </button>
      </div>

      <div className="bg-map bg-cover opacity-80 border border-black  h-20  rounded-2xl flex items-center justify-center mt-2">
        <DrawerGeneral
          trigger={
            <div className="flex items-center justify-center">
              <p className="bg-opacity-0 border border-gray-500 px-8 py-2  rounded-lg flex items-center gap-1">
                {s("map")} <MdKeyboardArrowRight size={24} />
              </p>
            </div>
          }
          content={
            <div className="h-full">
              <GoogleMapComponent contact={contact?.location} />
            </div>
          }
          handleOnly={true}
          fullWidth={true}
          title={title("location-title")}
        />
      </div>
    </section>
  );
};

export default LocationComponent;
