import { ReactNode } from "react";
import "./stack.css";

type Spacing = "s" | "m" | "l" | "xl";

interface StackProps {
  children?: ReactNode;
  spacing: Spacing; // Use the Spacing type here
}

export default function Stack({ children, spacing }: StackProps) {
  // A helper function to validate and return the spacing class
  const getSpacingClass = (spacing: Spacing) => {
    const allowedSpacings = ["s", "m", "l", "xl"];
    return allowedSpacings.includes(spacing) ? `spacing-${spacing}` : "";
  };

  // Combine 'HStack' with the dynamic spacing class
  const className = `HStack ${getSpacingClass(spacing)}`;
  return <section className={className}>{children}</section>;
}
