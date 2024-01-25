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
        <ul key={productDetails.id}>
          <p>paint name is {productDetails.name}</p>
          <p>paint id is {productDetails.id}</p>
          <p>paint category_id is {productDetails.category_id}</p>
          <p>paint brand_id is {productDetails.brand_id}</p>
        </ul>
      ))}
    </>
  );
}
