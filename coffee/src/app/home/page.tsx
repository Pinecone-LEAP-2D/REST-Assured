"use client";
import { Button } from "@/components/ui/button";
import { HeaderH } from "../_component_/_homeSettings_/HeaderH";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Copy } from "lucide-react";
import { Line } from "../_component_/_home_/Line";
import { Date } from "../_component_/_home_/Date";
import { AmountBox } from "../_component_/_home_/AmountBox";
import { Buttons } from "../_component_/_home_/Buttons";
import { useRouter } from "next/navigation";
const Home = () => {
  const router = useRouter();
  return (
    <div className="w-full h-[4000pxx] relative">
      <HeaderH />
      <div className="w-[251px] h-auto inline-flex flex-col justify-start items-start gap-1 pl-[80px]">
        <Buttons />
      </div>
      <div className="w-[955px] h-auto pl-[24px] pr-[24px] inline-flex flex-col justify-start items-start gap-6 absolute left-[429px]">
        <div className="w-[907px] h-auto p-6 rounded-lg outline border-[#E4E4E7] inline-flex flex-col justify-start items-start gap-3 absolute">
          <div className="inline-flex justify-between">
            <div className="flex justify-start items-center gap-3">
              <Avatar>
                <AvatarImage
                  src="https://github.com/shadcn.png"
                  onClick={() => router.push("/donation-C")}
                />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <div className="inline-flex flex-col justify-center items-start gap-1">
                <span className="justify-start text-black text-base font-bold font-['Inter'] leading-normal">
                  *Name here*
                </span>
                <span className="justify-start text-black text-base font-normal font-['Inter'] leading-tight">
                  buymeacoffee.com/*user name here*
                </span>
              </div>
            </div>
            <div className="flex justify-center items-center ml-[397px] gap-2">
              <Button className="text-white cursor-pointer">
                <Copy /> Share page link
              </Button>
            </div>
          </div>
          <div className="pt-3 pb-3">
            <Line />
          </div>
          <div className="inline-flex flex-col justify-start items-start gap-6">
            <div className="inline-flex justify-start items-center gap-4">
              <span className="text-xl font-semibold font-['Inter'] leading-7">
                Earning
              </span>
              <Date />
            </div>
            <div>
              <span className="text-4xl font-bold font-['Inter']">
                *Total earned amount*
              </span>
            </div>
          </div>
        </div>
        <div className="w-[907px] h-auto absolute top-[281px] inline-flex flex-col justify-start items-start gap-3">
          <div className="inline-flex justify-between gap-[550px]">
            <span className="text-base font-semibold font-['Inter']">
              Recent transactions
            </span>
            <div className="">
              <AmountBox />
            </div>
          </div>
          <div className="w-[907px] h-auto rounded-lg outline outline-[#E4E4E7] inline-flex flex-col justify-start items-start gap-4 pt-[12px]">
            <div className="flex justify-start items-center gap-3 p-6 w-full">
              <div className="flex  gap-[12px] w-full">
                <Avatar>
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <div className=" w-full flex justify-between">
                  <div className="flex flex-col">
                    <span className="text-sm font-medium font-['Inter'] leading-tight">
                      *Name here*
                    </span>
                    <span className="text-xs font-normal font-['Inter'] leading-none">
                      *social link here*
                    </span>
                  </div>
                  <div className="flex-col flex">
                    <span className="text-base font-bold font-['Inter'] leading-tight">
                      <span className="text-base font-medium font-['Inter'] leading-tight">
                        +
                      </span>{" "}
                      *amount of money donated here*
                    </span>
                    <span className="text-[#71717A] text-xs font-normal font-['Inter'] leading-none">
                      *what time ago here*
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Home;
