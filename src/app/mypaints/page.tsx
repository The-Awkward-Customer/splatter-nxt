import Dropdown from "@/components/dropdown";
import { db } from "@/lib/db";
import { revalidatePath } from "next/cache";
import Link from "next/link";

interface PaintObj {
  id: number;
  name: string;
  product_type: string;
  brand_name: string;
  company_name: string;
  colors: string;
}

interface Params {
  searchParams: { sort?: string; sortBy?: string; order?: string }; // ? is a shortcut for undefined
}

export default async function MyPaints({ searchParams }: Params) {
  console.log(searchParams);

  //we declare the query as a let variable
  let sqlQuery = `SELECT 
  products.id,
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
  GROUP BY products.id, products.name, categories.product_type, brand.brand_name, company.company_name`;

  const validSortColumns = [
    "products.name",
    "brand.brand_name",
    "categories.product_name",
    "colors",
  ];

  // Add sorting to the SQL query based on searchParams
  if (validSortColumns.includes(searchParams.sort || "")) {
    // Ensure that the sortBy parameter is a valid column name to prevent SQL injection
    sqlQuery += ` ORDER BY ${searchParams.sort}`;
  }

  console.log(sqlQuery);
  const res = await db.query(sqlQuery); // uses sqlQuery

  // map through retreived data and populate map
  // if (searchParams.sort === "desc") {
  //   res.rows.reverse();
  // }

  revalidatePath("/mypaints");

  return (
    <>
      <h2>MyPaints</h2>
      <Dropdown />
      {res.rows.map((paintObj: PaintObj) => (
        <div key={paintObj.id}>
          <Link href={`/mypaints/${paintObj.id}`}>{paintObj.name}</Link>
          <p>Brand: {paintObj.brand_name}</p>
          <p>Product type: {paintObj.product_type}</p>
          <p>Colors: {paintObj.colors}</p>
        </div>
      ))}
    </>
  );
}
