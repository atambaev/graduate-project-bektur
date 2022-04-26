import React from "react";
import Header from "../../components/Header/Header";
import "./Home.scss";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div className="home">
        <Header />
        <div className="hero container">
          <div className="hero-title">
            <h1>Kyrgyz Republic</h1>
          </div>
          <div className="hero-phrase">
            <p>Go places you've dreamed of.</p>
          </div>
        </div>
      </div>

      <div className="batken-section">
        <div className="batken-inner container">
          <div className="batken-title">
            <h2>Batken</h2>
          </div>
          <div className="batken-btn">
            <Link to="/discover">
              <button class="button-57" role="button">
                <span class="text">Discover</span>
                <span>Good choice!</span>
              </button>
            </Link>
          </div>
        </div>
      </div>

      <div className="chuy-section">
        <div className="chuy-inner container">
          <div className="chuy-title">
            <h2>Chüy</h2>
          </div>
          <div className="chuy-btn">
            <Link to="/discover">
              <button class="button-57" role="button">
                <span class="text">Discover</span>
                <span>Well, we've to visit!</span>
              </button>
            </Link>
          </div>
        </div>
      </div>

      <div className="abad-section">
        <div className="abad-inner container">
          <div className="abad-title">
            <h2>Jalal-Abad</h2>
          </div>
          <div className="abad-btn">
            <Link to="/discover">
              <button class="button-57" role="button">
                <span class="text">Discover</span>
                <span>Great choice!</span>
              </button>
            </Link>
          </div>
        </div>
      </div>

      <div className="naryn-section">
        <div className="naryn-inner container">
          <div className="naryn-title">
            <h2>Naryn</h2>
          </div>
          <div className="naryn-btn">
            <Link to="/discover">
              <button class="button-57" role="button">
                <span class="text">Discover</span>
                <span>Let's go! Kettik!</span>
              </button>
            </Link>
          </div>
        </div>
      </div>

      <div className="osh-section">
        <div className="osh-inner container">
          <div className="osh-title">
            <h2>Osh</h2>
          </div>
          <div className="osh-btn">
            <Link to="/discover">
              <button class="button-57" role="button">
                <span class="text">Discover</span>
                <span>South? That's amazing!</span>
              </button>
            </Link>
          </div>
        </div>
      </div>

      <div className="talas-section">
        <div className="talas-inner container">
          <div className="talas-title">
            <h2>Talas</h2>
          </div>
          <div className="talas-btn">
            <Link to="/discover">
              <button class="button-57" role="button">
                <span class="text">Discover</span>
                <span>It's not far away!</span>
              </button>
            </Link>
          </div>
        </div>
      </div>

      <div className="ik-section">
        <div className="ik-inner container">
          <div className="ik-title">
            <h2>Ysyk-Köl</h2>
          </div>
          <div className="ik-btn">
            <Link to="/discover">
              <button class="button-57" role="button">
                <span class="text">Discover</span>
                <span>You won't regret!</span>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
