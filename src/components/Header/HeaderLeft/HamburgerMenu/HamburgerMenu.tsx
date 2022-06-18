import { useRef } from "react";

import "./HamburgerMenu.css";

export const HamburgerMenu = () => {
  const hamburgerMenu = useRef<HTMLButtonElement>(null);
  const topBarMenu = useRef<HTMLDivElement>(null);
  const middleBarMenu = useRef<HTMLDivElement>(null);
  const bottomBarMenu = useRef<HTMLDivElement>(null);

  const toggleMobileMenu = () => {
    topBarMenu.current?.classList.toggle("turn-right");
    middleBarMenu.current?.classList.toggle("vanished");
    bottomBarMenu.current?.classList.toggle("turn-left");
    // hamburgerMenu.current?.classList.toggle("s");
  };

  return (
    <button
      ref={hamburgerMenu}
      className="HamburgerMenu"
      onClick={toggleMobileMenu}
    >
      <div ref={topBarMenu} className="HamburgerMenu__top"></div>
      <div ref={middleBarMenu} className="HamburgerMenu__middle"></div>
      <div ref={bottomBarMenu} className="HamburgerMenu__bottom"></div>
    </button>
  );
};
