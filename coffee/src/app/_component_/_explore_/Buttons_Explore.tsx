import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import { useRouter } from "next/navigation";
export const Buttons_Explore = () => {
  const router = useRouter();
  return (
    <div>
      <Button
        className="w-[250px] bg-white text-black justify-start hover:bg-transparent cursor-pointer"
        onClick={() => router.push("/home")}
      >
        Home
      </Button>
      <Button className="w-[250px] bg-[#F4F4F5] text-black justify-start outline-none cursor-pointer">
        Explore
      </Button>
      <Button className="w-[250px] bg-white text-black justify-start hover:bg-transparent outline-none cursor-pointer">
        View page <ExternalLink />{" "}
      </Button>
      <Button
        className="w-[250px] bg-white text-black justify-start hover:bg-transparent outline-none cursor-pointer"
        onClick={() => router.push("/home/settings")}
      >
        Account settings
      </Button>
    </div>
  );
};
