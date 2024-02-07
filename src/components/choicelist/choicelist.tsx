"use client";
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

export default function MultipleChoiceList({
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

  // Adapting the handleCheckboxChange to fit CheckboxPrimitive's expected prop
  const handleCheckboxChange = (value: string) => (checked: boolean) => {
    if (checked) {
      setSelectedValues((current) => [...current, value]);
    } else {
      setSelectedValues((current) => current.filter((val) => val !== value));
    }
  };

  return (
    <Stack spacing={"m"}>
      {options.map((option, index) => (
        <CheckboxPrimitive
          asChild={true}
          key={index}
          label={option.label}
          name={name}
          value={option.value}
          id={option.id}
          checked={selectedValues.includes(option.value)}
          onChange={handleCheckboxChange(option.value)}
        />
      ))}
    </Stack>
  );
}
