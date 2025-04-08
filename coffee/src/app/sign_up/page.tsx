"use client";
import { LeftTable } from "../_component_/LeftTable";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useRouter } from "next/navigation";
export default function SignUp() {
  const router = useRouter();
  return (
    <>
      <div className="w-screen h-screen flex">
        <div className="w-1/2 h-full">
          <LeftTable />
        </div>
        <div className="w-1/2 h-full relative flex flex-col justify-center items-center bg-white">
          <Button
            className="absolute top-8 right-8 bg-gray-100 px-4 py-1 rounded-md text-[black] cursor-pointer"
            onClick={() => router.push("/login")}
          >
            <span className="text-sm font-medium font-['Inter'] leading-tight">
              Log in
            </span>
          </Button>
          <div className="w-[320px]">
            <span className="text-2xl font-semibold font-['Inter'] leading-loose">
              Create Your Account
            </span>
            <div className="mb-3">
              <span className="text-sm font-normal font-['Inter'] leading-tight text-[#71717A]">
                Choose a username for your page
              </span>
              <div className="mt-[20px]">
                <span className="text-sm font-medium font-['Inter'] leading-none">
                  Username
                </span>
                <Input placeholder="Enter username here" />
              </div>
              <div className="mt-[24px]">
                <Button className="w-[320px] cursor-pointer" onClick={() => router.push("/sign_up/email_and_pass")}>Continue</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
