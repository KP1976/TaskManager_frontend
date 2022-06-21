import { HamburgerMenu } from "./HamburgerMenu/HamburgerMenu";
import { Title } from "./Title/Title";
import { ActualDate } from "./Date/ActualDate";

export const HeaderLeft = () => (
  <div className="HeaderLeft">
    <HamburgerMenu />
    <Title />
    <ActualDate />
  </div>
);
