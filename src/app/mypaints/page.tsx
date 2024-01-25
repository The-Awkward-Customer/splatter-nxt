import { db } from "@/lib/db";

interface PaintObj {
  name: string;
  product_type: string;
  brand_name: string;
  company_name: string;
  colors: string;
}

export default async function MyPaints() {
  //api call
  //fetch await (function needs to be async)

  //pg uses sql queries rather than a fetch
  const res = await db.query(`SELECT 
  products.name, 
  categories.product_type, 
  brand.brand_name,      
  company.company_name, 
  STRING_AGG(colors.color, ', ' ORDER BY colors.color) AS colors
FROM products
JOIN categories ON products.category_id = categories.id
JOIN brand ON products.brand_id = brand.id
JOIN company ON brand.company_id = company.id
JOIN product_color_junction ON products.id = product_color_junction.product_id
JOIN colors ON product_color_junction.color_id = colors.id
GROUP BY products.name, categories.product_type, brand.brand_name, company.company_name`); // call the api
  console.log(res.rows);

  // map through retreived data and populate map
  return (
    <>
      <h2>MyPaints</h2>
      {res.rows.map((paintObj: PaintObj) => (
        <li key={paintObj.name}>{paintObj.name}</li>
      ))}
    </>
  );
}
