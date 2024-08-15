import PriceComponent from "./price";
import ProductsComponent from "./products";
import AmenityComponent from "./amenities";
import HoursComponent from "./hours";
import LocationComponent from "./location";
import ReviewComponent from "./review";
import { TProperty } from "@/types";

const DetailsComponent = ({ data }: { data: TProperty }) => {
  return (
    <div>
      {data && <PriceComponent data={data?.price} />}
      {data && <ProductsComponent data={data?.products} />}
      {data && <ReviewComponent data={data?.rating} />}
      <AmenityComponent data={data?.amenities} />
      {data && <HoursComponent data={data?.days} />}
      {data && <LocationComponent contact={data?.contact} />}
    </div>
  );
};

export default DetailsComponent;
