import { db } from "@/lib/db";

export default async function AddPaintsPage() {
  "use client";
  let productQuery = `SELECT p.*, 
  CASE 
      WHEN upj.product_id IS NOT NULL THEN true
      ELSE false
  END AS hasProduct
FROM products p
LEFT JOIN user_products_junction upj ON p.id = upj.product_id AND upj.user_id = '41bb107e-dd83-40e6-bab4-3016d28e0996'
`;

  const res = await db.query(productQuery); // uses sqlQuery
  const products = res.rows;

  console.log(products);

  return (
    <>
      <h2>Add paints to your profile</h2>

      <form>
        {products.map((product) => (
          <div key={product.id}>
            <input
              type="checkbox"
              id={product.id}
              name={product.name}
              checked={product.hasproduct}
            />
            <label htmlFor={product.name}>{product.name}</label>
          </div>
        ))}
        <button type="submit">Submit</button>
      </form>
    </>
  );
}
