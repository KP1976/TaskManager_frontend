import { CategoryIcon } from "./CategoryIcon/CategoryIcon";
import { Icons } from "./Icons/Icons";

import "./Task.css";

interface Props {
  id: number;
  category: string;
  createdAt: string;
  title: string;
  isDone: boolean;
}

export const Task = (props: Props) => (
  <li className="Task">
    <CategoryIcon category={props.category} />
    <div className="Task__texts">
      <h3 className="Task__title">{props.title}</h3>
      <span className="Task__date">{props.createdAt}</span>
    </div>
    <Icons />
  </li>
);
