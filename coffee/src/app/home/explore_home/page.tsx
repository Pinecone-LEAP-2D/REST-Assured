"use client";

import { HeaderH } from "@/app/_component_/_homeSettings_/HeaderH";
import { Buttons_Explore } from "@/app/_component_/_explore_/Buttons_Explore";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { useGetExplore } from "@/providers/getEcploreProvider";
import { useState } from "react";

const Explore = () => {
  const router = useRouter();
  const { getExploreData, isLoading, error } = useGetExplore();
  const [searchTerm, setSearchTerm] = useState("");

  const filteredUsers = getExploreData.filter((user) =>
    user?.username?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="w-full min-h-screen relative">
      <HeaderH />
      <div className="w-[251px] h-auto inline-flex flex-col justify-start items-start gap-1 pl-[80px]">
        <Buttons_Explore />
      </div>

      <div className="w-[909px] h-auto inline-flex flex-col justify-start items-start gap-6 absolute left-[403px] top-[100px]">
        <div className="w-full h-auto inline-flex flex-col justify-start items-start gap-6">
          <span className="text-xl font-semibold font-['Inter'] leading-7">
            Explore creators
          </span>
          <Input
            className="w-[243px]"
            placeholder="Search name"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        {isLoading && <p>Loading...</p>}
        {error && <p className="text-red-500">{error}</p>}

        {filteredUsers.splice(0,5).map((user) => (
          <div
            key={user.id}
            className="w-[909px] h-auto p-6 rounded-lg outline border border-[#E4E4E7] flex-col inline-flex justify-start items-start gap-3"
          >
            <div className="w-full inline-flex justify-between items-center">
              <div className="inline-flex items-center gap-3">
                <Avatar>
                  <AvatarImage
                    className="cursor-pointer"
                    src={user?.avatarUrl || ""}
                    onClick={() => router.push(`/donation-C/${user?.id}`)}
                  />
                  <AvatarFallback>
                    {user?.username?.slice(0, 2).toUpperCase() || "CN"}
                  </AvatarFallback>
                </Avatar>
                <span className="text-xl font-semibold font-['Inter'] leading-7">
                  {user?.username}
                </span>
              </div>
              <Button
                className="bg-[#F4F4F5] flex items-center gap-1"
                onClick={() => router.push(`/donation-C/${user?.id}`)}
              >
                <span className="text-sm text-black font-medium font-['Inter'] leading-tight">
                  View Profile
                </span>
                <img src="/external-link.svg" alt="external link" />
              </Button>
            </div>

            <div className="w-full flex justify-start items-start gap-5 flex-wrap">
              <div className="w-[420px] flex flex-col gap-2">
                <span className="text-base font-semibold font-['Inter'] leading-normal">
                  About {user?.about }
                </span>
                <span className="text-sm font-normal font-['Inter'] leading-tight">
                  {user?.id || "*No bio provided*"}
                </span>
              </div>
              <div className="w-[420px] flex flex-col gap-3">
                <span className="text-base font-semibold font-['Inter'] leading-normal">
                  Social Media URL
                </span>
                <span className="text-sm font-normal font-['Inter'] leading-tight text-blue-500 underline break-words">
                  {user?.socialMediaURL || "N/A"}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Explore;
