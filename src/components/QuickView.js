import "./QuickView.scss";
import CancelIcon from "@material-ui/icons/Cancel";

function QuickView({ bannerStyle, movie, popup, popupStatut }) {
  return (
    <div className={`quickView ${popupStatut && "open"}`}>
      <div className="quickView__banner" style={bannerStyle}>
        <div className="quickView__content">
          <h3 className="quickView__title">
            {movie?.title || movie?.name || movie?.original_title}
          </h3>
          <p>
          {(movie?.overview)}
          </p>
        </div>
        <button className="quickView__close" onClick={popup}>
          <CancelIcon fontSize="large"></CancelIcon>
        </button>
      </div>
    </div>
  );
}

export default QuickView;
