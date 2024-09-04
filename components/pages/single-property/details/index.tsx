import React, { forwardRef } from "react";
import ProductsComponent from "./products";
import AmenityComponent from "./amenities";
import HoursComponent from "./hours";
import LocationComponent from "./location";
import ReviewComponent from "./review";
import AboutComponent from "./about";
import { TProperty } from "@/types";
import { useParams } from "next/navigation";

const DetailsComponent = forwardRef<
  HTMLDivElement,
  { data: TProperty; productsRef: React.RefObject<HTMLDivElement> }
>(({ data, productsRef }, ref) => {
  const { locale } = useParams();

  return (
    <div>
      <AboutComponent desc={data[`desc_${locale}`]} />
      <div ref={productsRef}>
        {data && <ProductsComponent data={data?.products} />}
      </div>
      <div ref={ref}>
        {data.rating && (
          <ReviewComponent data={data?.rating} propertyId={data.id} />
        )}
      </div>
      <AmenityComponent data={data?.amenity} />
      {data && <HoursComponent data={data?.hour} />}
      {data && <LocationComponent contact={data?.contact} />}
    </div>
  );
});

DetailsComponent.displayName = "DetailsComponent";

export default DetailsComponent;
