import { Input } from "@/components/ui/input";
export const Message_D = () => {
  return (
    <div className="mt-[20px] flex-col">
      <span className="text-sm font-medium font-['Inter'] leading-none mb-[8px]">
        Special message
      </span>
      <div>
        <Input
          className="w-full"
          placeholder="Please write your message here"
        />
      </div>
    </div>
  );
};
