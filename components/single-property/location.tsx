import { TContact } from "@/types";

const LocationComponent = ({ contact }: { contact: TContact }) => {
  return <div>{contact.phone}</div>;
};

export default LocationComponent;
