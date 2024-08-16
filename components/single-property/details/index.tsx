import PriceComponent from "./price";
import ProductsComponent from "./products";
import AmenityComponent from "./amenities";
import HoursComponent from "./hours";
import LocationComponent from "./location";
import ReviewComponent from "./review";
import { TProperty, TReview } from "@/types";

const DetailsComponent = ({
  data,
  reviews,
}: {
  data: TProperty;
  reviews: TReview[];
}) => {
  return (
    <div>
      {data && <PriceComponent data={data?.price} />}
      {data && <ProductsComponent data={data?.products} />}
      {data && <ReviewComponent data={data?.rating} reviews={reviews} />}
      <AmenityComponent data={data?.amenities} />
      {data && <HoursComponent data={data?.days} />}
      {data && <LocationComponent contact={data?.contact} />}
    </div>
  );
};

export default DetailsComponent;
