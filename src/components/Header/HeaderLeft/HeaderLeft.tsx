import {HamburgerMenu} from "./HamburgerMenu/HamburgerMenu";
import {Title} from "./Title/Title";
import { Date } from "./Date/Date";

export const HeaderLeft = () => (
  <div className="HeaderLeft">
    <HamburgerMenu />
    <Title />
    <Date />
  </div>
);