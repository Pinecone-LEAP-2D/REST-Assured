"use client";

import { useRouter } from "next/navigation";
import { createContext, useContext, useEffect, useState } from "react";

type CreateAccount = {
  email?: string | null;
  password?: string | null;
  username?: string | null;
};

type CreateAccountContextType = {
  createAccount: CreateAccount;
  refetch: () => Promise<void>;
  setCreateAccount: (account: CreateAccount) => void;
};

const CreateAccountContext = createContext<
  CreateAccountContextType | undefined
>(undefined);

export const CreateAccountProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const router = useRouter()
  const [createAccount, setCreateAccount] = useState<CreateAccount>({
    email: null,
    password: null,
    username: null,
  });

  const fetchData = async () => {
    try {
      const response = await fetch("http://localhost:4000/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: createAccount.email,
          password: createAccount.password,
          username: createAccount.username,
        }),
      });

      const data = await response.json();
    
      if(data.success) {
        router.push("/create_profile")
        localStorage.setItem('token' , data.token)
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
    
  };

  return (
    <CreateAccountContext.Provider
      value={{ createAccount, setCreateAccount, refetch: fetchData }}
    >
      {children}
    </CreateAccountContext.Provider>
  );
};

export const useCreateAccount = () => {
  const context = useContext(CreateAccountContext);
  if (!context) {
    throw new Error("useCreateProfile must be used within a CreateProfileProvider");
  }
  return context;
};
