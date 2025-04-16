import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
export const Message_D = () => {
  return (
    <div className="mt-[20px] flex-col">
      <span className="text-sm font-medium leading-none mb-[8px]">
        Special message
      </span>
      <div>
        <Textarea
          className="w-full"
          placeholder="Please write your message here"
        />
      </div>
    </div>
  );
};
