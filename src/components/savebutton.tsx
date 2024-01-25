"use client";
import { useFormStatus } from "react-dom";

export default function SaveButton() {
  const { pending } = useFormStatus();
  console.log(pending);

  return (
    <button disabled={pending} className={pending ? "disabled" : ""}>
      {pending ? "uploading" : "submit"}
    </button>
  );
}
