"use client";

import Button from "../button/button";
import "./form.css";

// articulates the api for any inputs passed as children
interface InputDefinition {
  type: "text" | "email" | "password";
  name: string;
  placeholder?: string;
}

interface FormComponentProps {
  inputs: InputDefinition[];
  submitButtonLabel: string;
}

export default function SimpleForm() {
  return (
    <>
      <button ty> submit </button>
    </>
  );
}
