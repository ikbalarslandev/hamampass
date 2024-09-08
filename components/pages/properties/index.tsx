import Cards from "@/components/pages/properties/cards";
import FilterComponent from "@/components/pages/properties/filters";
import HomeTitle from "./title";
import { getAllProperties } from "@/actions/property";
import { NextRequest } from "next/server";
import { TApiResponse, TProperty } from "@/types";

const PropertiesPage = async () => {
  const req = new NextRequest(process.env.BASE_URL!!);
  const res = await getAllProperties(req);

  // Type guard to check if the response has the expected shape
  const isApiResponse = (response: any): response is TApiResponse => {
    return response && "data" in response;
  };

  return (
    <div>
      <FilterComponent />
      <hr />
      <HomeTitle />
      {isApiResponse(res) ? (
        <Cards serverProperties={res.data} />
      ) : (
        <p>Error loading properties</p>
      )}
    </div>
  );
};

export default PropertiesPage;
