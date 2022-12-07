import React from "react";
import { useParams } from "react-router-dom";

function Video(props) {
  //   let { id } = useParams();
  let id = "dNNH5k1qCR0";
  console.log(id);
  return (
    <div className="video">
      {/* <iframe
        src={`https://www.youtube.com/embed/${id}`}
        title="video"
        frameborder="0"
        allowfullscreen
      ></iframe> */}
      {/* <iframe
        width="751"
        height="563"
        src="https://www.youtube.com/embed/dNNH5k1qCR0?list=PLYgAq_prE4ql2Xhq3Uln0qfOY38sGymoR"
        title="Praye - Angelina"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe> */}
    </div>
  );
}

export default Video;
