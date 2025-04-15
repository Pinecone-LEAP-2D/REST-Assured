import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Line_C } from "../donation-C/Line";
import { useGetProfileData } from "@/providers/profile-provider/getProfileDataProvider";
import { useUserData } from "@/providers/AuthenticationProvider";
export const Profile_C = () => {
  const { getProfileData } = useGetProfileData();
  const user = useUserData();
  return (
    <div className="w-full h-auto p-6 rounded-lg outline border-[#E4E4E7] bg-white inline-flex flex-col justify-start items-start gap-2">
      <div className="flex">
        <Avatar>
          <AvatarImage src={getProfileData?.avatarImage} />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <span className="w-[auto] text-xl font-bold font-['Inter'] leading-normal ml-[12px]">
          {getProfileData?.name}
        </span>
        <Button className="bg-[#F4F4F5] text-black ml-[381px]">
          Edit page
        </Button>
      </div>
      <div>
        <Line_C />
      </div>
      <div className="flex-col">
        <span className="text-base font-semibold font-['Inter'] leading-normal">
          About {getProfileData?.name}
        </span>
        <div>
          <span className="text-sm font-normal font-['Inter'] leading-tight">
            {getProfileData?.about}
          </span>
        </div>
      </div>
    </div>
  );
};
