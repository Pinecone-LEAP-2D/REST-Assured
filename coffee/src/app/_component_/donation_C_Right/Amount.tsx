import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Coffee } from "lucide-react";

const amounts = [1, 2, 5, 10];

export const Amount_C = () => {
  const [selectedAmount, setSelectedAmount] = useState<number | null>(null);

  return (
    <div className="flex-col inline-flex">
      <span className="text-sm font-medium leading-none">Select amount:</span>
      <div className="inline-flex gap-3 mt-[8px]">
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
