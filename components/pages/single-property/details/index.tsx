import React, { forwardRef } from "react";
import ProductsComponent from "./products";
import AmenityComponent from "./amenities";
import HoursComponent from "./hours";
import LocationComponent from "./location";
import ReviewComponent from "./review";
import AboutComponent from "./about";
import { TProperty } from "@/types";
import { useParams } from "next/navigation";

const DetailsComponent = forwardRef<HTMLDivElement, { data: TProperty }>(
  ({ data }, ref) => {
    const { locale } = useParams();

    return (
      <div>
        <AboutComponent desc={data[`desc_${locale}`]} />
        {data && <ProductsComponent data={data?.products} />}
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
  }
);

DetailsComponent.displayName = "DetailsComponent";

export default DetailsComponent;
