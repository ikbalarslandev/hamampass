import HomePage from "@/components/home";
import { signOut } from "@/auth";

export default function Home() {
  return (
    <main className="max-w-full">
      <HomePage />
      <form
        action={async () => {
          "use server";
          await signOut();
        }}
      >
        <button type="submit">Sign Out</button>
      </form>
    </main>
  );
}
