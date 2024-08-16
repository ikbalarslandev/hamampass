import { useRouter } from "next/navigation";
import { useParams } from "next/navigation";
import LocaleSwitcher from "./locale-switcher";

const HamburgerContent = ({ setOpen }: any) => {
  const { locale } = useParams();
  const router = useRouter();

  const handleProfileClick = () => {
    router.push(`/${locale}/profile`);
    setOpen(false);
  };
  return (
    <div>
      <button onClick={handleProfileClick}>My Profile</button>
      <LocaleSwitcher />
    </div>
  );
};

export default HamburgerContent;
