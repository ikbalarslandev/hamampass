import { TUser } from "@/types";
import { signOut } from "next-auth/react";

const InfoComponent = ({ user }: { user: TUser }) => {
  const handleSignOut = () => {
    signOut({ callbackUrl: "/" });
  };
  return (
    <div>
      <div className="m-3">
        <p>nationality : {user.nationality}</p>
        <p>age_range : {user.age_range}</p>
        <p>gender : {user.gender}</p>
        <button onClick={handleSignOut}>Sign Out</button>
      </div>
    </div>
  );
};

export default InfoComponent;
