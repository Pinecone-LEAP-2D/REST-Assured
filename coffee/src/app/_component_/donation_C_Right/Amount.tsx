import { Button } from "@/components/ui/button";
import { Coffee } from "lucide-react";
export const Amount_C = () => {
  return (
    <div className="flex-col inline-flex">
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
    </div>
  );
};
