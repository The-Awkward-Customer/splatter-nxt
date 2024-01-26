"use client";

import { useSearchParams, useRouter, usePathname } from "next/navigation";

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

  const asc = "asc";
  const desc = "desc";

  return (
    <>
      <label htmlFor="something-select">choose a thing</label>
      <select
        name="thing"
        id="thing-select"
        value={search}
        onChange={handleChange}
      >
        <option value={asc}>ascending</option>
        <option value={desc}>descending</option>
      </select>
    </>
  );
}

// const [selectedOption, setSelectedOption] = useState("option 1");

// const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
//   setSelectedOption(event.target.value);
// };
