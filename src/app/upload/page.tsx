import pg from "pg";

import SaveButton from "@/components/savebutton";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { FormEvent } from "react";

export default function AddPaint() {
  //counts as server actions
  async function handleAddPaint(formData: FormData) {
    "use server";
    // get form data
    const paintNameValue = formData.get("paintName");
    console.log(paintNameValue);

    // await pg`INSERT INTO databasename (column1, column2) VALUES (${value}, ${value})`;

    // revalidatePath("/path")

    // redirect("/");
  }

  return (
    <div>
      <h2>add a paint</h2>
      <form id="paintInputForm" action={handleAddPaint}>
        <label htmlFor="paintName"> Name</label>
        <input name="paintName" id="paintNameInput" placeholder="Name" />
        <SaveButton />
      </form>
    </div>
  );
}
