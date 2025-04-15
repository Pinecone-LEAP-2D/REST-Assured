"use client";
import { useGetProfileData } from "@/providers/profile-provider/getProfileDataProvider";

export const Buy_Coffee_C = () => {
  const { getProfileData } = useGetProfileData();
  return (
    <div>
      <span className="text-2xl font-semibold leading-loose">
        Buy {getProfileData?.name} a Coffee
      </span>
    </div>
  );
};
