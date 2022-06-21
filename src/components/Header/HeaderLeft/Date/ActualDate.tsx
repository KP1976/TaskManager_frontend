import "./Date.css";

export const ActualDate = () => {
  const date = new Date();
  const dayMonthAndYear = date.toLocaleDateString();

  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();

  const fullDate = `${dayMonthAndYear}, ${hours}:${minutes}:${seconds}`;

  return <span className="Date">{fullDate}</span>;
};
