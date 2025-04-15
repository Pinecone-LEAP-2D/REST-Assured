import { CreateAccountProvider } from "@/providers/sign-up-login-provider/CreateAccountProvider";
import "./globals.css";
import { CreateProfileProvider } from "@/providers/profile-provider/CreateProfileProvider";
import { AuthenticationProvider } from "@/providers/AuthenticationProvider";
import { UpdateProfileProvider } from "@/providers/profile-provider/UpdateProfileProvider";
import { GetProfileDataProvider } from "@/providers/profile-provider/getProfileDataProvider";
import { ChangePasswordProvider } from "@/providers/sign-up-login-provider/changePassowordProvider";
import { PaymentProvider } from "@/providers/payment-provider/createPaymentProvider";
import { GetExploreProvider } from "@/providers/getEcploreProvider";
import { DonationProvider } from "@/providers/donationProvider";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <DonationProvider>
          <AuthenticationProvider>
            <CreateProfileProvider>
              <UpdateProfileProvider>
                <ChangePasswordProvider>
                  <GetProfileDataProvider>
                    <PaymentProvider>
                      <GetExploreProvider>
                        <CreateAccountProvider>
                          {children}
                        </CreateAccountProvider>
                      </GetExploreProvider>
                    </PaymentProvider>
                  </GetProfileDataProvider>
                </ChangePasswordProvider>
              </UpdateProfileProvider>
            </CreateProfileProvider>
          </AuthenticationProvider>
        </DonationProvider>
      </body>
    </html>
  );
}
