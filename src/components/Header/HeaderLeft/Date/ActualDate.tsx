import "./Date.css";
import { formatedDate } from "../../../../utils/formatedDate";

export const ActualDate = () => (
  <span className="Date">{formatedDate(new Date())}</span>
);
