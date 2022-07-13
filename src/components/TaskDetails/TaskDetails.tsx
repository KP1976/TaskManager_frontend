import { formatedDate } from "../../utils/formatedDate";

import "./TaskDetails.css";

interface Props {
  id: string;
  title: string;
  category: string;
  createdAt: Date;
}

enum DotColors {
  orange = "orange",
  yellow = "yellow",
  red = "red",
  green = "green",
}
const months = [
  "stycznia",
  "lutego",
  "marca",
  "kwietnia",
  "maja",
  "czerwca",
  "lipca",
  "sierpnia",
  "września",
  "października",
  "listopada",
  "grudnia",
];

export const TaskDetails = ({ id, title, category, createdAt }: Props) => {
  let dotColor = "";
  const day = formatedDate(createdAt).split(",")[0].split(".")[0];
  const month =
    months[Number(formatedDate(createdAt).split(",")[0].split(".")[1]) - 1];
  const year = formatedDate(createdAt).split(",")[0].split(".")[2];
  const time = formatedDate(createdAt).split(",")[1];

  switch (category) {
    case "rekreacja":
      dotColor = DotColors.orange;
      break;
    case "technologia":
      dotColor = DotColors.yellow;
      break;
    case "osobiste":
      dotColor = DotColors.red;
      break;
    case "jedzenie":
      dotColor = DotColors.green;
      break;
    default:
      break;
  }

  return (
    <div className="TaskDetails">
      <h2 className="TaskDetails__title">szczegóły zadania</h2>
      <h3 className="TaskDetails__subtitle">Nazwa zadania</h3>
      <p className="TaskDetails__task-title">{title}</p>
      <h3 className="TaskDetails__subtitle">Typ zadania</h3>
      <p className="TaskDetails__task-category">
        <span
          className={`TaskDetails__task-category-dot TaskDetails__task-category-dot--${dotColor}`}
        ></span>
        <span className="TaskDetails__task-category-name">{category}</span>
      </p>
      <h3 className="TaskDetails__subtitle">Data utworzenia zadania</h3>
      <p className="TaskDetails__task-category">
        {day} {month} {year}
      </p>
      <h3 className="TaskDetails__subtitle">Godzina utworzenia zadania</h3>
      <p className="TaskDetails__task-category">{time}</p>
      <button className="TaskDetails__modify-button">modyfikuj zadanie</button>
    </div>
  );
};
