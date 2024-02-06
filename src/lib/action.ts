"use server";

import { auth, currentUser } from "@clerk/nextjs";
import { db } from "@/lib/db";

// NOTES:
// the CheckUser Function checks to see if the user exists in the db and adds it if not.
// it also exposes the value of userId to be used elsewhere
export async function CheckUser() {
  const { userId } = await auth();
  const user = await currentUser();
  const username = `${user?.firstName} ${user?.lastName}`;

  console.log(`the user id is ${userId}`);
  console.log(username);

  let SQLUserQuery = `SELECT * FROM users`; // SQL query string
  let SQLInput = `INSERT INTO users (user_string, user_name) VALUES ($1, $2)`;

  const res = await db.query(SQLUserQuery); // SQL query
  const users = res.rows;

  const userExists = users.some((user: any) => user.user_string === userId);
  // this will return falsy and trigger the query when the user is signed out.
  // we use a truthy check for user id to ensure it is not NULL

  if (!userExists && userId) {
    await db.query(SQLInput, [userId, username]);
  }

  return [{ user_id: userId }]; // exposes the value of user id to be used elsewhere
}
