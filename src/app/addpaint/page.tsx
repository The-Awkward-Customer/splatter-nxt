import { db } from "@/lib/db";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export default function AddPaint() {
  //counts as server actions
  async function handleAddPaint(formData: FormData) {
    "use server";
    // get form data
    const paintName = formData.get("paintName");
    console.log(paintName);

    let sqlInsert = `INSERT INTO comments (product_id, comment_text)
    values
    (2, 'A yellow-green color great for highlighting a desaurated green.')`;
    const req = await db.query(sqlInsert);

    // revalidatePath("/path")

    // redirect("/");
  }

  return (
    <div>
      <h2>add a paint</h2>
      <form id="paintInputForm" action={handleAddPaint}>
        <label htmlFor="paintName"> Name</label>
        <input name="paintName" id="paintNameInput" placeholder="Name" />
        <button>submit</button>
      </form>
    </div>
  );
}
