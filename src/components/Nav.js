import "./Nav.scss";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import RedeemIcon from "@material-ui/icons/Redeem";
import NotificationsIcon from "@material-ui/icons/Notifications";
import { useState } from "react";

function Nav() {
  // scrool (detecter la transiton quand on scrool)
  const [navBlack, setNavBlack] = useState(false);
  const [toggleMenu, setToggleMenu] = useState(false);

  const transitionNav = () => {
    window.scrollY > 100 ? setNavBlack(true) : setNavBlack(false);
  };

  useState(() => {
    document.addEventListener("scroll", transitionNav);
  });

  //  Derouler le toggleMenu
  const handleClick = () => {
    toggleMenu ? setToggleMenu(false) : setToggleMenu(true);
    console.log(toggleMenu);
  };

  
  return (
    // 1- if navBlack is true add "nav--black"

    <div className={`nav ${navBlack || toggleMenu ? "nav--black" : 'nav--transparent'}  ${toggleMenu && "show"}`}>
      <button className="nav__burger" onClick={handleClick}>
        <MenuIcon></MenuIcon>
      </button>
      <img src="./images/logo.png" className="nav__logo" alt="Netflix" />
      <nav className="nav__links">
        <a href="/" className="nav__link">
          Accueil
        </a>
        <a href="/" className="nav__link">
          Series
        </a>
        <a href="/" className="nav__link">
          Films
        </a>
      </nav>
      <div className="nav__actions">
        <a href="/" className="nav__action">
          <SearchIcon></SearchIcon>
        </a>
        <a href="/" className="nav__action">
          DIRECT
        </a>
        <a href="/" className="nav__action">
          <RedeemIcon></RedeemIcon>
        </a>
        <a href="/" className="nav__action">
          <NotificationsIcon></NotificationsIcon>
        </a>
        <a href="/" className="nav__action">
          <img src="./images/avatar.jpg" alt="avatar" />
        </a>
      </div>
    </div>
  );
}

export default Nav;
// 24m00s
