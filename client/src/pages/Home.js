import React from "react";
import Nav from "../components/Nav/index";
import Activities from "../components/Activities/Activities";
import Awards from "../components/Awards/Awards";

function Home() {
  return (
    <div>
      <Nav />
      <main className="main-container" id="home">
        <div className="row">
          <Activities />
          <Awards />
        </div>
      </main>
    </div>
  );
}

export default Home;
