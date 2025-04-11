"use client";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
export const Header_V1 = () => {
  const router = useRouter();
  return (
    <div>
      <div className="flex justify-between items-center">
        <div className="flex justify-start gap-2">
          <span className="text-base font-bold leading-tight">
            Payment details
          </span>
        </div>
      </div>
    </div>
  );
};
