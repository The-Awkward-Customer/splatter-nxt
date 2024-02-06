"use client";
import * as Checkbox from "@radix-ui/react-checkbox";
import { CheckIcon } from "@radix-ui/react-icons";
import "./checkbox.css";

export default function SimpleCheckbox() {
  return (
    <form className="SimpleCheckboxForm">
      <div className="SimpleCheckboxRow">
        <Checkbox.Root className="CheckboxRoot">
          <Checkbox.Indicator className="CheckboxIndicator" id="c1">
            <CheckIcon />
          </Checkbox.Indicator>
        </Checkbox.Root>
        <label className="Label" htmlFor="c1">
          Accept terms and conditions.
        </label>
      </div>
    </form>
  );
}
