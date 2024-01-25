import { db } from "@/lib/db";

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
  console.log(params);
  const res = await db.query(`SELECT * FROM products WHERE id = $1`, [
    params.id,
  ]); // Parametised to secure against sql injectio (chatGPT reminded me)
  console.log(res.rows);
  return (
    <>
      <h3>Paint details</h3>
      {res.rows.map((productDetails: ProductDetails) => (
        <ul>
          <p key={productDetails.name}>paint name is {productDetails.name}</p>
          {/* <p key={productDetails.id}>paint id is {productDetails.id}</p>
          <p key={productDetails.category_id}>
            paint category_id is {productDetails.category_id}
          </p>
          <p key={productDetails.brand_id}>
            paint brand_id is {productDetails.brand_id}
          </p> */}
        </ul>
      ))}
    </>
  );
}
