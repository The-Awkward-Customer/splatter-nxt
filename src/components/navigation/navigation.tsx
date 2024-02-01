"use client";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import "./navigation.css";
import { UserButton, auth, currentUser } from "@clerk/nextjs";
import Link from "next/link";

export default function Navigation({ userId }: any) {
  return (
    <section className="NavigationWrapper">
      <h1 className="NavigationHeader">Splatter</h1>
      <NavigationMenu.Root>
        <NavigationMenu.Link href="/mypaints" className="NavigationLink">
          My paints
        </NavigationMenu.Link>
      </NavigationMenu.Root>
      {userId && <UserButton afterSignOutUrl="/" />}
      {!userId && <Link href={"/sign-in"}>Sign in</Link>}
    </section>
  );
}
