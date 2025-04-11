"use client";
import { Button } from "@/components/ui/button";
import { HeaderH } from "../_component_/_homeSettings_/HeaderH";
import { CameraIcon, Coffee, HeartIcon } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Line_C } from "../_component_/donation-C/Line";
import { Input } from "@/components/ui/input";
const Donation_C = () => {
  return (
    <div className="w-full h-[1000px] relative overflow-hidden">
      <HeaderH />
      <div className="w-full h-[319px] relative bg-[#F4F4F5] overflow-hidden inline-flex justify-center items-center gap-2">
        <Button className="w-[181px] bg-black text-white">
          <CameraIcon /> Add a cover image
        </Button>
      </div>
      <div className="w-[632px] h-auto justify-start items-start gap-5 absolute top-[289px] left-[80px]">
        <div className="w-full h-auto p-6 rounded-lg outline border-[#E4E4E7] bg-white inline-flex flex-col justify-start items-start gap-2">
          <div className="flex">
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <span className="w-[auto] text-xl font-bold font-['Inter'] leading-normal ml-[12px]">
              *Name here*
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
              About *Name here*
            </span>
            <div>
              <span className="text-sm font-normal font-['Inter'] leading-tight">
                *Description here*
              </span>
            </div>
          </div>
        </div>
        <div className="w-full h-auto p-6 rounded-lg outline border-[#E4E4E7] bg-white inline-flex flex-col justify-start items-start gap-2 mt-[20px]">
          <div className="flex-col">
            <span className="text-base font-semibold font-['Inter'] leading-normal">
              Social media URL
            </span>
            <div className="mt-[18px]">
              <span className="text-sm font-normal font-['Inter'] leading-tight">
                *Social URL here*
              </span>
            </div>
          </div>
        </div>
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
                  Be the first one to support *Name here*
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[628px] h-auto justify-start items-start gap-5 absolute top-[289px] left-[732px]">
        <div className="w-full h-auto p-6 rounded-lg outline border-[#E4E4E7] bg-white inline-flex flex-col justify-start items-start gap-2">
          <div>
            <span className="text-2xl font-semibold font-['Inter'] leading-loose">
              Buy *Name here* a Coffee
            </span>
          </div>
          <div className="w-full mt-[26px] inline-flex flex-col gap-2">
            <span className="text-sm font-medium font-['Inter'] leading-none">
              Select amount:
            </span>
            <div className="inline-flex gap-3">
              <Button className="w-auto bg-[#F4F4F5] text-black hover:text-white">
                <Coffee /> $1
              </Button>
              <Button className="w-auto bg-[#F4F4F5] text-black hover:text-white">
                <Coffee /> $2
              </Button>
              <Button className="w-auto bg-[#F4F4F5] text-black hover:text-white">
                <Coffee /> $5
              </Button>
              <Button className="w-auto bg-[#F4F4F5] text-black hover:text-white">
                <Coffee /> $10
              </Button>
            </div>
            <div className="mt-[32px] flex-col">
              <span className="text-sm font-medium font-['Inter'] leading-none mb-[8px]">
                Enter BuyMeCoffee or social account URL:
              </span>
              <div>
                <Input className="w-full" placeholder="buymeacoffee.com/" />
              </div>
            </div>
            <div className="mt-[20px] flex-col">
              <span className="text-sm font-medium font-['Inter'] leading-none mb-[8px]">
                Special message
              </span>
              <div>
                <Input
                  className="w-full"
                  placeholder="Please write your message here"
                />
              </div>
            </div>
            <div className="w-full mt-[32px]">
              <Button className="w-full bg-[#D1D1D1] hover:bg-black">
                Support
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Donation_C;
