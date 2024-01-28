"use client";
import { useSearchParams, useRouter } from "next/navigation";
import { revalidatePath } from "next/cache";

//this now uses url routing
export default function Dropdown() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const search = searchParams?.get("sort") ?? undefined; // ? is… optional chaining | sort is the key which be string, null or undefined | ?? is nullish coelesence

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    // useSearchParams(event.target.value);
    const selectedValue = event.target.value;
    router.push(`?sort=${selectedValue}`);
  };

  return (
    <>
      <label htmlFor="something-select">choose a thing</label>
      <select
        name="thing"
        id="thing-select"
        value={search}
        onChange={handleChange}
      >
        <option value="product.name">Name</option>
        <option value="brand.brand_name">Brand</option>
        <option value="categories.product_type">Product Type</option>
        <option value="colors">Color</option>
        <option value="asc">Ascending</option>
        <option value="desc">Descendig</option>
      </select>
    </>
  );
}

// const [selectedOption, setSelectedOption] = useState("option 1");

// const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
//   setSelectedOption(event.target.value);
// };
