import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ClerkProvider, UserButton, auth, currentUser } from "@clerk/nextjs";

import "./globals.css";
import Navigation from "@/components/navigation";

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
        <body className={inter.className}>
          <Navigation />
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
