import "./Nav.scss";

function Nav() {
  return (
    <div className="nav nav--black">
      <button className="nav__burger">---</button>
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
            search
        </a>
        <a href="/" className="nav__action">
            DIRECT
        </a>
        <a href="/" className="nav__action">
            Gift
        </a>
        <a href="/" className="nav__action">
            Notif
        </a>
        <a href="/" className="nav__action">
            <img src="./images/avatar.jpg" alt="avatar" />
        </a>
      </div>
    </div>
  );
}

export default Nav;
