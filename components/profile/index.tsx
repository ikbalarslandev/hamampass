"use client";

import Image from "next/image";
import FormComponent from "./form";
import InfoComponent from "./info";
import { TSessionUser, TUser } from "@/types";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";

const ProfilePageComponent = () => {
  const [user, setUser] = useState<TUser | TSessionUser>();
  const { data } = useSession();

  useEffect(() => {
    if (data?.user) {
      setUser(data?.user as TUser);
    }
  }, [data]);

  const u = user as TUser;

  if (!user) return <div>loading...</div>;
  return (
    <div className="mx-3">
      <h1 className="text-center font-bold text-lg my-5 text-gray-700">
        Profile Page
      </h1>

      <div className="flex items-center gap-5">
        <Image
          src={user.image}
          alt={user.name}
          width={50}
          height={50}
          className="rounded-full"
        />
        <p className="font-semibold text-lg"> {user.name}</p>
      </div>

      {u?.id ? (
        <InfoComponent user={user as TUser} />
      ) : (
        <div className="flex flex-col mt-5">
          <p className="text-center  font-semibold text-gray-700">
            Please complete your profile
          </p>
          <FormComponent user={user} />
        </div>
      )}
    </div>
  );
};
export default ProfilePageComponent;
