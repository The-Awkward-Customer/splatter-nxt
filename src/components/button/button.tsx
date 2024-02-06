"use client";
import "./button.css";

import { PlusIcon } from "@radix-ui/react-icons";
import { useRouter } from "next/navigation";

export default function Button({ route }: any) {
  const router = useRouter();

  return (
    <button className="IconButton" onClick={() => router.push(`${route}`)}>
      <PlusIcon />
    </button>
  );
}
