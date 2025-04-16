"use client";

import { useRouter } from "next/navigation";
import { createContext, useContext, useEffect, useState } from "react";

type Donation = {
  amount: number | null;
  specialMessage: string | null;
  socialURLOrBuyMeACoffee: string | null;
  donorId: number | null;
  recipientId: number | null;
};

type DonationContextType = {
  donation: Donation;
  refetch: () => Promise<void>;
  setDonation: (donation: Donation) => void;
  isLoading: boolean;
  error: string | null;
};

const DonationContext = createContext<DonationContextType | undefined>(
  undefined
);

export const DonationProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [donation, setDonation] = useState<Donation>({
    amount: null,
    specialMessage: null,
    socialURLOrBuyMeACoffee: null,
    donorId: null,
    recipientId: null,
  });

  const fetchData = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch("http://localhost:4000/donations", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          amount: donation.amount,
          specialMessage: donation.specialMessage,
          socialURLOrBuyMeACoffee: donation.socialURLOrBuyMeACoffee,
          donorId: donation.donorId,
          recipientId: donation.recipientId,
        }),
      });

      const data = await response.json();

      if (!data.success) {
        setError(data.message);
      }
    } catch (error) {
      console.error("Error sending donation:", error);
      setError("Failed to send donation.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <DonationContext.Provider
      value={{
        donation,
        setDonation,
        refetch: fetchData,
        isLoading,
        error,
      }}
    >
      {children}
    </DonationContext.Provider>
  );
};

export const useDonation = () => {
  const context = useContext(DonationContext);
  if (!context) {
    throw new Error("useDonation must be used within a DonationProvider");
  }
  return context;
};
