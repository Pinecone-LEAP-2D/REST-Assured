import { CreateAccountProvider } from "@/providers/CreateAccountProvider";
import "./globals.css";
import { CreateProfileProvider } from "@/providers/CreateProfileProvider";
import { AuthenticationProvider } from "@/providers/AuthenticationProvider";

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
            <CreateAccountProvider>{children}</CreateAccountProvider>
          </CreateProfileProvider>
        </AuthenticationProvider>
      </body>
    </html>
  );
}
