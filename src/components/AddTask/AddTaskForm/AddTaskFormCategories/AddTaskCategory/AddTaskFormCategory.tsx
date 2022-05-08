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
  <li className="AddTaskFormCategory">
    <span className="AddTaskFormCategory__name">{categoryName}</span>
    <div
      className={`AddTaskFormCategory__dot AddTaskFormCategory__dot--${categoryDotColor}`}
    ></div>
    <input
      className="AddTaskFormCategory__checkbox"
      type="checkbox"
      checked={isActive}
    />
  </li>
);
