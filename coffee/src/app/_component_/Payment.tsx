"use client";
import { Header_V1 } from "./Header_V1";
import { Input } from "@/components/ui/input";
import { SelectMonth } from "@/components/selecetMonth";
import { Button } from "@/components/ui/button";
import CountrySelector from "@/components/selectCountery";
import { useRouter } from "next/navigation";
export const Payment_V1 = () => {
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
    <div>
      <Header_V1 />
      <div className="w-full inline-flex flex-col justify-start items-center gap-6 mt-[24px] justify-start items-start">
        <div className="w-[510px]">
          <p>Select country</p>
          <CountrySelector />
        </div>

        <div className="w-[510px] flex gap-4">
          <div className="w-full">
            <p>First Name</p>
            <Input className="w-full mt-2" placeholder="Enter your name here" />
          </div>
          <div className="w-full">
            <p>Last Name</p>
            <Input className="w-full mt-2" placeholder="Enter your name here" />
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
        <div className="w-full flex justify-start">
          <Button
            className="bg-black w-full flex justify-center items-center text-white cursor-pointer"
            onClick={() => router.push("/payment")}
          >
            {" "}
            Save changes{" "}
          </Button>
        </div>
      </div>
    </div>
  );
};
