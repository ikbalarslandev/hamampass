import ProfilePageComponent from "@/components/pages/profile";
import HeaderGeneral from "@/components/commons/header";

const Profile = async () => {
  return (
    <main>
      <HeaderGeneral />
      <ProfilePageComponent />
    </main>
  );
};

export default Profile;
