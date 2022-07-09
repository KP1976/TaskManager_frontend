import "./ActualDate.css";
import { formatedDate } from "../../../../utils/formatedDate";

export const ActualDate = () => (
  <span className="ActualDate">{formatedDate(new Date())}</span>
);
