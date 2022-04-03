import { HamburgerMenu } from "./HamburgerMenu/HamburgerMenu";
import { Category } from "./Category/Category";
import { Title } from "./Title/Title";
import { Date } from "./Date/Date";

import "./Header.css";

export const Header = () => (
  <div className="Header">
    <HamburgerMenu />
    <Category />
    <Title />
    <Date />
  </div>
);
