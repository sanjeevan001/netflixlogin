// HomScreen.jsx
import React from "react";
import "./HomeScreen.css";
import Nav from "../../Componments/Nav/Nav";
import Banner from "../../Componments/Bannersone/Banner";
import Row from "../../Row/Row";
import Requiest from "../../Apikeys/Requiest";

const HomScreen = () => {
  return (
    <div className="Home">
      <Nav />
      <Banner />
      <Row
        title="Netflix original"
        fetchUrl={Requiest.fetchNetflixOriginals}
        islarge
      />
      <Row title="Trending Now" fetchUrl={Requiest.fetchTrending} />
      <Row title="Top Rated" fetchUrl={Requiest.fetchTopRated} />
      <Row title="Action Movies" fetchUrl={Requiest.fetchActionMovies} />
      <Row title="Comedy Movies" fetchUrl={Requiest.fetchComedyMovies} />
      <Row title="Horror Movies" fetchUrl={Requiest.fetchHorrorMovies} />
      <Row title="Romance Movies" fetchUrl={Requiest.fetchRomanceMovies} />
      <Row title="Documentaries" fetchUrl={Requiest.fetchDocumentaries} />
    </div>
  );
};

export default HomScreen;
