import { TContact } from "@/types";
import { useTranslations } from "next-intl";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { BsCopy } from "react-icons/bs";
import { MdKeyboardArrowRight } from "react-icons/md";
import MapDrawerComponent from "@/components/single-property/map";
import { useToast } from "@/components/ui/use-toast";

const LocationComponent = ({ contact }: { contact: TContact }) => {
  const s = useTranslations("single");
  const { toast } = useToast();

  const handleCopy = () => {
    navigator.clipboard.writeText(contact.address);
    toast({
      title: "Address copied to clipboard",
      className: "bg-green-500 text-white py-2",
      duration: 300,
    });
  };

  return (
    <div className="flex flex-col gap-3 ">
      <hr />
      <h2 className="font-bold text-xl text-gray-600">{s("location")}</h2>

      <p className="text-gray-600 flex items-center gap-3">
        <FaPhoneAlt className="text-gray-500" size={15} />
        <span>{contact.phone}</span>
      </p>

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
        <MapDrawerComponent
          trigger={
            <p className="bg-opacity-0 border border-gray-500 px-8 py-2 rounded-lg flex items-center gap-1">
              Map <MdKeyboardArrowRight size={24} />
            </p>
          }
          location={contact?.location}
        />
      </div>
    </div>
  );
};

export default LocationComponent;
