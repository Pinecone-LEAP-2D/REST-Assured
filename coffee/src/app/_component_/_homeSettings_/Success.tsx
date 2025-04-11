import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
export const Success = () => {
  return (
    <div className="w-full p-6 rounded-lg outline border-[#E4E4E7] flex-col inline-flex gap-6">
      <div className="justify-start items-start gap-6">
        <span className="text-base font-bold font-['Inter'] leading-7">
          Success page
        </span>
        <div className="mt-[24px]">
          <span className="text-sm font-medium font-['Inter'] leading-none">
            Confirmation message
          </span>
          <Input
            className="w-full h-auto"
            placeholder="*Confirmation message here*"
          />
        </div>
        <div className="mt-[24px]">
          <Button className="w-full bg-black text-white">Save changes</Button>
        </div>
      </div>
    </div>
  );
};
