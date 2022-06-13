import { ChangeEvent, useState } from "react";
import { AddTaskFormCategory } from "./AddTaskCategory/AddTaskFormCategory";

import "./AddTaskFormCategories.css";

interface Props {
  parent: (value: string) => void;
}

export const AddTaskFormCategories = ({ parent }: Props) => {
  const [activeCategory, setActiveCategory] = useState("rekreacja");

  const isRadioSelected = (value: string): boolean => activeCategory === value;
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    parent(e.target.value);
    setActiveCategory(e.target.value);
  };

  return (
    <ul className="AddTaskFormCategories">
      <AddTaskFormCategory
        categoryName="rekreacja"
        categoryDotColor="orange"
        id="recreation"
        isRadioSelected={isRadioSelected}
        handleChange={handleChange}
      />
      <AddTaskFormCategory
        categoryName="technologia"
        categoryDotColor="yellow"
        id="technology"
        isRadioSelected={isRadioSelected}
        handleChange={handleChange}
      />
      <AddTaskFormCategory
        categoryName="osobiste"
        categoryDotColor="red"
        id="personal"
        isRadioSelected={isRadioSelected}
        handleChange={handleChange}
      />
      <AddTaskFormCategory
        categoryName="jedzenie"
        categoryDotColor="green"
        id="food"
        isRadioSelected={isRadioSelected}
        handleChange={handleChange}
      />
    </ul>
  );
};
