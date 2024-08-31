import ProfilePageComponent from "@/components/pages/profile";
import HeaderComponent from "@/components/commons/header";

const ProfilePage = async () => {
  return (
    <main>
      <HeaderComponent />
      <ProfilePageComponent />
    </main>
  );
};

export default ProfilePage;
