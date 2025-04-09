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
};
export const AvatarImg = ({ className }: AvatarImgProps) => {
  const [data, setData] = useState<File | null>(null);
  const [previewImg, setPreviewImg] = useState<string | undefined>();
  const [loading, setLoading] = useState(false);

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
    setLoading(true);
    setData(null);
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
    } finally {
      setLoading(false);
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
            {loading ? (
              <div className="w-10 h-10 border-l-[2px] border-t-[2px] border-black rounded-full animate-spin"></div>
            ) : (
              <>
                {" "}
                <Camera stroke="grey" />
                <Input
                  onChange={handleUploadImg}
                  id="img"
                  type="file"
                  className="hidden"
                />
              </>
            )}
          </label>
        </AvatarFallback>
      </Avatar>

      {!data || (
        <div className="absolute z-40 inset-0 flex justify-center items-center bg-opacity-50 bg-[#6B728030]">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full flex flex-col items-center space-y-4">
            <h3 className="text-xl font-semibold text-gray-800">
              Change Profile
            </h3>
            <div className="text-center text-gray-600">
              <p>Are you sure you want to update your profile?</p>
            </div>
            <div className="flex justify-center space-x-6 mt-4">
              <Button
                onClick={() => setData(null)}
                className="bg-gray-300 hover:bg-gray-400 text-gray-700 px-6 py-2 rounded-full transition-all duration-200"
              >
                Cancel
              </Button>
              <Button
                onClick={UploadCloudinary}
                className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-full transition-all duration-200"
              >
                OK
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
