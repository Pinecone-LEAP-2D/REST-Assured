"use client";
import { Coffee } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useRouter } from "next/navigation";
import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
export const HeaderH = () => {
  const router = useRouter();
  return (
    <div className="w-full h-[56px] flex justify-between items-center p-8 sticky">
      <div className="flex justify-start gap-2">
        <Coffee />
        <span className="text-base font-bold font-['Inter'] leading-tight">
          Buy Me Coffee
        </span>
      </div>
      <div className="flex justify-start items-center gap-3">
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <span className="text-sm font-medium font-['Inter'] leading-tight">
          *Name here*
        </span>
        <DropdownMenu>
          <DropdownMenuTrigger>
            <ChevronDown />
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem onClick={() => router.push("/login")}>
              Log out
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
};
