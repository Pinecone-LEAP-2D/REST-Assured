"use client";
import { Input } from "@/components/ui/input";

export const Social_Url_D = ({ user }: { user: any }) => {
  return (
    <div className="mt-[32px] flex-col">
      <span className="text-sm font-medium leading-none mb-[8px]">
        Enter BuyMeCoffee or social account URL:
      </span>
      <div>
        <Input
          className="w-full"
          placeholder="buymeacoffee.com/"
          defaultValue={user?.socialMediaURL || ""}
        />
      </div>
    </div>
  );
};
