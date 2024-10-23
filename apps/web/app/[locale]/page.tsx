import HomePage from "@/components/pages/home";

export default function Home({ params }: any) {
  const { locale } = params;
  return <HomePage locale={locale} />;
}
