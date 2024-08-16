import { TUser } from "@/types";
import { signOut } from "next-auth/react";
import { Button } from "@/components/ui/button";
const InfoComponent = ({ user }: { user: TUser }) => {
  const handleSignOut = () => {
    signOut({ callbackUrl: "/" });
  };
  return (
    <div>
      <div className="m-3">
        <p>nationality : {user.nationality}</p>
        <p>age : {user.age_range} </p>
        <p>gender : {user.gender}</p>

        <Button className="mt-10" onClick={handleSignOut}>
          Sign Out
        </Button>
      </div>
    </div>
  );
};

export default InfoComponent;
