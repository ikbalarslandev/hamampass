import { TUser } from "@/types";
import { signOut } from "next-auth/react";
import { Button } from "@/components/ui/button";
import { convertAgeRange } from "@/utils/db_translations";
import { useTranslations } from "next-intl";
import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import { request } from "@/services/axios";

const InfoComponent = ({ user }: { user: TUser }) => {
  const t = useTranslations("single.review.gender");
  const p = useTranslations("profile");
  const { locale } = useParams();
  const [country, setCountry] = useState<string>();

  const handleSignOut = () => {
    signOut({ callbackUrl: "/" });
  };

  useEffect(() => {
    async function fetchCountry() {
      const res = await request({
        type: "get",
        endpoint: `country/${user?.nationality}`,
      });
      setCountry(res?.data[`name_${locale}`]);
    }

    fetchCountry();
  }, [user]);

  return (
    <div>
      <div className="m-3 flex-1">
        <p>
          {p("nationality")} : {country}
        </p>
        <p>
          {p("age")} : {convertAgeRange(user?.age_range)}{" "}
        </p>
        <p>
          {p("gender")} : {t(user?.gender?.toString())}
        </p>

        <Button
          className="absolute bottom-10 right-5 bg-gray-500"
          onClick={handleSignOut}
        >
          {p("logout")}
        </Button>
      </div>
    </div>
  );
};

export default InfoComponent;
