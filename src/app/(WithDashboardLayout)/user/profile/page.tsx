import UserProfile from "@/components/modules/profile/UserProfile";
import { getProfileData } from "@/services/AuthService";

const AdminProfilePage = async () => {
  const { data: profileData } = await getProfileData();
  // console.log(profileData);

  return (
    <div className="mb-20">
      <div className="mb-5 text-3xl font-bold">My Profile</div>
      <UserProfile profileData={profileData}></UserProfile>
    </div>
  );
};

export default AdminProfilePage;
