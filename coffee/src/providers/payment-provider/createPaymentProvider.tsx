"use client";

import { useRouter } from "next/navigation";
import { createContext, useContext, useState } from "react";
import { useUserData } from "../AuthenticationProvider";

type PaymentContextType = {
  payment: Payment;
  CreateBankCard: () => Promise<void>;
  UpdateBankCard: () => Promise<void>;
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
  const decodedToken = useUserData();
  const [payment, setPayment] = useState<Payment>({
    id: decodedToken?.id as number,
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

  const CreateBankCard = async () => {
    setIsLoading(true);
    setError(null);

    try {
      if (!payment.cardNumber || !payment.expiryDate || !payment.cvc) {
        setError("Missing required fields");
        return;
      }

      const expiryMonth = new Date(payment.expiryDate).getMonth() + 1;
      const expiryYear = new Date(payment.expiryDate).getFullYear();

      const response = await fetch("http://localhost:4000/bankCard", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userId: decodedToken?.id,
          country: payment.country,
          firstName: payment.firstName,
          lastName: payment.lastName,
          cardNumber: payment.cardNumber,
          expiryMonth,
          expiryYear,
          cvc: payment.cvc,
        }),
      });

      const data = await response.json();
console.log(data)
      if (data.success) {
        router.push('/home')
      } else {
        setError(data.message || "Payment failed.");
      }
    } catch (error) {
      setError(error instanceof Error ? error.message : "Unknown error");
    } finally {
      setIsLoading(false);
    }
  };

  const UpdateBankCard = async () => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch("http://localhost:4000/bankCard", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id: payment.id,
          country: payment.country,
          firstName: payment.firstName,
          lastName: payment.lastName,
          cardNumber: payment.cardNumber,
          expiryDate: payment.expiryDate,
          year: payment.year,
          cvc: payment.cvc,
        }),
      });

      const data = await response.json();
      console.log(data);
      if (data.success) {
        router.push("/home");
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
        CreateBankCard,
        UpdateBankCard,
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
