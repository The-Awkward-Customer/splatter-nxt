"use client";
import * as Select from "@radix-ui/react-select";
import { CheckIcon } from "@radix-ui/react-icons";
import "./select.css";

export default function Selector() {
  return (
    <Select.Root>
      <Select.Trigger className="SelectTrigger">
        <Select.Value placeholder="Sort by…" />
        <Select.Icon className="SelectIcon" />
      </Select.Trigger>

      <Select.Portal>
        <Select.Content className="SelectContent" position="popper">
          <Select.ScrollUpButton className="SelectScrollButton" />
          <Select.Viewport className="SelectViewport">
            <Select.Item className="SelectItem" value="value1">
              <Select.ItemText> Item One</Select.ItemText>
              <Select.ItemIndicator className="SelectItemIndicator">
                <CheckIcon />
              </Select.ItemIndicator>
            </Select.Item>

            <Select.Group>
              <Select.Label className="SelectLabel" />
              <Select.Item className="SelectItem" value="value2">
                <Select.ItemText>Item two</Select.ItemText>
                <Select.ItemIndicator className="SelectItemIndicator">
                  <CheckIcon />
                </Select.ItemIndicator>
              </Select.Item>
            </Select.Group>

            <Select.Separator />
          </Select.Viewport>
          <Select.ScrollDownButton />
          <Select.Arrow />
        </Select.Content>
      </Select.Portal>
    </Select.Root>
  );
}
