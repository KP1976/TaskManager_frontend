import { HeaderLeft } from "./HeaderLeft/HeaderLeft";
import { HeaderRight } from "./HeaderRight/HeaderRight";

import "./Header.css";

export const Header = () => (
  <div className="Header">
    <HeaderLeft />
    <HeaderRight />
  </div>
);
