"use client";

import { LeftTable } from "../_component_/LeftTable";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function LogIn() {
  const router = useRouter();

  return (
    <>
      <div className="w-screen h-screen flex">
        <div className="w-1/2 h-full">
          <LeftTable />
        </div>
        <div className="w-1/2 h-full relative flex flex-col justify-center items-center bg-white">
          <Button
            className="absolute top-8 right-8 bg-gray-100 px-4 py-1 rounded-md text-[black]"
            onClick={() => router.push("/sign_up")}
          >
            Sign up
          </Button>
          <div className="w-[320px]">
            <h2 className="text-[black] font-semibold mb-4">Welcome back</h2>
            <div className="mb-3">
              <label className="block text-[black] mb-1">Email</label>
              <Input
                type="email"
                placeholder="Enter email here"
                className="w-full px-3 py-2 border rounded"
              />
            </div>
            <div className="mb-4">
              <label className="block text-[black] mb-1">Password</label>
              <Input
                type="password"
                placeholder="Enter password here"
                className="w-full px-3 py-2 border rounded"
              />
            </div>
            <Button className="w-full bg-[black] text-white py-2 rounded" onClick={() => router.push("/create_profile")}>
              Continue
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
