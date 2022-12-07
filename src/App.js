import { Routes, Route } from "react-router";
import "./App.scss";
import Home from "./components/Home";
import Video from "./components/Video";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/video/:id" element={<Video />}></Route>
      </Routes>
    </div>
  );
}

export default App;

// https://www.youtube.com/watch?v=qQT_vadvUmM&t=90s lien du cours
