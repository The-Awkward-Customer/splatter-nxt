import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ClerkProvider, UserButton, auth, currentUser } from "@clerk/nextjs";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "The painters app | Splatter",
  description: "Track and curate your paint collection",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className}>
          <UserButton afterSignOutUrl="/" />
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
