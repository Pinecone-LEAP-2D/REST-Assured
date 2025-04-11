"use client";

import { useRouter } from "next/navigation";
import { createContext, useContext, useEffect, useState } from "react";
import { useJwt } from "react-jwt";
import React from "react";

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

export const useUserData = () => useContext(UserContext);
