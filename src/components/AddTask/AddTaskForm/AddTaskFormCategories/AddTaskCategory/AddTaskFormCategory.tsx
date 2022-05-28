import { FormEvent, useState } from "react";

import "./AddTaskFormCategory.css";

interface Props {
  categoryName: string;
  categoryDotColor: string;
  isActive: boolean;
}

export const AddTaskFormCategory = ({
  categoryName,
  categoryDotColor,
  isActive,
}: Props) => {
  const [active, setActive] = useState(isActive);

  const handleChange = (e: FormEvent) => {
    setActive((e.target as HTMLInputElement).checked);
  };

  return (
    <li className="AddTaskFormCategory">
      <span className="AddTaskFormCategory__name">{categoryName}</span>
      <div
        className={`AddTaskFormCategory__dot AddTaskFormCategory__dot--${categoryDotColor}`}
      ></div>
      <label
        className="AddTaskFormCategory__radio-container"
        htmlFor={categoryName}
      >
        <input
          className="AddTaskFormCategory__radio"
          checked={active}
          id={categoryName}
          name="category"
          onChange={handleChange}
          type="radio"
        />
        <span className="AddTaskFormCategory__checkmark"></span>
      </label>
    </li>
  );
};
