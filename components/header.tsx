"use client";
import LocaleSwitcher from "./locale-switcher";
import { useParams } from "next/navigation";
import { useRouter } from "next/navigation";

const HeaderComponent = () => {
  const { locale } = useParams();
  const router = useRouter();

  const handleHeaderClick = () => {
    locale ? router.push(`/${locale}`) : router.push(`/`);
  };

  return (
    <header className="flex items-center justify-center gap-5 bg-cyan-600 text-white px-2">
      <h1
        className="text-3xl py-3 flex-1 text-center"
        onClick={handleHeaderClick}
      >
        Hamam Pass
      </h1>
      <LocaleSwitcher />
    </header>
  );
};

export default HeaderComponent;
