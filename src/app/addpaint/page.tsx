import { db } from "@/lib/db";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export default function AddPaint() {
  //counts as server actions
  async function handleAddPaint(formData: FormData) {
    "use server";
    // get form data
    const comment = formData.get("comment");
    console.log(comment);

    let sqlInsert = `INSERT INTO comments (product_id, comment_text)
    values
    (${}, ${comment})`;
    const req = await db.query(sqlInsert);
  }

  return (
    <div>
      <h2>add a paint</h2>
      <form id="commentForm" action={handleAddPaint}>
        <label htmlFor="paintName"> Name</label>
        <input name="comment" id="commentInput" placeholder="Add a comment" />
        <button>submit</button>
      </form>
    </div>
  );
}
