"use client";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { HeaderH } from "@/app/_component_/_homeSettings_/HeaderH";
import { Profile_C } from "@/app/_component_/donation_C_Left/Profile";
import { Recent_S_C } from "@/app/_component_/donation_C_Left/Recent_Supporters";
import { Social_URL_C } from "@/app/_component_/donation_C_Left/Social_Url";
import { Amount_C } from "@/app/_component_/donation_C_Right/Amount";
import { Buy_Coffee_C } from "@/app/_component_/donation_C_Right/Buy_Coffee";
import { Message_D } from "@/app/_component_/donation_C_Right/Message_D";
import { Social_Url_D } from "@/app/_component_/donation_C_Right/Social_Url";
import { Support_D } from "@/app/_component_/donation_C_Right/Support_Button";
import { Button } from "@/components/ui/button";
import { CameraIcon } from "lucide-react";

const getProfileById = async (id: string) => {
  const res = await fetch(`http://localhost:4000/profile/${id}`);
  if (!res.ok) throw new Error("User not found");
  return await res.json();
};

const Donation_C = () => {
  const { id } = useParams() as { id: string };
  const [profile, setProfile] = useState<any>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (id) {
          const data = await getProfileById(id);
          setProfile(data.profileData);
        }
      } catch (err) {
        console.error("Failed to fetch user:", err);
      }
    };

    fetchData();
  }, [id]);

  if (!profile) return <p>Loading profile...</p>;

  return (
    <div className="w-full h-[1000px] relative overflow-hidden">
      <HeaderH />
      <div className="w-full h-[319px] relative bg-[#F4F4F5] overflow-hidden inline-flex justify-center items-center gap-2">
        <Button className="w-[181px] bg-black text-white">
          <CameraIcon /> Add a cover image
        </Button>
      </div>

      <div className="w-[632px] h-auto justify-start items-start gap-5 absolute top-[289px] left-[80px]">
        <Profile_C user={profile} />
        <Social_URL_C user={profile} />
        <Recent_S_C user={profile} />
      </div>

      <div className="w-[628px] h-auto justify-start items-start gap-5 absolute top-[289px] left-[732px]">
        <div className="w-full h-auto p-6 rounded-lg outline border-[#E4E4E7] bg-white inline-flex flex-col justify-start items-start gap-2">
          <Buy_Coffee_C user={profile} />
          <div className="w-full mt-[26px] inline-flex flex-col gap-2">
            <Amount_C />
            <Social_Url_D user={profile} />
            <Message_D />
            <Support_D userId={profile.id} />{" "}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Donation_C;
