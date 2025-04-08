import { Coffee } from "lucide-react";

export const LeftTable = () => {
  return (
    <div className="w-full h-full relative bg-[#FBBF24] overflow-hidden">
      <div className="inline-flex justify-start items-center gap-2 absolute top-[32px] left-[80px]">
        <Coffee color="black" />
        <span className="text-black text-base font-bold font-['Inter'] leading-tight">
          Buy Me Coffee
        </span>
      </div>
      <div className="absolute top-[287px] left-[100.5px] text-center">
        <img src="illustration.svg" className="mx-auto mb-4" />
        <span className="text-xl font-semibold text-black">
          Fund your creative work
        </span>
        <p className="text-sm text-black mt-2">
          Accept support. Start a membership. Setup a shop. It's easier than you think.
        </p>
      </div>
    </div>
  );
}
