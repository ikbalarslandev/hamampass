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
    <div>
      <Image
        src={user.image}
        alt={user.name}
        width={40}
        height={40}
        className="rounded-full"
      />
      <p>name : {user.name}</p>
      <p>email : {user.email}</p>
      {u?.id ? (
        <InfoComponent user={user as TUser} />
      ) : (
        <FormComponent user={user} />
      )}
    </div>
  );
};
export default ProfilePageComponent;
