import "./CategoryList.css";
import {Category} from "./Category/Category";

export const CategoryList = () => (
  <ul className="CategoryList">
    <Category categoryNumber={8} categoryName={"rekreacja"} />
    <Category categoryNumber={11} categoryName={"technologia"} />
    <Category categoryNumber={10} categoryName={"osobiste"} />
    <Category categoryNumber={5} categoryName={"jedzenie"} />
  </ul>
);
