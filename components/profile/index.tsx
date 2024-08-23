"use client";

import Image from "next/image";
import InfoComponent from "./info";
import { TSessionUser, TUser } from "@/types";
import { useSession, getSession } from "next-auth/react";
import { useEffect, useState } from "react";

const ProfilePageComponent = () => {
  const [user, setUser] = useState<TUser | TSessionUser>();
  const { data, status } = useSession();

  useEffect(() => {
    const fetchSession = async () => {
      const session = await getSession();
      if (session?.user) {
        setUser(session.user as TUser);
      }
    };

    fetchSession();
  }, []);

  useEffect(() => {
    if (data?.user) {
      setUser(data?.user as TUser);
    }
  }, [data]);

  if (status === "loading") return <div>loading...</div>;
  if (!user) return <div>No user found</div>;

  return (
    <div className="mx-3 ">
      <h1 className="text-center font-bold text-lg my-5 text-gray-700">
        Profile Page
      </h1>

      <div className="flex items-center gap-3">
        <Image
          src={user.image}
          alt={user.name}
          width={32}
          height={32}
          className="rounded-full"
        />
        <p className="text-lg"> {user.name}</p>
      </div>
      <InfoComponent user={user as TUser} />
    </div>
  );
};

export default ProfilePageComponent;
