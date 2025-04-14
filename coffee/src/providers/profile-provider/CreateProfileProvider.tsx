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

type CreateProfileContextType = {
  createProfile: CreateProfile;
  refetch: () => Promise<void>;
  setCreateProfile: (account: CreateProfile) => void;
  isLoading: boolean;
  error: string | null;
};

const CreateProfileContext = createContext<
  CreateProfileContextType | undefined
>(undefined);

export const CreateProfileProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const  decodedToken   = useUserData();
  console.log(decodedToken)
  console.log("decodedToken" ,decodedToken)
const router = useRouter()
  const [createProfile, setCreateProfile] = useState<CreateProfile>({
    image: null,
    name: null,
    about: null,
    socialMediaURL: null,
    userID: null,
  });
console.log(createProfile)


  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const fetchData = async () => {

    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch("http://localhost:4000/profile", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          avatarImage: createProfile.image,
          backgroundImage: null,
          name: createProfile.name,
          about: createProfile.about,
          socialMediaURL: createProfile.socialMediaURL,
          userId: createProfile?.userID,
        }),
      });
      const data = await response.json();
      console.log(data)
      if(data.success){
        router.push('/payment')
      }
    } catch (error) {
      setError(error instanceof Error ? error.message : "Unknown error");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <CreateProfileContext.Provider
      value={{
        createProfile,
        setCreateProfile,
        refetch: fetchData,
        isLoading,
        error,
      }}
    >
      {children}
    </CreateProfileContext.Provider>
  );
};

export const useCreateProfile = () => {
  const context = useContext(CreateProfileContext);
  if (!context) {
    throw new Error(
      "useCreateAccount must be used within a CreateAccountProvider"
    );
  }
  return context;
};
