import "./Date.css";

export const ActualDate = () => {
  const date = new Date();
  const dayMonthAndYear = date.toLocaleDateString();

  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");

  const fullDate = `${dayMonthAndYear}, ${hours}:${minutes}:${seconds}`;

  return <span className="Date">{fullDate}</span>;
};
