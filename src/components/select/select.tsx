"use client";
import * as Select from "@radix-ui/react-select";
import { CheckIcon } from "@radix-ui/react-icons";
import { useSearchParams, useRouter } from "next/navigation";
import "./select.css";

export default function Selector() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const search = searchParams?.get("sort") ?? undefined; // ? is… optional chaining | sort is the key which be string, null or undefined | ?? is nullish coelesence

  const handleChange = (value: string) => {
    // useSearchParams(event.target.value);
    router.push(`?sort=${value}`);
    console.log(`value is: ${value}`);
  };

  return (
    <Select.Root onValueChange={handleChange}>
      <Select.Trigger className="SelectTrigger">
        <Select.Value placeholder="sort by…" />
        <Select.Icon className="SelectIcon" />
      </Select.Trigger>

      <Select.Portal>
        <Select.Content className="SelectContent" position="popper">
          <Select.Viewport className="SelectViewport">
            <Select.Group>
              <Select.Item className="SelectItem" value="products.name" key={1}>
                <Select.ItemText>Name</Select.ItemText>
                <Select.ItemIndicator className="SelectItemIndicator">
                  <CheckIcon />
                </Select.ItemIndicator>
              </Select.Item>
              <Select.Item className="SelectItem" value="colors" key={2}>
                <Select.ItemText> Color</Select.ItemText>
                <Select.ItemIndicator className="SelectItemIndicator">
                  <CheckIcon />
                </Select.ItemIndicator>
              </Select.Item>
              <Select.Item
                className="SelectItem"
                value="brand.brand_name"
                key={3}
              >
                <Select.ItemText>Brand</Select.ItemText>
                <Select.ItemIndicator className="SelectItemIndicator">
                  <CheckIcon />
                </Select.ItemIndicator>
              </Select.Item>
            </Select.Group>
          </Select.Viewport>
          <Select.Arrow />
        </Select.Content>
      </Select.Portal>
    </Select.Root>
  );
}
