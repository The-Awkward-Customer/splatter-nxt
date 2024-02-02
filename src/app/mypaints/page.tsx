import Dropdown from "@/components/dropdown";
import { db } from "@/lib/db";
import Link from "next/link";
import ListItem from "@/components/listItem/listitem";
import Selector from "@/components/select/select";

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

  return (
    <>
      <h2>MyPaints</h2>
      {/* <Dropdown /> */}
      <Selector />

      {res.rows.map((paintObj: PaintObj) => (
        <ListItem
          id={paintObj.id}
          name={paintObj.name}
          color={paintObj.colors}
          product={paintObj.product_type}
          brand={paintObj.brand_name}
        />
      ))}
    </>
  );
}
