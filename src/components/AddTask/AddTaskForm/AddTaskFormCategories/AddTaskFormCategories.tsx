import { AddTaskFormCategory } from "./AddTaskCategory/AddTaskFormCategory";

import "./AddTaskFormCategories.css";

export const AddTaskFormCategories = () => (
  <ul className="AddTaskFormCategories">
    <AddTaskFormCategory
      categoryName={"rekreacja"}
      categoryDotColor={"orange"}
      isActive={false}
    />
    <AddTaskFormCategory
      categoryName={"technologia"}
      categoryDotColor={"yellow"}
      isActive={true}
    />
    <AddTaskFormCategory
      categoryName={"osobiste"}
      categoryDotColor={"red"}
      isActive={false}
    />
    <AddTaskFormCategory
      categoryName={"jedzenie"}
      categoryDotColor={"green"}
      isActive={false}
    />
  </ul>
);
