import { db } from "@/lib/db";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

interface ProductDetails {
  id: number;
  name: string;
  category_id: number;
  brand_id: number;
  comments: string[];
}

// route params declares the shape of the deconstructed params
interface RouteParams {
  params: {
    id: string;
  };
}

export default async function PaintDetailsPage({ params }: RouteParams) {
  //loadDetails
  // async function loadDetails(id: string) {
  let sql = `SELECT * FROM products WHERE id = $1`;

  let sqlQuery = `
  SELECT
    products.id,
    products.name,
    categories.product_type,
    brand.brand_name,
    company.company_name,
    string_agg(
      colors.color,
      ', '
      ORDER by
        colors.color
    ) AS colors,
    string_agg(distinct comments.comment_text, ' | ') AS comments
  FROM
    products
    join categories on products.category_id = categories.id
    join brand on products.brand_id = brand.id
    join company on brand.company_id = company.id
    join product_color_junction on products.id = product_color_junction.product_id
    join colors on product_color_junction.color_id = colors.id
    left join comments on products.id = comments.product_id
  WHERE
    products.id = $1
  GROUP by
    products.id,
    products.name,
    categories.product_type,
    brand.brand_name,
    company.company_name
`;

  console.log(params.id);
  const details = await db.query(sqlQuery, [params.id]); // Parametised to secure against sql injectio (chatGPT reminded me)
  console.log(details.rows);
  //   return res.rows;
  // }
  // call loadDetails and pass params.id
  // const details = await loadDetails(params.id);
  console.log(details);

  // handles submit
  async function onSubmit(formData: FormData) {
    "use server";
    console.log("hello");
    const comment = formData.get("comment");
    console.log(comment);

    console.log(`the page id is: ${params.id}`);
    let sqlInsert = `INSERT INTO comments (product_id, comment_text) VALUES ($1, $2)`;
    await db.query(sqlInsert, [params.id, comment]);
    console.log(`Id: ${params.id}, Comment: ${comment}`);

    revalidatePath(`/mypaints/${params.id}`);
    redirect(`/mypaints/${params.id}`);
  }

  return (
    <>
      <h3>Paint details</h3>
      {details.rows.map((productDetails: ProductDetails) => (
        <ul key={productDetails.id}>
          <p>paint name is {productDetails.name}</p>
          <p>paint id is {productDetails.id}</p>
          <p>paint category_id is {productDetails.category_id}</p>
          <p>paint brand_id is {productDetails.brand_id}</p>
          <p>comments are: {productDetails.comments}</p>
        </ul>
      ))}

      <div>
        <h2>add a comment</h2>
        <form id="commentForm" action={onSubmit}>
          <label htmlFor="commentInput"> Name</label>
          <input name="comment" id="commentInput" placeholder="Add a comment" />
          <button type="submit">submit</button>
        </form>
      </div>
    </>
  );
}
