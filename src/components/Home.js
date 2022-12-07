import React from "react";
import Nav from "./Nav";
import Footer from "./Footer";
import Banner from "./Banner";
import Row from "./Row";
import requests from "../config/Requests";

function Home(props) {
  return (
    <>
      {/* Nav */}
      <Nav></Nav>

      {/* banner */}
      <Banner></Banner>

      {/* rows */}
      <Row
        title="Programmes originaux Netflix"
        fetchUrl={requests.fetchNetflixOriginals}
        isPoster={true}
      ></Row>
      <Row title="Tendances actuelles" fetchUrl={requests.fetchTrending}></Row>
      <Row title="Les mieux notés" fetchUrl={requests.fetchTopRated}></Row>
      <Row title="Films d'action" fetchUrl={requests.fetchActionMovies}></Row>
      <Row title="Films d'horreur" fetchUrl={requests.fetchTrending}></Row>
      <Row title="Comédies" fetchUrl={requests.fetchTopRated}></Row>
      <Row title="Documentaires" fetchUrl={requests.fetchActionMovies}></Row>

      {/* video */}

      {/* quick view */}

      {/* footer */}
      <Footer></Footer>
    </>
  );
}

export default Home;
