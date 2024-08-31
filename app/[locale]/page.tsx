import HomePage from "@/components/pages/home";
import HeaderComponent from "@/components/commons/header";

export default function Home() {
  return (
    <main className="max-w-full">
      <HeaderComponent />
      <HomePage />
    </main>
  );
}
