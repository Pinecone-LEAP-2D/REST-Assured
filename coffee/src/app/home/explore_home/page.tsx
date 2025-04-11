"use client";
import { HeaderH } from "@/app/_component_/_homeSettings_/HeaderH";
import { Buttons_Explore } from "@/app/_component_/_explore_/Buttons_Explore";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
const Explore = () => {
  return (
    <div className="w-full h-[4000pxx] relative">
      <HeaderH />
      <div className="w-[251px] h-auto inline-flex flex-col justify-start items-start gap-1 pl-[80px]">
        <Buttons_Explore />
      </div>
      <div className="w-[909px] h-auto inline-flex flex-col justify-start items-start gap-6 absolute left-[403px] top-[100px]">
        <div className="w-full h-auto inline-flex flex-col justify-start items-start gap-6">
          <span className="text-xl font-semibold font-['Inter'] leading-7">
            Explore creators
          </span>
          <div>
            <Input className="w-[243px]" placeholder="Search name" />
          </div>
        </div>
        <div className="w-[909px] h-auto p-6 rounded-lg outline border-[#E4E4E7] flex-col inline-flex justify-start items-start gap-3">
          <div className="w-full h-auto self-stretch inline-flex justify-between items-center">
            <div className="inline-flex justify-start items-center gap-3">
              <Avatar>
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <span className="text-xl font-semibold font-['Inter'] leading-7">
                *Username here*
              </span>
            </div>
            <div>
              <Button className="bg-[#F4F4F5]">
                <span className="text-sm text-black font-medium font-['Inter'] leading-tight">
                  View Profile
                </span>
                <img src="../external-link.svg" />
              </Button>
            </div>
          </div>
          <div className="w-full h-auto inline-flex justify-start items-start gap-5">
            <div className="w-[420px] h-auto flex-1 inline-flex flex-col justify-start items-start gap-2">
              <span className="text-base font-semibold font-['Inter'] leading-normal">
                About *Name*
              </span>
              <span className="text-sm font-normal font-['Inter'] leading-tight">
                *Comment here*
              </span>
            </div>
            <div className="w-[420px] h-auto inline-flex flex-col justify-start items-start gap-3">
              <span className="text-base font-semibold font-['Inter'] leading-normal">
                Social Media URL
              </span>
              <span className="text-sm font-normal font-['Inter'] leading-tight">
                *Social URL here*
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Explore;
