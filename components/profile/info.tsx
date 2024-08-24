import { TUser } from "@/types";
import { signOut } from "next-auth/react";
import { Button } from "@/components/ui/button";
import { convertAgeRange } from "@/utils/db_translations";
import { useTranslations } from "next-intl";

const InfoComponent = ({ user }: { user: TUser }) => {
  const t = useTranslations("single.review.gender");
  const p = useTranslations("profile");

  const handleSignOut = () => {
    signOut({ callbackUrl: "/" });
  };
  return (
    <div>
      <div className="m-3 flex-1">
        <p>
          {p("nationality")} : {user?.nationality}
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
