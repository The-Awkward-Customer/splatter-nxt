"use client";
import * as Checkbox from "@radix-ui/react-checkbox";
import { CheckIcon } from "@radix-ui/react-icons";
import "./checkbox-primitive.css";
import React from "react";

interface CheckboxPrimitiveProps {
  id: string;
  label?: string;
  value: string;
  name: string;
  asChild: boolean;
  checked?: boolean;
  disabled?: boolean;
  required?: boolean;
  onChange: (checked: boolean) => void;
}

export default function CheckboxPrimitive({
  asChild,
  id,
  label,
  checked,
  name,
  value,
  onChange,
}: CheckboxPrimitiveProps) {
  return (
    <div className="CheckboxPrimitiveContainer">
      <Checkbox.Root
        className="CheckboxRoot"
        asChild={asChild}
        checked={checked}
        name={name}
        value={value}
        onCheckedChange={onChange}
      >
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
