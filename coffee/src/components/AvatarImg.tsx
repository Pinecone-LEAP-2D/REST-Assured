"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Camera } from "lucide-react";
import { ChangeEvent, useState } from "react";
import axios from "axios";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

const NEXT_PUBLIC_CLOUDINARY_API_KEY = "449676792634373";
const CLOUDINARY_UPLOAD_PRESET = "H8ahs3";
const CLOUDINARY_CLOUD_NAME = "dwauz9le4";
const API_URL = `https://api.cloudinary.com/v1_1/${CLOUDINARY_CLOUD_NAME}/image/upload`;

type AvatarImgProps = {
  className?: string;
}
export const AvatarImg = ({ className }: AvatarImgProps) => {
  const [data, setData] = useState<File | null>(null);
  const [previewImg, setPreviewImg] = useState<string | undefined>();

  const handleUploadImg = (e: ChangeEvent<HTMLInputElement>) => {
    const files = e?.target?.files;
    if (!files) return;
    const file = files[0];

    setData(file);

    const reader = new FileReader();
    reader.onload = () => {};

    reader.readAsDataURL(file);
  };

  const UploadCloudinary = async () => {
    if (!data) {
      alert("Please insert a photo");
      return;
    }

    try {
      const file = new FormData();
      file.append("file", data as File);
      file.append("upload_preset", CLOUDINARY_UPLOAD_PRESET);
      file.append("api_key", NEXT_PUBLIC_CLOUDINARY_API_KEY);

      const response = await axios.post(API_URL, file, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      setPreviewImg(response.data.secure_url);
    } catch (error) {
      console.log("Error uploading to Cloudinary:", error);
      alert("Failed to upload image.");
    }
  };

  return (
    <>
      <Avatar className={className}>
        <AvatarImage src={previewImg} />
        <AvatarFallback className="bg-white border-[2px] border-dashed">
          <label
            htmlFor="img"
            className="h-40 w-40 flex justify-center items-center"
          >
            <Camera stroke="grey" />
            <Input
              onChange={handleUploadImg}
              id="img"
              type="file"
              className="hidden"
            />
          </label>
        </AvatarFallback>
      </Avatar>

    
      {!data || (
        <div className="absolute z-40 inset-0 flex justify-center items-center">
          <div className="bg-opacity-20 p-4 rounded-lg bg-white flex justify-center items-center space-x-4 h-[200px] w-[300px]">
            <div>
              <h3 className="">Change profile</h3>
              <div className="flex justify-center space-x-4 mt-2">
                <Button onClick={() => setData(null)}>Cancel</Button>
                <Button onClick={UploadCloudinary}>OK</Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
