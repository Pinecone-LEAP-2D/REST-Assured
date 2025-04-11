// Add "use client" at the top of your file to make the component a Client Component
"use client";

import { Header } from "../_component_/Header";
import { Input } from "@/components/ui/input";
import { SelectMonth } from "@/components/selecetMonth";
import { Button } from "@/components/ui/button";
import CountrySelector from "@/components/selectCountery";
import { useRouter } from "next/navigation";

const Payment = () => {
  const router = useRouter();

  const onYearChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    if (value.length > 4) {
      e.target.value = value.slice(0, 4);
    }
  };

  const onCVCChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\D/g, "");
    if (value.length <= 3) {
      e.target.value = value;
    }
  };

  return (
    <>
      <Header />
      <div className="w-full inline-flex flex-col justify-start items-center gap-6 mt-30">
        <div className="w-[510px] max-w-[672px] inline-flex flex-col justify-start items-start gap-12">
          <div>
            <h3>How would you like to be paid?</h3>
            <p className="text-[#71717A] text-sm font-normal">
              Enter location and payment details
            </p>
          </div>

          <div className="w-[510px]">
            <p>Select country</p>
            <CountrySelector />
          </div>

          <div className="w-[510px] flex gap-4">
            <div className="w-full">
              <p>First Name</p>
              <Input
                className="w-full mt-2"
                placeholder="Enter your name here"
              />
            </div>
            <div className="w-full">
              <p>Last Name</p>
              <Input
                className="w-full mt-2"
                placeholder="Enter your name here"
              />
            </div>
          </div>

          <div className="w-[510px]">
            <p>Enter card number</p>
            <Input
              type="text"
              placeholder="XXXX-XXXX-XXXX-XXXX"
              pattern="\d{4}(\d{4}|\d{2}){3}"
            />
          </div>

          <div className="w-full">
            <div className="w-full flex gap-4">
              <div className="w-full">
                <p>Express</p>
                <SelectMonth />
              </div>

              <div className="w-full">
                <p>Year</p>
                <Input
                  type="text"
                  maxLength={4}
                  placeholder="YYYY"
                  onChange={onYearChange}
                />
              </div>
              <div className="w-full">
                <p>CVC</p>
                <Input
                  type="text"
                  maxLength={3}
                  placeholder="Enter CVC"
                  onChange={onCVCChange}
                />
              </div>
            </div>
          </div>
          <div className="w-full flex justify-end">
            <Button
              className="bg-[#D1D1D1] w-[246px] flex justify-center items-center text-black hover:bg-black hover:text-white cursor-pointer"
              onClick={() => router.push("/payment")}
            >
              {" "}
              Continue{" "}
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Payment;
