"use client";
import { Button } from "@/components/ui/button";

export const Support_D = ({ userId }: { userId: number }) => {
  const handleSupportClick = () => {
    console.log("Support clicked for user ID:", userId);
  };

  return (
    <div className="w-full mt-[32px]">
      <Button className="w-full bg-[#D1D1D1] hover:bg-black" onClick={handleSupportClick}>
        Support
      </Button>
    </div>
  );
};
