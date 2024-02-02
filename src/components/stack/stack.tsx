import { Children, ReactNode } from "react";
import "./stack.css";

export default function Stack({ children, spacing }: any) {
  // A helper function to validate and return the spacing class
  const getSpacingClass = (spacing: string) => {
    const allowedSpacings = ["s", "m", "l", "xl"];
    return allowedSpacings.includes(spacing) ? `spacing-${spacing}` : "";
  };

  // Combine 'HStack' with the dynamic spacing class
  const className = `HStack ${getSpacingClass(spacing)}`;
  return <section className={className}>{children}</section>;
}
