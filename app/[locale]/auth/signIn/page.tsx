"use client";

import FormComponent from "@/components/profile/form";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

const SignInPage: React.FC = () => {
  const { data } = useSession();
  const router = useRouter();

  if (data?.user?.id) {
    router.push("/");
    return <div>Already signed in</div>;
  }
  return (
    <div>
      Sign In Page
      <FormComponent />
    </div>
  );
};

export default SignInPage;
