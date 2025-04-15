import { HeartIcon } from "lucide-react";
import {
  GetProfileDataProvider,
  useGetProfileData,
} from "@/providers/profile-provider/getProfileDataProvider";
export const Recent_S_C = () => {
  const { getProfileData } = useGetProfileData();
  return (
    <div className="w-full h-auto p-6 rounded-lg outline border-[#E4E4E7] bg-white inline-flex flex-col justify-start items-start gap-2 mt-[20px]">
      <div className="w-[584px] justify-start items-start flex-col">
        <span className="text-base font-semibold font-['Inter'] leading-normal">
          Recent Supporters
        </span>
        {/* Make this section invisible when there's someone donated to the respective user */}
        <div className="w-full h-auto p-6 rounded-lg outline border-[#E4E4E7] bg-white inline-flex flex-col justify-center items-center gap-2 mt-[20px]">
          <div>
            <HeartIcon />
          </div>
          <div>
            <span className="text-base font-semibold font-['Inter'] leading-normal">
              Be the first one to support {getProfileData?.name}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
