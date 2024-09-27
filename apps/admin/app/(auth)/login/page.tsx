import { SignOut } from "@/components/auth/logout";
import { SignIn } from "@/components/auth/sign-in";

const Login = () => {
  return (
    <div>
      <SignIn />
      <SignOut />
    </div>
  );
};

export default Login;
