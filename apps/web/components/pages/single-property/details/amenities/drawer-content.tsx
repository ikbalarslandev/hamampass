import { TAmenity } from "@hamampass/db/types";
import DisplayAmenityIcon from "@/components/commons/display-amenity-icon";

const AmenitiesDrawerContent = ({ data }: { data: TAmenity }) => {
  return (
    <div className="flex flex-col gap-4 mt-2 ml-1 mb-5">
      <div className="flex flex-col gap-3">
        <h1>Facilities</h1>
        {data &&
          data.facilities.map((id: any, index: number) => (
            <DisplayAmenityIcon
              key={index}
              amenity={id}
              isDesc={true}
              type="facilities"
            />
          ))}
      </div>{" "}
      <div className="flex flex-col gap-3">
        <h1>items</h1>
        {data &&
          data.items.map((id: any, index: number) => (
            <DisplayAmenityIcon
              key={index}
              amenity={id}
              isDesc={true}
              type="items"
            />
          ))}
      </div>{" "}
      <div className="flex flex-col gap-3">
        <h1>Foods and Drinks</h1>
        {data &&
          data.foods_drinks.map((id: any, index: number) => (
            <DisplayAmenityIcon
              key={index}
              amenity={id}
              isDesc={true}
              type="foods_drinks"
            />
          ))}
      </div>
    </div>
  );
};

export default AmenitiesDrawerContent;
