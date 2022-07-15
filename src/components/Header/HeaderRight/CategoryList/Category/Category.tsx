import "./Category.css";

interface Props {
  categoryNumber: number;
  categoryName: string;
  categoryColor: "orange" | "yellow" | "red" | "green" | "";
}

export const Category = ({
  categoryNumber,
  categoryName,
  categoryColor,
}: Props) => (
  <li className="Category">
    <span className="Category__number">{categoryNumber}</span>
    <span className="Category__name">{categoryName}</span>
    <div
      className={
        categoryColor
          ? `AddTaskFormCategory__dot AddTaskFormCategory__dot--${categoryColor}`
          : "AddTaskFormCategory__dot"
      }
    ></div>
  </li>
);
