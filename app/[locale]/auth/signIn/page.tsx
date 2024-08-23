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
    <div className=" ">
      <h1 className="text-xl font-semibold text-slate-700 mt-8 mb-2 text-center bg-slate-400/80">
        Please complete your Profile
      </h1>

      <FormComponent />
    </div>
  );
};

export default SignInPage;
