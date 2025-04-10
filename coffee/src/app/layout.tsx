import { CreateAccountProvider } from "@/providers/CreateAccountProvider";
import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <CreateAccountProvider>{children}</CreateAccountProvider>
      </body>
    </html>
  );
}
