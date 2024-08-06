import UserAvatar from "@/components/auth/avatar";
import HomePage from "@/components/home";
import { SignIn } from "@/components/auth/signin";
import { SignOut } from "@/components/auth/signout";

export default function Home() {
  return (
    <main className="max-w-full">
      <HomePage />
      <SignIn />
      <UserAvatar />
      <SignOut />
    </main>
  );
}
