import { TContact } from "@/types";
import GoogleMapComponent from "./map";
import { useTranslations } from "next-intl";

const LocationComponent = ({ contact }: { contact: TContact }) => {
  const s = useTranslations("single");

  return (
    <div className="flex flex-col gap-3 my-4">
      <hr />
      <h2 className="font-bold text-xl text-gray-600">{s("location")}</h2>
      <p className="text-gray-700">
        {s("tel")} {contact.phone}
      </p>
      <div>
        <p className="text-gray-500">{contact.address}</p>
        {/* <GoogleMapComponent contact={contact.location} /> */}
      </div>
    </div>
  );
};

export default LocationComponent;
