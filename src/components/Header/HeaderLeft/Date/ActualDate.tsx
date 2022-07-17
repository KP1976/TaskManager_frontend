import { formatedDate } from "../../../../utils/formatedDate";

import "./ActualDate.css";

export const ActualDate = () => {
  const year = new Date().getFullYear();
  const month = new Date().getMonth();
  const day = new Date().getDate();
  const dayOfTheWeek = new Date().getDay();
  const daysOfTheWeek = [
    "niedziela",
    "poniedziałek",
    "wtorek",
    "środa",
    "czwartek",
    "piątek",
    "sobota",
  ];
  const months = [
    "styczeń",
    "luty",
    "marzec",
    "kwiecień",
    "maj",
    "czerwiec",
    "lipiec",
    "sierpień",
    "wrzesień",
    "październik",
    "listopad",
    "grudzień",
  ];

  console.log(dayOfTheWeek);

  return (
    <>
      <div className="ActualDate-desktop-container">
        <p className="ActualDate-desktop-container-date">
          Rok:{" "}
          <span className="ActualDate-desktop-container-date__year">
            {year}
          </span>
        </p>
        <p className="ActualDate-desktop-container-date">
          Miesiąc:{" "}
          <span className="ActualDate-desktop-container-date__month">
            {months[month]}
          </span>
        </p>
        <p className="ActualDate-desktop-container-date">
          Dzień:{" "}
          <span className="ActualDate-desktop-container-date__day">
            {day},{" "}
          </span>
          <span className="ActualDate-desktop-container-date__day-of-the-week">
            {daysOfTheWeek[dayOfTheWeek]}
          </span>
        </p>
      </div>
      <span className="ActualDate">{formatedDate(new Date())}</span>
    </>
  );
};
