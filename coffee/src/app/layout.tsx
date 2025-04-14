import { CreateAccountProvider } from "@/providers/sign-up-login-provider/CreateAccountProvider";
import "./globals.css";
import { CreateProfileProvider } from "@/providers/profile-provider/CreateProfileProvider";
import { AuthenticationProvider } from "@/providers/AuthenticationProvider";
import { UpdateProfileProvider } from "@/providers/profile-provider/UpdateProfileProvider";
import { GetProfileDataProvider } from "@/providers/profile-provider/getProfileDataProvider";
import { ChangePasswordProvider } from "@/providers/sign-up-login-provider/changePassowordProvider";
import { PaymentProvider } from "@/providers/profile-provider/payment-provider/createPaymentProvider";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <AuthenticationProvider>
          <CreateProfileProvider>
            <UpdateProfileProvider>
              <ChangePasswordProvider>
                <GetProfileDataProvider>
                  <PaymentProvider>
                    <CreateAccountProvider>{children}</CreateAccountProvider>
                  </PaymentProvider>
                </GetProfileDataProvider>
              </ChangePasswordProvider>
            </UpdateProfileProvider>
          </CreateProfileProvider>
        </AuthenticationProvider>
      </body>
    </html>
  );
}
