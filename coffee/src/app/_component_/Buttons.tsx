import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import { useRouter } from "next/navigation";
export const Buttons = () => {
  const router = useRouter();
  return (
    <div>
      <Button className="w-[250px] bg-[#F4F4F5] text-black justify-start cursor-pointer">
        Home
      </Button>
      <Button
        className="w-[250px] bg-white text-black justify-start hover:bg-transparent outline-none cursor-pointer"
        onClick={() => router.push("/home/explore_home")}
      >
        Explore
      </Button>
      <Button className="w-[250px] bg-white text-black justify-start hover:bg-transparent outline-none cursor-pointer pointer-events-none">
        View page <ExternalLink />{" "}
      </Button>
      <Button className="w-[250px] bg-white text-black justify-start hover:bg-transparent outline-none cursor-pointer">
        Account settings
      </Button>
    </div>
  );
};
