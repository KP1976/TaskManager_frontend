import { CategoryIcon } from "./CategoryIcon/CategoryIcon";
import { Icons } from "./Icons/Icons";

import "./Task.css";

interface Props {
  id: string;
  title: string;
  createdAt: string;
  category: string;
  isDone: boolean;
}

export const Task = (props: Props) => {
  const { category, title, createdAt } = props;
  const dateArray: string[] = createdAt.split(/[-T.]/);

  dateArray.pop();

  const [year, month, day, time] = dateArray;
  return (
    <li className="Task">
      <CategoryIcon category={category} />
      <div className="Task__texts">
        <h3 className="Task__title">{title}</h3>
        <span className="Task__date">
          {day}.{month}.{year}, {time}
        </span>
      </div>
      <Icons />
    </li>
  );
};
