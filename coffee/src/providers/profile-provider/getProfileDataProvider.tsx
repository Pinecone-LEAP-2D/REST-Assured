"use client";

import { useRouter } from "next/navigation";
import {
  createContext,
  useContext,
  useState,
  useCallback,
  useEffect,
} from "react";
import { useUserData } from "../AuthenticationProvider";
import axios from "axios";


type GetProfileDataContextType = {
  getProfileData: UserProfile;
  getRefetch: () => Promise<void>;
  setGetProfileData: (account: UserProfile) => void;
  isLoading: boolean;
  error: string | null;
};

const GetProfileDataContext = createContext<
  GetProfileDataContextType | undefined
>(undefined);

export const GetProfileDataProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const decodedToken = useUserData();

  const [getProfileData, setGetProfileData] = useState<UserProfile>();
console.log(getProfileData)
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const fetchData = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await axios.get(
        `http://localhost:4000/profile/${decodedToken?.userData?.id}`
      );

      const data = response.data.profileData      ;
      console.log(data)
      setGetProfileData(data);
    } catch (error) {
      setError(error instanceof Error ? error.message : "Unknown error");
    } finally {
      setIsLoading(false);
    }
  };
  useEffect(() => {
    fetchData();
  }, [decodedToken]);
  return (
    <GetProfileDataContext.Provider
      value={{
        getProfileData,
        setGetProfileData,
        getRefetch: fetchData,
        isLoading,
        error,
      }}
    >
      {children}
    </GetProfileDataContext.Provider>
  );
};

export const useGetProfileData = () => {
  const context = useContext(GetProfileDataContext);
  if (!context) {
    throw new Error(
      "useGetProfileData must be used within a GetProfileDataProvider"
    );
  }
  return context;
};
