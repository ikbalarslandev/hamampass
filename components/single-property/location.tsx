import { TContact } from "@/types";
import GoogleMapComponent from "./map";

const LocationComponent = ({ contact }: { contact: TContact }) => {
  return (
    <div>
      {contact.phone}
      <GoogleMapComponent />
    </div>
  );
};

export default LocationComponent;
