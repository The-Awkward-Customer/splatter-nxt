import { db } from "@/lib/db";
import { FormEvent } from "react";

interface ProductDetails {
  id: number;
  name: string;
  category_id: number;
  brand_id: number;
}
// this does not work because {params} is a deconstructed obejct
// interface Params {
//   id: string;
// }

// route params declares the shape of the deconstructed params
interface RouteParams {
  params: {
    id: string;
  };
}

export default async function PaintDetailsPage({ params }: RouteParams) {
  //loadDetails
  async function loadDetails(id: string) {
    console.log(id);
    const res = await db.query(`SELECT * FROM products WHERE id = $1`, [id]); // Parametised to secure against sql injectio (chatGPT reminded me)
    console.log(res.rows);
    return res.rows;
  }
  // call loadDetails and pass params.id
  const details = await loadDetails(params.id);
  console.log(details);

  async function onSubmit(formData: FormData) {
    "use server";
    console.log("hello");
    const comment = formData.get("comment");
    console.log(comment);

    console.log(`the page id is: ${params.id}`);
    let sqlInsert = `INSERT INTO comments (product_id, comment_text) VALUES ($1, $2)`;
    await db.query(sqlInsert, [params.id, comment]);
    console.log(`Id: ${params.id}, Comment: ${comment}`);
  }

  // // Nested async goes here?
  // async function onSubmit(event: FormEvent<HTMLFormElement>) {

  //   // get form data
  //   event.preventDefault();
  //   // const formData = new FormData(formData.currentTarget);
  //   // const comment = formData.get("comment");
  //   // console.log(comment);

  //   // let sqlInsert = `INSERT INTO comments (product_id, comment_text) VALUES ($1, $2)`;
  //   // await db.query(sqlInsert, [params.id, comment]);
  //   // console.log(`Id: ${params.id}, Comment: ${comment}`);
  // }

  return (
    <>
      <h3>Paint details</h3>
      {details.map((productDetails: ProductDetails) => (
        <ul key={productDetails.id}>
          <p>paint name is {productDetails.name}</p>
          <p>paint id is {productDetails.id}</p>
          <p>paint category_id is {productDetails.category_id}</p>
          <p>paint brand_id is {productDetails.brand_id}</p>
        </ul>
      ))}

      <div>
        <h2>add a comment</h2>
        <form action={onSubmit}>
          <label htmlFor="commentInput"> Name</label>
          <input name="comment" id="commentInput" placeholder="Add a comment" />
          <button type="submit">submit</button>
        </form>
      </div>
    </>
  );
}
