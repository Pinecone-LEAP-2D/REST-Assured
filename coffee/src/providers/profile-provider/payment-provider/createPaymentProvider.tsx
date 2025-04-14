"use client";

import { useRouter } from "next/navigation";
import { createContext, useContext, useState } from "react";

type PaymentContextType = {
  payment: Payment;
  refetch: () => Promise<void>;
  setPayment: (payment: Payment) => void;
  isLoading: boolean;
  error: string | null;
};

const PaymentContext = createContext<PaymentContextType | undefined>(undefined);

export const PaymentProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const router = useRouter();

  const [payment, setPayment] = useState<Payment>({
    id: null,
    country: null,
    firstName: null,
    lastName: null,
    cardNumber: null,
    expiryDate: null,
    year: null,
    cvc: null,
  });

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const fetchData = async () => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch("http://localhost:4000/bankCard", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({}),
      });

      const data = await response.json();

      if (data.success) {
      
      } else {
        setError(data.message || "Payment failed.");
      }
    } catch (error) {
      setError(error instanceof Error ? error.message : "Unknown error");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <PaymentContext.Provider
      value={{
        payment,
        setPayment,
        refetch: fetchData,
        isLoading,
        error,
      }}
    >
      {children}
    </PaymentContext.Provider>
  );
};

export const usePayment = () => {
  const context = useContext(PaymentContext);
  if (!context) {
    throw new Error("usePayment must be used within a PaymentProvider");
  }
  return context;
};
