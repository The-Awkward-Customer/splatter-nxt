import Link from "next/link";
import "./listitem.css";
import { Children, ReactNode } from "react";
import { CheckCircledIcon, ChevronRightIcon } from "@radix-ui/react-icons";

export default function ListItem(
  { id, name, color, product, brand }: any,
  icon: ReactNode
) {
  return (
    <Link href={`/mypaints/${id}`} key={id} className="ListItemLink">
      <div className="ListItemContent">
        <p className="ListItemTitle">{name}</p>
        <p className="ListItemColors">{color}</p>
        <p className="ListItemDetails">
          {product} | {brand}
        </p>
      </div>
      <ChevronRightIcon />
    </Link>
  );
}
