"use client";

import { ReactNode } from "react";
import Stack from "../stack/stack";
import CheckboxPrimitive from "../checkbox/checkbox-primitive";
import { useState, useEffect } from "react";

interface CheckboxOptions {
  label?: string;
  value: string;
  checked?: boolean;
  id: string;
}

interface ChoiceListProps {
  options: CheckboxOptions[];
  name: string;
  onChange: (selectedValues: string[]) => void; // Handler to update the form state
}

export default function ChoiceList({
  options,
  name,
  onChange,
}: ChoiceListProps) {
  // State to track selected options
  const [selectedValues, setSelectedValues] = useState<string[]>(
    options.filter((option) => option.checked).map((option) => option.value)
  );

  useEffect(() => {
    // Invoke the passed onChange function whenever selectedValues changes
    onChange(selectedValues);
  }, [selectedValues, onChange]);

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    if (event.target.checked) {
      setSelectedValues((current) => [...current, value]);
    } else {
      setSelectedValues((current) => current.filter((val) => val !== value));
    }
  };

  // logic goes here
  // call onchange used by form
  //logic for handling choicelist state here
  return (
    <Stack spacing={"m"}>
      {options.map((option, index) => (
        <CheckboxPrimitive
          key={index}
          label={option.label}
          value={option.value}
          id={option.id}
          checked={selectedValues.includes(option.value)}
          onChange={handleCheckboxChange}
        />
      ))}
    </Stack>
  );
}
