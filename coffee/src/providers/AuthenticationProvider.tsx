"use client";

import { useRouter } from "next/navigation";
import { createContext, useContext, useEffect, useState } from "react";
import { useJwt } from "react-jwt";
import React from "react";

type UserContextType =
  | {
      data: {
        email: string;
        id: number;
        username: string;
      };
      exp: number;
      iat: number;
    }
  | undefined;

const UserContext = createContext<UserContextType | undefined>(undefined);

export const AuthenticationProvider = ({
  children,
}: Readonly<{ children: React.ReactNode }>) => {
  const router = useRouter();
  const [userData, setUserData] = useState<UserContextType | undefined>(
    undefined
  );
  const [isLoading, setIsLoading] = useState(true);
  const token =
    typeof window !== "undefined" ? localStorage.getItem("token") : null;

  const { decodedToken, isExpired } = useJwt(token as string);
  console.log(decodedToken);
  useEffect(() => {
    if (!token) {
      router.push("/login");
      return;
    } else {
      const userContextData: UserContextType = decodedToken as UserContextType;

      setUserData(userContextData);
    }

    setIsLoading(false);
  }, [token, decodedToken, isExpired, router]);

  return (
    <UserContext.Provider value={userData}>{children}</UserContext.Provider>
  );
};

export const useUserData = () => {
  const context = useContext(UserContext);

  if (!context) {
    throw new Error(
      "useUserData must be used within an AuthenticationProvider"
    );
  }

  return context;
};
