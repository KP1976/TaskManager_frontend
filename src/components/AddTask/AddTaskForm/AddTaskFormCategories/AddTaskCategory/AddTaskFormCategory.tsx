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
                                    }: Props) => (
  <li className="AddTaskForm__category">
    <span className="AddTaskForm__category-title">{categoryName}</span>
    <div
      className={`AddTaskForm__category-dot AddTaskForm__category-dot--${categoryDotColor}`}
    ></div>
    <input
      className="AddTaskForm__category-checkbox"
      type="checkbox"
      checked={isActive}
    />
  </li>
);
