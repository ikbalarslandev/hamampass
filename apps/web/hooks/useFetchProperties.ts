import { useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { request } from "@/services/axios";
import { setPropertyState } from "@/lib/store/slices/propertiesSlice";
import { useDispatch } from "react-redux";

const useFetchProperties = () => {
  const dispatch = useDispatch();
  const searchParams = useSearchParams();

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const fParam = (param: string) => searchParams.get(param);

        const response = await request({
          type: "get",
          endpoint: "property",
          params: {
            sort: fParam("sort"),
            contact_district: fParam("district"),
            vibe: fParam("vibe"),
            amenity: fParam("amenity"),
            sex: fParam("sex"),
            pay: fParam("pay"),
            range: fParam("range"),
            review: fParam("review"),
          },
        });

        dispatch(setPropertyState(response.data));
      } catch (error) {
        console.error("Error fetching properties:", error);
      }
    };

    fetchProperties();
  }, [searchParams, dispatch]);
};

export { useFetchProperties };
