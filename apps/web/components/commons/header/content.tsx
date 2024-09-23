import { useRouter } from "next/navigation";
import { useParams } from "next/navigation";
import LocaleSwitcher from "./locale-switcher";
import { useSession } from "next-auth/react";
import { signIn } from "next-auth/react";
import { useTranslations } from "next-intl";
import { useState, useEffect, use } from "react";
import { TProperty } from "@/types";
import { request } from "@/services/axios";
import moment from "moment";
import "moment/locale/tr";
import "moment/locale/en-gb";
import ServiceWorkerRegister from "@/utils/serviceWorkerRegister";

const HamburgerContent = ({ setOpen, cartItemCount }: any) => {
  const { locale } = useParams();
  const router = useRouter();
  const t = useTranslations("hamburger");

  useEffect(() => {
    if (locale === "tr") {
      moment.locale("tr");
    } else {
      moment.locale("en-gb");
    }
  }, [locale]);

  const { data } = useSession();
  const handleProfileClick = () => {
    router.push(`/${locale}/profile`);
    setOpen(false);
  };

  const handleHomeClick = () => {
    router.push(`/${locale}`);
    setOpen(false);
  };

  const handleLoginClick = async () => {
    await signIn("google", { callbackUrl: `/${locale}/auth/signIn` });
  };

  const handleShoppingCard = () => {
    router.push(`/${locale}/shopping-card`);
    setOpen(false);
  };

  const [adminsProperty, setAdminsProperty] = useState<TProperty>();
  const [myBookings, setMyBookings] = useState<any[]>([]);

  const handleAdminsProperty = () => {
    router.push(`/tr/admin`);
    ServiceWorkerRegister();
  };

  useEffect(() => {
    const fetchAdminsProperty = async () => {
      if (!data?.user) return;
      try {
        const req = await request({
          type: "get",
          endpoint: `admin/${data?.user?.id}`,
        });

        setAdminsProperty(req.data);
      } catch (error) {
        console.error("Error fetching admins property:", error);
      }
    };

    const fetchMyBookings = async () => {
      try {
        const req = await request({
          type: "get",
          endpoint: `booking/${data?.user?.id}`,
        });

        setMyBookings(req.data);
      } catch (error) {
        console.error("Error fetching my bookings:", error);
      }
    };

    fetchAdminsProperty();
    fetchMyBookings();
  }, [data?.user?.id]);

  return (
    <div className="flex flex-col items-start gap-6">
      <button
        className="text-2xl scale-x-115  w-full text-left py-2"
        onClick={() => router.push(`/${locale}/wishlist`)}
      >
        My Favorites
      </button>
      {localStorage.getItem("cart") && (
        <button
          className="text-2xl scale-x-115  w-full text-left py-2  flex items-start gap-2"
          onClick={handleShoppingCard}
        >
          <span> {t("shopping-cart")}</span>

          {cartItemCount > 0 && (
            <p className=" text-xs bg-cyan-950  text-center border font-bold  text-white aspect-square rounded-full px-[.4rem] py-[.1rem]">
              {cartItemCount}
            </p>
          )}
        </button>
      )}

      {myBookings.length > 0 && (
        <button
          className="text-2xl scale-x-115  w-full text-left py-2"
          onClick={() => router.push(`/${locale}/my-bookings`)}
        >
          {t("my_bookings")}
        </button>
      )}

      {data?.user ? (
        <button
          className="text-2xl scale-x-115  w-full text-left py-2"
          onClick={handleProfileClick}
        >
          {t("profile")}
        </button>
      ) : (
        <button
          className="text-2xl scale-x-115  w-full text-left py-2"
          onClick={handleLoginClick}
        >
          {t("login")}
        </button>
      )}

      {adminsProperty && (
        <button
          className="text-2xl scale-x-115  w-full text-left py-2"
          onClick={handleAdminsProperty}
        >
          {adminsProperty.title}
        </button>
      )}

      <div className="flex items-center absolute bottom-0">
        <p>{t("language")} </p>
        <LocaleSwitcher />
      </div>
    </div>
  );
};

export default HamburgerContent;
