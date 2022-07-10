import { useContext } from "react";
import { Category } from "./Category/Category";
import { TasksContext } from "../../../../context/TasksContext";

import "./CategoryList.css";

export const CategoryList = () => {
  const { tasks } = useContext(TasksContext);
  const categories = tasks.map((task) => task.category);
  const sumOfEachTaskCategory = {
    recreation: 0,
    personal: 0,
    technology: 0,
    food: 0,
  };

  categories.forEach((category) => {
    if (category === "rekreacja") {
      sumOfEachTaskCategory.recreation += 1;
    }
    if (category === "technologia") {
      sumOfEachTaskCategory.technology += 1;
    }
    if (category === "osobiste") {
      sumOfEachTaskCategory.personal += 1;
    }
    if (category === "jedzenie") {
      sumOfEachTaskCategory.food += 1;
    }
  });

  const sumOfAllCategories =
    sumOfEachTaskCategory.recreation +
    sumOfEachTaskCategory.technology +
    sumOfEachTaskCategory.personal +
    sumOfEachTaskCategory.food;

  return (
    <ul className="CategoryList">
      <Category
        categoryNumber={sumOfAllCategories}
        categoryName={"wszystkie"}
        categoryColor=""
      />
      <Category
        categoryNumber={sumOfEachTaskCategory.recreation}
        categoryName={"rekreacja"}
        categoryColor="orange"
      />
      <Category
        categoryNumber={sumOfEachTaskCategory.technology}
        categoryName={"technologia"}
        categoryColor="yellow"
      />
      <Category
        categoryNumber={sumOfEachTaskCategory.personal}
        categoryName={"osobiste"}
        categoryColor="red"
      />
      <Category
        categoryNumber={sumOfEachTaskCategory.food}
        categoryName={"jedzenie"}
        categoryColor="green"
      />
    </ul>
  );
};
