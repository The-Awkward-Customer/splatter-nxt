"use client";
import React, { useState } from "react";

export default function Dropdown() {
  const [selectedOption, setSelectedOption] = useState("option 1");

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedOption(event.target.value);
  };

  return (
    <>
      <label htmlFor="something-select">choose a thing</label>
      <select
        name="thing"
        id="thing-select"
        value={selectedOption}
        onChange={handleChange}
      >
        <option value="option 1">option 1</option>
        <option value="option 2">option 2</option>
        <option value="option 3">option 3</option>
        <option value="option 4">option 4</option>
        <option value="option 5">option 5</option>
      </select>

      <p>the value is: {selectedOption}</p>
    </>
  );
}
