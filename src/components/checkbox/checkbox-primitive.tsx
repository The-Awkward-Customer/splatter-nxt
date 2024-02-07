"use client";
import * as Checkbox from "@radix-ui/react-checkbox";
import { CheckIcon } from "@radix-ui/react-icons";
import "./checkbox-primitive.css";
import React from "react";

interface CheckboxPrimitiveProps {
  id: string;
  label?: string;
  value: string;
  checked?: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function CheckboxPrimitive({
  id,
  label,
  checked,
  onChange,
}: CheckboxPrimitiveProps) {
  return (
    <div className="CheckboxPrimitiveContainer">
      <Checkbox.Root className="CheckboxRoot" checked={checked}>
        <Checkbox.Indicator className="CheckboxIndicator" id={id}>
          <CheckIcon />
        </Checkbox.Indicator>
      </Checkbox.Root>
      <label className="Label" htmlFor={id}>
        {label}
      </label>
    </div>
  );
}
