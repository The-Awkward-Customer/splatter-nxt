export default function CommentForm() {
  async function HandleAddPaint(event: React.FormEvent<HTMLFormElement>) {
    "use server";
    // get form data
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const comment = formData.get("comment");
    console.log(comment);

    let sqlInsert = `INSERT INTO comments (product_id, comment_text) VALUES ($1, $2)`;
    await db.query(sqlInsert, [params.id, comment]);
    console.log(`Id: ${params.id}, Comment: ${comment}`);
  }

  return (
    <>
      <div>
        <h2>add a paint</h2>
        <form id="commentForm" onSubmit={HandleAddPaint}>
          <label htmlFor="commentInput"> Name</label>
          <input name="comment" id="commentInput" placeholder="Add a comment" />
          <button>submit</button>
        </form>
      </div>
    </>
  );
}
