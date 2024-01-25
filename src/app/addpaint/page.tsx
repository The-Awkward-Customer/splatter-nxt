import { revalidatePath } from "next/cache";
import pg from "pg";

import SaveButton from "@/components/saveButton";

// import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export default function AddPaint() {
  //counts as server actions
  async function handleAddPaint(formData) {
    "use server";
    // get form data
    const paintName = formData.get("paintName");
    console.log(paintName);

    // await pg`INSERT INTO databasename (column1, column2) VALUES (${value}, ${value})`;

    // revalidatePath("/path")

    redirect("/");
  }

  return (
    <div>
      <h2>add a paint</h2>
      <form id="paintInputForm" action={handleAddPaint}>
        <label htmlFor="paintName"> Name</label>
        <input name="paintName" id="paintNameInput" placeholder="Name" />
      </form>
      <SaveButton />
    </div>
  );
}
