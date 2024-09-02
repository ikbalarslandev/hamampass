import Cards from "@/components/pages/properties/cards";
import FilterComponent from "@/components/pages/properties/filters";
import HomeTitle from "./title";
import { getAllProperties } from "@/actions/property";
import { NextRequest } from "next/server";

const PropertiesPage = async () => {
  const req = new NextRequest(process.env.BASE_URL!!);
  const res = await getAllProperties(req);

  if ("data" in res) {
    var data = res.data;
  }

  return (
    <div>
      <FilterComponent />
      <hr />
      <HomeTitle />
      <Cards serverProperties={data} />
    </div>
  );
};

export default PropertiesPage;
