import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ClerkProvider, UserButton, auth, currentUser } from "@clerk/nextjs";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "The painters app | Splatter",
  description: "Track and curate your paint collection",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { userId } = auth();
  const user = await currentUser();

  console.log(userId);
  console.log(user);
  return (
    <ClerkProvider>
      <html lang="en">
        <script
          type="module"
          src="https://unpkg.com/@splinetool/viewer@1.0.38/build/spline-viewer.js"
        ></script>
        <body className={inter.className}>
          <UserButton afterSignOutUrl="/" />
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
