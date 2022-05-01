import "./Category.css";

interface Props {
  categoryNumber: number;
  categoryName: string;
}

export const Category = ({ categoryNumber, categoryName }: Props) => (
  <li className="Category">
    <span className="Category__number">{categoryNumber}</span>
    <span className="Category__name">{categoryName}</span>
  </li>
);
