import { AddTaskFormCategory } from "./AddTaskCategory/AddTaskFormCategory";

import "./AddTaskFormCategories.css";

export const AddTaskFormCategories = () => (
  <ul className="AddTaskFormCategories">
    <AddTaskFormCategory
      categoryName={"rekreacja"}
      categoryDotColor={"orange"}
      isActive={true}
    />
    <AddTaskFormCategory
      categoryName={"technologia"}
      categoryDotColor={"yellow"}
      isActive={false}
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
