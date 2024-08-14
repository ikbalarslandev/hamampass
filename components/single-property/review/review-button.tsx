import { useSession } from "next-auth/react";
import { signIn } from "next-auth/react";
import { request } from "@/services/axios";
import ReviewDrawerComponent from "./review-drawer";
import { useState, useEffect, use } from "react";
import { useTranslations } from "next-intl";
import { useParams } from "next/navigation";
import { useRouter } from "next/navigation";

interface IReviewButton {
  propertyId: string;
}

const ReviewButton = ({ propertyId }: IReviewButton) => {
  const session = useSession();
  const [isExist, setIsExist] = useState(false);
  const r = useTranslations("review");
  const { locale } = useParams();
  const router = useRouter();

  useEffect(() => {
    const handleIsExist = async () => {
      const res = await request({
        type: "get",
        endpoint: `review`,
        params: { propertyId, userId: "147758c3-2e23-49e4-9101-bbecf98245ae" },
      });

      setIsExist(res.data.isExist);
    };

    if (session.data) {
      handleIsExist();
    }
  }, [session.data]);

  const handleClick = async () => {
    await signIn("google", { callbackUrl: `/${locale}/profile` });
  };

  if (session.data) {
    if (isExist) {
      return <p className="text-cyan-600 text-sm">{r("reviewed")}</p>;
    }
    return <ReviewDrawerComponent id={propertyId} />;
  } else {
    return (
      <p className="text-cyan-600 text-sm" onClick={handleClick}>
        {r("login")}
      </p>
    );
  }
};

export default ReviewButton;
