"use client";

import { useRouter } from "next/navigation";
import { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";

type UserProfile = {
  id: number;
  name: string;
  about: string;
  avatarImage: string;
  socialMediaURL: string;
  backgroundImage: string;
  successMessage: string;
  createdAt: string;
  updatedAt: string;
  userId: number;
};

type GetProfileByIdContextType = {
  profileData: UserProfile | null;
  isLoading: boolean;
  error: string | null;
};

const GetProfileByIdContext = createContext<
  GetProfileByIdContextType | undefined
>(undefined);

export const GetProfileByIdProvider = ({
  children,
  userId,
}: {
  children: React.ReactNode;
  userId: number;
}) => {
  const [profileData, setProfileData] = useState<UserProfile | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const fetchData = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await axios.get(
        `http://localhost:4000/profiles/${userId}`
      );
      setProfileData(response.data.profileData);
    } catch (error) {
      setError(error instanceof Error ? error.message : "Unknown error");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (userId) {
      fetchData();
    }
  }, [userId]);

  return (
    <GetProfileByIdContext.Provider value={{ profileData, isLoading, error }}>
      {children}
    </GetProfileByIdContext.Provider>
  );
};

export const useGetProfileById = () => {
  const context = useContext(GetProfileByIdContext);
  if (!context) {
    throw new Error(
      "useGetProfileById must be used within a GetProfileByIdProvider"
    );
  }
  return context;
};
