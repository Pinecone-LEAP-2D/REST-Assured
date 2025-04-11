"use client";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
export const Set_New_Pass = () => {
  return (
    <div className="w-full p-6 rounded-lg outline border-[#E4E4E7] flex-col inline-flex gap-6">
      <div className="justify-start items-start gap-6">
        <div>
          <span className="text-base font-bold font-['Inter'] leading-7">
            Set new password
          </span>
        </div>
        <div className="gap-3 mt-[24px]">
          <span className="text-sm font-medium font-['Inter'] leading-none">
            New password
          </span>
          <Input placeholder="Enter new password" type="password" />
        </div>
        <div className="mt-[12px]">
          <span className="text-sm font-medium font-['Inter'] leading-none">
            Confirm password
          </span>
          <Input placeholder="Confirm password" type="password" />
        </div>
        <div className="mt-[24px]">
          <Button className="w-full">Save changes</Button>
        </div>
      </div>
    </div>
  );
};
