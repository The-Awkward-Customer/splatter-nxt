"use client";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import "./navigation.css";
import { UserButton } from "@clerk/nextjs";
import Link from "next/link";

// The user id array is passes an object with a key value pair
// Because it is passed an array the value will always be truthy
// So we must check to see if the value is a string or NULL
// we conditionally render based on the value being string or Null

export default function Navigation({
  userId,
}: {
  userId: Array<{ user_id: string | null }>;
}) {
  const user_id = userId[0]?.user_id; // this looks inside the array to see if the object is there and if so assigns it's value to the const.

  const isLoggedIn = !!user_id;

  return (
    <section className="NavigationWrapper">
      <h1 className="NavigationHeader">Splatter</h1>
      <NavigationMenu.Root>
        <NavigationMenu.Link href="/mypaints" className="NavigationLink">
          My paints
        </NavigationMenu.Link>
      </NavigationMenu.Root>
      {isLoggedIn ? (
        <UserButton afterSignOutUrl="/" />
      ) : (
        <Link href={"/sign-in"}>Sign in</Link>
      )}
    </section>
  );
}
