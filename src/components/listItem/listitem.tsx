import Link from "next/link";

export default function ListItem({ id, name, color, product, brand }: any) {
  return (
    <div key={id}>
      <Link href={`/mypaints/${id}`}>{name}</Link>
      <p>{color}</p>
      <p>{product}</p>
      <p>{brand}</p>
    </div>
  );
}
