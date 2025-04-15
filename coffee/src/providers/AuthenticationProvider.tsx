"use client";

import { useRouter } from "next/navigation";
import { createContext, useContext, useEffect, useState } from "react";
import { useJwt } from "react-jwt";
import React from "react";
import { Loading } from "@/components/loading";

type UserContextType = {
  email: string;
  id: number;
  username: string;
  exp: number;
  iat: number;
  
};

const UserContext = createContext<UserContextType | undefined>(undefined);

export const AuthenticationProvider = ({
  children,
}: Readonly<{ children: React.ReactNode }>) => {
  const router = useRouter();
  const [userData, setUserData] = useState<UserContextType>();
  const [isLoading, setIsLoading] = useState(true);
  const token =
    typeof window !== "undefined" ? localStorage.getItem("token") : null;

  const { decodedToken, isExpired } = useJwt(token as string);
  const user = () => {
    setIsLoading(true);
    try {
      if (!token) {
        router.push("/login");
        return;
      } else {
        const userContextData: UserContextType =
          decodedToken as UserContextType;

        setUserData(userContextData);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };
  useEffect(() => {
    user();
    const userContextData: UserContextType =
    decodedToken as UserContextType;

  setUserData(userContextData);
  }, [token, decodedToken, isExpired, router]);
  useEffect(()=> {
    const userContextData: UserContextType =
    decodedToken as UserContextType;

  setUserData(userContextData);
  },[])

  if (isLoading) {
    return <Loading></Loading>;
  }
  return (
    <UserContext.Provider value={userData}>
      {children}
    </UserContext.Provider>
  );
};

export const useUserData = () => useContext(UserContext);
