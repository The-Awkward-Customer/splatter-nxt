import CheckboxPrimative from "@/components/checkbox/checkbox-primitive";
import { db } from "@/lib/db";

export default async function AddPaintsPage() {
  let productQuery = `SELECT * FROM products`;

  const res = await db.query(productQuery); // uses sqlQuery
  const products = res.rows;

  console.log(products);

  return (
    <>
      <h2>Add paints to your profile</h2>

      <CheckboxPrimative id={"c1"} label="I am the label" />
    </>
  );
}
