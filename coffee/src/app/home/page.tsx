"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { HeaderH } from "../_component_/_homeSettings_/HeaderH";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Copy } from "lucide-react";
import { Line } from "../_component_/_home_/Line";
import { Date } from "../_component_/_home_/Date";
import { AmountBox } from "../_component_/_home_/AmountBox";
import { Buttons } from "../_component_/_home_/Buttons";
import { useGetProfileData } from "@/providers/profile-provider/getProfileDataProvider";
import { useUserData } from "@/providers/AuthenticationProvider";
import { useDonation } from "@/providers/donationProvider";
import { useGetExplore } from "@/providers/getEcploreProvider";

const Home = () => {
  const router = useRouter();
  const { getProfileData } = useGetProfileData();
  const user = useUserData();
  const { donation, setDonation, refetch, isLoading, error } = useDonation();
  const [totalEarned, setTotalEarned] = useState<number>(0);

  // Fetch total earnings
  useEffect(() => {
    const fetchDonations = async () => {
      if (!getProfileData?.id) return;

      try {
        const res = await fetch(
          `http://localhost:4000/donations?recipientId=${getProfileData.id}`
        );
        const data = await res.json();
        const total = data.reduce(
          (acc: number, d: any) => acc + (d.amount || 0),
          0
        );
        setTotalEarned(total);
      } catch (err) {
        console.error("Failed to fetch donations", err);
      }
    };

    fetchDonations();
  }, [getProfileData?.id]);

  // 💸 Send a donation from logged-in user to the profile being viewed
  const handleSendDonation = async () => {
    if (!user?.id || !getProfileData?.id) {
      console.error("Missing donor or recipient ID");
      return;
    }

    // Fill in donation data
    setDonation({
      amount: 10, // hardcoded for now, you can make this dynamic
      specialMessage: "You're amazing! 🙌",
      socialURLOrBuyMeACoffee: `https://buymeacoffee.com/${user.username}`,
      donorId: user.id,
      recipientId: Number(getProfileData.id),
    });

    // Call refetch (which triggers the donation POST)
    await refetch();
  };

  return (
    <div className="w-full h-auto relative">
      <HeaderH />
      <div className="w-[251px] h-auto inline-flex flex-col justify-start items-start gap-1 pl-[80px]">
        <Buttons />
      </div>

      <div className="w-[955px] h-auto pl-[24px] pr-[24px] inline-flex flex-col justify-start items-start gap-6 absolute left-[429px]">
        {/* TOP SECTION */}
        <div className="w-[907px] h-auto p-6 rounded-lg outline border-[#E4E4E7] inline-flex flex-col justify-start items-start gap-3 absolute">
          <div className="inline-flex justify-between">
            <div className="flex justify-start items-center gap-3">
              <Avatar>
                <AvatarImage
                  src={getProfileData?.avatarImage}
                  className="cursor-pointer"
                  onClick={() => router.push("/donation_C")}
                />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <div className="inline-flex flex-col justify-center items-start gap-1">
                <span className="text-black text-base font-bold">
                  {getProfileData?.name}
                </span>
                <span className="text-black text-base font-normal">
                  buymeacoffee.com/{user?.username}
                </span>
              </div>
            </div>
            <div className="flex justify-center items-center ml-[397px] gap-2">
              <Button className="text-white cursor-pointer">
                <Copy /> Share page link
              </Button>
            </div>
          </div>

          <div className="pt-3 pb-3">
            <Line />
          </div>

          <div className="inline-flex flex-col justify-start items-start gap-6">
            <div className="inline-flex justify-start items-center gap-4">
              <span className="text-xl font-semibold leading-7">Earning</span>
              <Date />
            </div>
            <div>
              <span className="text-4xl font-bold">${totalEarned}</span>
            </div>
          </div>

          {/* 💰 TEMPORARY TEST DONATION BUTTON */}
          <div className="pt-4">
            <Button onClick={handleSendDonation} disabled={isLoading}>
              {isLoading ? "Sending Donation..." : "Send $10 Donation"}
            </Button>
            {error && <p className="text-red-500 mt-2">Error: {error}</p>}
          </div>
        </div>

        {/* RECENT TRANSACTIONS */}
        <div className="w-[907px] h-auto absolute top-[281px] inline-flex flex-col justify-start items-start gap-3">
          <div className="inline-flex justify-between gap-[550px]">
            <span className="text-base font-semibold ">
              Recent transactions
            </span>
            <div>
              <AmountBox />
            </div>
          </div>

          <div className="w-[907px] h-auto rounded-lg outline outline-[#E4E4E7] inline-flex flex-col justify-start items-start gap-4 pt-[12px]">
            <div className="flex justify-start items-center gap-3 p-6 w-full">
              <div className="flex gap-[12px] w-full">
                <Avatar>
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <div className="w-full flex justify-between">
                  <div className="flex flex-col">
                    <span className="text-sm font-medium leading-tight">
                      *name here*
                    </span>
                    <span className="text-xs font-normal leading-none">
                      *social link here*
                    </span>
                  </div>
                  <div className="flex-col flex">
                    <span className="text-base font-bold leading-tight">
                      + *amount of money donated here*
                    </span>
                    <span className="text-[#71717A] text-xs font-normal leading-none">
                      *what time ago here*
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
