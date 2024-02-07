import MultipleChoiceList from "@/components/choicelist/choicelist";
import { db } from "@/lib/db";

export default async function AddPaintsPage() {
  let productQuery = `SELECT * FROM products`;

  const res = await db.query(productQuery); // uses sqlQuery
  const products = res.rows;

  const dummyOptions = [
    { label: "Acrylic Paint", value: "acrylic", checked: true, id: "1" },
    { label: "Oil Paint", value: "oil", id: "2" },
    { label: "Watercolor Paint", value: "watercolor", id: "3" },
    { label: "Gouache Paint", value: "gouache", id: "4" },
  ];

  // Dummy onChange handler
  const handleChoiceChange = (selectedValues: any) => {
    console.log("Selected values:", selectedValues);
  };

  console.log(products);

  return (
    <>
      <h2>Add paints to your profile</h2>

      <MultipleChoiceList
        options={dummyOptions}
        name="paints"
        onChange={handleChoiceChange}
      />
    </>
  );
}
