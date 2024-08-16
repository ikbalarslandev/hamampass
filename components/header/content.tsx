import { useRouter } from "next/navigation";
import { useParams } from "next/navigation";
import LocaleSwitcher from "./locale-switcher";
import { useSession } from "next-auth/react";
import { signIn } from "next-auth/react";

const HamburgerContent = ({ setOpen }: any) => {
  const { locale } = useParams();
  const router = useRouter();

  const { data } = useSession();
  const handleProfileClick = () => {
    router.push(`/${locale}/profile`);
    setOpen(false);
  };

  const handleLoginClick = async () => {
    await signIn("google", { callbackUrl: `/${locale}/profile` });
  };

  return (
    <div className="flex flex-col items-start gap-6">
      <button className="text-2xl scale-x-115">Home</button>

      {data?.user ? (
        <button className="text-2xl scale-x-115" onClick={handleProfileClick}>
          Profile
        </button>
      ) : (
        <button className="text-2xl scale-x-115" onClick={handleLoginClick}>
          Login
        </button>
      )}

      <div className="flex items-center absolute bottom-0">
        <p>Language : </p>
        <LocaleSwitcher />
      </div>
    </div>
  );
};

export default HamburgerContent;
