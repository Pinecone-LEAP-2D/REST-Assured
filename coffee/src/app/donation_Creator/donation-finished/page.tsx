"use client";
import { HeaderH } from "@/app/_component_/_homeSettings_/HeaderH";
import { useGetProfileData } from "@/providers/profile-provider/getProfileDataProvider";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
const Donation_Finished = () => {
  const router = useRouter();
  const { getProfileData } = useGetProfileData();
  return (
    <div className="w-full h-auto flex inline-flex flex-col relative justify-center items-center">
      <HeaderH />
      <div>
        <div className="w-[696px] p-6 flex-col inline-flex justify-center items-center gap-6 mt-[100px]">
          <div className="p-4 bg-[#18BA51] rounded-full inline-flex justify-start items-center gap-4">
            <img src="../green-check.svg" />
          </div>
          <div>
            <span className="text-base font-semibold leading-normal">
              Donation Complete!
            </span>
          </div>
          <div className="w-[510px] h-auto px-3 py-2 rounded-md outline outline-[#E4E4E7] inline-flex flex-col justify-start items-start gap-2">
            <div className="flex gap-2 items-center">
              <Avatar>
                <AvatarImage src={getProfileData?.avatarImage} />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <span className="text-sm font-medium leading-tight">
                {getProfileData?.name}:
              </span>
            </div>
            <div>
              <span>*special message here*</span>
            </div>
          </div>
          <div>
            <Button onClick={() => router.push("/home/explore_home")}>
              Return to explore
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Donation_Finished;
