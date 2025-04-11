"use client";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
export const Personal_Info = () => {
  return (
    <div className="w-[650px] h-auto rounded-lg outline p-6 border-[#E4E4E7] flex-col inline-flex gap-6">
      <div>
        <span className="text-base font-bold font-['Inter'] leading-7">
          Personal Info
        </span>
      </div>
      <div className="inline-flex flex-col justify-start items-start gap-3">
        <span className="text-sm font-medium font-['Inter'] leading-none">
          Add photo
        </span>
        <Avatar className="w-[160px] h-[160px]">
          <AvatarImage
            className="w-[160px] h-[160px]"
            src="https://github.com/shadcn.png"
          />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </div>
      <div className="inline-flex flex-col justify-start items-start gap-3">
        <div className="w-full h-auto flex-col justify-start items-start gap-2">
          <div className="gap-3">
            <span className="text-sm font-medium font-['Inter'] leading-none">
              Name
            </span>
            <Input placeholder="*Name here*" />
          </div>
          <div className="mt-[12px]">
            <span className="text-sm font-medium font-['Inter'] leading-none">
              About
            </span>
            <Input placeholder="*description here*" />
          </div>
          <div className="mt-[12px]">
            <span className="text-sm font-medium font-['Inter'] leading-none">
              Social media URL
            </span>
            <Input placeholder="*Social URL here*" />
          </div>
          <div className="mt-[34px]">
            <Button className="w-full text-sm font-medium font-['Inter'] leading-tight">
              Save Changes
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
