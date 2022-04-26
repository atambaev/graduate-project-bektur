import React from "react";
import Header from "../../components/Header/Header";
import "./Discover.scss";

const Discover = () => {
  return (
    <>
      <div className="discover">
        <Header />
        <div className="discover-hero">
          <div className="container glass">
            <p className="discover-title">Welcome to the Land of Advantures!</p>
            <p className="discover-greet">
              Kyrgyzstan is country located in Central Asia, known for its
              beautiful and unique landscapes, friendly people, delicious food.
              The culture is heavily influenced by the traditions from nomadic
              life. Kyrgyzstan has incredible places for people who are
              interested in trekking, climbing, off-road driving, horseback
              riding, freeriding, photography and many other different options
              around Kyrgyzstan. Our company is locally owned and we are proud
              to offer a great tours on one the most exciting routes! Programs
              includes all top spot places, visit picturesque gorges and
              canyons, valleys and rivers, mountains and lakes. Nature is not
              only our main focus, we will also meet many nomads and see their
              life style.
              <br />
              <br />
              We look forward to helping you plan the trip of a lifetime.
            </p>
          </div>
        </div>
      </div>

      <div className="card">
        <div className="card-img"></div>
        <div className="card-right"></div>
      </div>
    </>
  );
};

export default Discover;
