"use client";

import { LeftSide } from "@/app/_component_/LeftSide";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { use, useEffect, useState } from "react";
import { useCreateAccount } from "@/providers/CreateAccountProvider";

export default function Email_And_Pass() {
  const { createAccount, setCreateAccount, refetch } = useCreateAccount();
    const [formValue, setFormValue ] = useState<CreateAccount>({username : createAccount.username});
  const router = useRouter();

  useEffect(() => {
    setCreateAccount(formValue)
   
  },[formValue])
  useEffect(() => {
    if(formValue.username === null){
      router.push("/sign_up")
    }
  })

  const onEmailChange = (e: { target: { value: string; }; }) =>{
    setFormValue((prev) => ({...prev , email : e.target.value}) )
  }
  const onPasswordChange = (e: { target: { value: string; }; }) => {
    setFormValue((prev) => ({...prev , password : e.target.value}) )
  }
  return (
    <>
      <div className="w-screen h-screen flex">
        <div className="w-1/2 h-full">
          <LeftSide />
        </div>
        <div className="w-1/2 h-full relative flex flex-col justify-center items-center bg-white">  
          <Button
            className="absolute top-8 right-8 bg-gray-100 px-4 py-1 rounded-md text-[black]"
            onClick={() => router.push("/login")}
          >
            Log in
          </Button>
          <div className="w-[320px]">
            <h2 className="text-[black] font-semibold mb-4">
              Welcome, {formValue.username}
            </h2>
            <div className="mb-3">
              <label className="block text-[black] mb-1">Email</label>
              <Input
                type="email"
                placeholder="Enter email here"
                className="w-full px-3 py-2 border rounded"
                onChange={onEmailChange}
              />
            </div>
            <div className="mb-4">
              <label className="block text-[black] mb-1">Password</label>
              <Input
                type="password"
                placeholder="Enter password here"
                className="w-full px-3 py-2 border rounded"
                onChange={onPasswordChange}
              />
            </div>
            <Button className="w-full bg-[black] text-white py-2 rounded" onClick={() => refetch()}>
              Continue
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
