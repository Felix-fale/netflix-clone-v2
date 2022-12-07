import "./App.scss";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Banner from "./components/Banner";
import Row from "./components/Row";
import requests from "./config/Requests";

function App() {
  return (
    <div className="App">
      {/* navbar */}
      <Nav></Nav>

      {/* banner */}
      <Banner></Banner>

      {/* rows */}
      <Row
        title="Programmes originaux Netflix"
        fetchUrl={requests.fetchNetflixOriginals}
        isPoster={true}
      ></Row>
      <Row
        title="Tendances actuelles"
        fetchUrl={requests.fetchTrending}
      ></Row>
      <Row title="Les mieux notés" fetchUrl={requests.fetchTopRated}></Row>
      <Row title="Films d'action" fetchUrl={requests.fetchActionMovies}></Row>
      <Row title="Films d'horreur" fetchUrl={requests.fetchTrending}></Row>
      <Row title="Comédies" fetchUrl={requests.fetchTopRated}></Row>
      <Row title="Documentaires" fetchUrl={requests.fetchActionMovies}></Row>

      {/* video */}

      {/* quick view */}

      {/* footer */}
      <Footer></Footer>
    </div>
  );
}

export default App;
