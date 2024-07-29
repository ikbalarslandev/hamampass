import { TContact } from "@/types";
import GoogleMapComponent from "./map";

const LocationComponent = ({ contact }: { contact: TContact }) => {
  return (
    <div>
      {contact.phone}
      <GoogleMapComponent contact={contact.location} />
    </div>
  );
};

export default LocationComponent;
