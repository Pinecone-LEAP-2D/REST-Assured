"use client";
import { useRouter } from "next/navigation";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { useGetProfilAlleData } from "@/providers/profile-provider/getProfileAllData";

type UserProfile = {
  id: number | null;
  name: string | null;
  about: string | null;
  avatarImage: string | null;
  socialMediaURL: string | null;
  backgroundImage: string | null;
  successMessage: string | null;
  createdAt: string | null;
  updatedAt: string | null;
  userId: number | null;
};

export const UserList = ({ searchTerm }: { searchTerm: string }) => {
  const router = useRouter();
  const { getProfileData, isLoading, error } = useGetProfilAlleData();

  const [useData, setUseData] = useState<UserProfile[]>([]);

  const filteredUsers = useData.filter((user) =>
    user.name?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  useEffect(() => {
    if (getProfileData && Array.isArray(getProfileData)) {
      setUseData(getProfileData);
    }
  }, [getProfileData]);

  return (
    <div className="space-y-6">
      {isLoading && <p>Loading...</p>}
      {error && <p className="text-red-500">{error}</p>}

      {filteredUsers.length === 0 && (
        <p className="text-gray-500">No users found.</p>
      )}

      {filteredUsers.map((user) => (
        <div
          key={user.id ?? user.userId}
          className="w-[909px] h-auto p-6 rounded-lg outline border border-[#E4E4E7] flex-col inline-flex justify-start items-start gap-3"
        >
          <div className="w-full inline-flex justify-between items-center">
            <div
              className="inline-flex items-center gap-3"
              onClick={() =>
                router.push(`/donation-Creator/${user.id ?? user.userId}`)
              }
            >
              <Avatar>
                <AvatarImage
                  className="cursor-pointer"
                  src={user.avatarImage || ""}
                />
                <AvatarFallback>
                  {user.name?.slice(0, 2).toUpperCase() || "CN"}
                </AvatarFallback>
              </Avatar>
              <span className="text-xl font-semibold leading-7 cursor-pointer">
                {user.name}
              </span>
            </div>
            <Button
              className="bg-[#F4F4F5] flex items-center gap-1"
              onClick={() =>
                router.push(`/donation-Creator/${user.id ?? user.userId}`)
              }
            >
              <span className="text-sm text-black font-medium leading-tight cursor-pointer">
                View Profile
              </span>
              <img src="/external-link.svg" alt="external link" />
            </Button>
          </div>

          <div className="w-full flex justify-start items-start gap-5 flex-wrap">
            <div className="w-[420px] flex flex-col gap-2">
              <span className="text-base font-semibold leading-normal">
                About
              </span>
              <span className="text-sm font-normal leading-tight">
                {user.about || "*No bio provided*"}
              </span>
            </div>
            <div className="w-[420px] flex flex-col gap-3">
              <span className="text-base font-semibold leading-normal">
                Social Media URL
              </span>
              <span className="text-sm font-normal leading-tight text-blue-500 underline break-words">
                {user.socialMediaURL || "N/A"}
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default UserList;
