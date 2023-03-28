"use client";

import Select from "react-select";

const options = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
];

export const EnterLogForm = () => (
  <Select className="surface-alt text" options={options} />
);
