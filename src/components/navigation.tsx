"use client";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import "./navigation.css";
import { UserButton } from "@clerk/nextjs";

export default function Navigation() {
  return (
    <section className="NavigationWrapper">
      <h1 className="NavigationHeader">Splatter</h1>
      <NavigationMenu.Root>
        <NavigationMenu.Link href="/mypaints" className="NavigationLink">
          My paints
        </NavigationMenu.Link>
      </NavigationMenu.Root>
      <UserButton afterSignOutUrl="/" />
    </section>
  );
}
