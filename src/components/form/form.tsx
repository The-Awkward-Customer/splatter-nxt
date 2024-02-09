"use client";

import Button from "../button/button";
import "./form.css";

// articulates the api for any inputs passed as children
interface InputDefinition {
  type: "text" | "email" | "password";
  name: string;
  placeholder?: string;
}

interface CheckboxGroupDefinition {}

interface FormComponentProps {
  inputs: InputDefinition[];
  submitButtonLabel: string;
}

export default function SimpleForm() {
  return <form className="SimpleForm">inputs</form>;
}
