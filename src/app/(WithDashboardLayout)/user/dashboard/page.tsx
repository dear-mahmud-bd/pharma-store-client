export const dynamic = "force-dynamic";

import MyProfile from "@/components/modules/profile/MyProfile";
import { getProfileData } from "@/services/AuthService";

const UserDashboardPage = async () => {
  const { data: profileData } = await getProfileData();
  return (
    <div>
      <MyProfile profileData={profileData} />
    </div>
  );
};

export default UserDashboardPage;
