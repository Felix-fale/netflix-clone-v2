import "./Banner.scss";

function Banner() {
  return (
    <header className="banner">
      <div className="banner__content">
        <h1 className="banner__title">Titre</h1>
        <p className="banner__description">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores ut
          vel culpa ipsam architecto expedita earum ipsa aperiam error id!
        </p>
        <div className="banner__buttons">
          <button className="banner__button banner__button--play">Lecture</button>
          <button className="banner__button">Plus d'infos</button>
        </div>
      </div>
    </header>
  );
}

export default Banner;
