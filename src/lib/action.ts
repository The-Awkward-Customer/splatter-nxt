"use server";

import { auth, currentUser } from "@clerk/nextjs";

export async function CheckUser() {
  const { userId } = await auth();

  //   const user = await currentUser();

  return [{ user_id: userId }];
}

// I want to get the userId from auth
// I want to get the users from from my users table
// I want to check the userId against the returned user_id's
// If the userId matches any user_uid do nothing
// If the userId does not match any user_id INSERT INTO users ( user_name, user_id)
