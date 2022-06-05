import { ChangeEvent } from "react";

import "./AddTaskFormCategory.css";

interface Props {
  categoryName: string;
  categoryDotColor: string;
  id: string;
  isRadioSelected: (value: string) => boolean;
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

export const AddTaskFormCategory = ({
  categoryName,
  categoryDotColor,
  id,
  isRadioSelected,
  handleChange,
}: Props) => {
  return (
    <li className="AddTaskFormCategory">
      <span className="AddTaskFormCategory__name">{categoryName}</span>
      <div
        className={`AddTaskFormCategory__dot AddTaskFormCategory__dot--${categoryDotColor}`}
      ></div>
      <label className="AddTaskFormCategory__radio-container" htmlFor={id}>
        <input
          className="AddTaskFormCategory__radio"
          checked={isRadioSelected(categoryName)}
          onChange={handleChange}
          type="radio"
          name="category"
          value={categoryName}
          id={id}
        />
        <span className="AddTaskFormCategory__checkmark"></span>
      </label>
    </li>
  );
};
