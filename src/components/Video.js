import React from "react";
import "./Video.scss";
// import { useParams } from "react-router-dom";

function Video(props) {
  //   let { id } = useParams();
  let id = "6CHs4x2uqcQ";
  console.log(id);
  return (
    <div className="video">
      <h3 className="video-title">
         <u>Note from Fale Felix:</u>  I don't have access to the videos at the moment.
        Enjoy this beautiful song
      </h3>
      <iframe
        src={`https://www.youtube.com/embed/${id}`}
        title="Kanye West - Good Morning"
        frameborder="0"
        allowfullscreen
      ></iframe>
      {/* <iframe width="1027" height="578" src="https://www.youtube.com/embed/6CHs4x2uqcQ?list=PLYgAq_prE4ql2Xhq3Uln0qfOY38sGymoR" title="Kanye West - Good Morning" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> */}
    </div>
  );
}

export default Video;
