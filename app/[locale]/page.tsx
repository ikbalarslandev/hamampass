import HomePage from "@/components/home";
import { useTranslations } from "next-intl";

export default function Home() {
  const t = useTranslations("Index");
  return (
    <main className="max-w-full">
      <h1>{t("title")}</h1>
      <HomePage />
    </main>
  );
}
