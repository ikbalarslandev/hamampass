import ProfilePageComponent from "@/components/pages/profile";
import HeaderComponent from "@/components/pages/properties/header";

const Profile = async () => {
  return (
    <main>
      <HeaderComponent />
      <ProfilePageComponent />
    </main>
  );
};

export default Profile;
