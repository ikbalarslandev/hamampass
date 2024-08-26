import Cards from "@/components/home/cards";
import FilterComponent from "@/components/home/filters";
import HomeTitle from "./title";
import { getAllProperties } from "@/actions/property";
import { NextRequest } from "next/server";

const HomePage = async () => {
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

export default HomePage;
