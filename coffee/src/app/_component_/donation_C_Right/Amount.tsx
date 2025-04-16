import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Coffee } from "lucide-react";

const amounts = [1, 2, 5, 10];

export const Amount_C = () => {
  const [selectedAmount, setSelectedAmount] = useState<number | null>(null);

  return (
    <div className="flex-col inline-flex">
      <span className="text-sm font-medium leading-none">Select amount:</span>
      <div className="inline-flex gap-3">
        {amounts.map((amount) => (
          <Button
            key={amount}
            className={`w-auto gap-1 ${
              selectedAmount === amount
                ? "bg-black text-white"
                : "bg-[#F4F4F5] text-black hover:text-white"
            }`}
            onClick={() => setSelectedAmount(amount)}
          >
            <Coffee /> ${amount}
          </Button>
        ))}
      </div>
    </div>
  );
};
