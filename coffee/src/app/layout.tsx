import { CreateAccountProvider } from "@/providers/sign_up_login_provider/CreateAccountProvider";
import "./globals.css";
import { CreateProfileProvider } from "@/providers/profile_provider/CreateProfileProvider";
import { AuthenticationProvider } from "@/providers/AuthenticationProvider";
import { UpdateProfileProvider } from "@/providers/profile_provider/UpdateProfileProvider";
import { GetProfileDataProvider } from "@/providers/profile_provider/getProfileDataProvider";
import { ChangePasswordProvider } from "@/providers/sign_up_login_provider/changePassowordProvider";

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
                  <CreateAccountProvider>{children}</CreateAccountProvider>
                </GetProfileDataProvider>
              </ChangePasswordProvider>
            </UpdateProfileProvider>
          </CreateProfileProvider>
        </AuthenticationProvider>
      </body>
    </html>
  );
}
