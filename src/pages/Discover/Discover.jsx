import React from "react";
import Header from "../../components/Header/Header";
import "./Discover.scss";
import AudioPlayer from "react-h5-audio-player";
// import "react-h5-audio-player/lib/styles.css";
import ReactPlayer from "react-player/lazy";

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
            <AudioPlayer
              autoPlay
              style={{ display: "none" }}
              src="https://firebasestorage.googleapis.com/v0/b/grad-hackathon-f1199.appspot.com/o/_Kyirgyiz_kuusu_(super.kg).mp3?alt=media&token=2a614ca9-7377-40ca-8035-7d6ad38cde17"
            />

            {/* <ReactPlayer
              style={{
                width: "300px",
              }}
              url="https://www.youtube.com/watch?v=rcoW4_W4U4U"
            /> */}
          </div>
        </div>
      </div>

      <div className="about">
        <div className="container">
          <p className="about-text">
            Dear guests of Kyrgyz Republic! We inspire you to visit Kyrgyzstan
            and see the present nomadic life of kyrgyz people. Kyrgyzstan is a
            unique place to discover even it is small country here you can see
            the diversity of everything: nature, people, landscape, animals,
            weather, culture, mountains and e.t.c. The Tien Shan mountains in
            Kyrgyz Republic are home to more than 30 peaks that are close to, or
            higher than, 6,000m and among these mountains you’ll also find some
            of the largest glaciers outside of the polar regions. The highest
            mountain in this range is Pik Pobeda (also known as Victory Peak)
            which stands at a lofty 7,439m. This is a challenging mountain and
            one that requires skills and experience in abundance. Our company
            SAYAKAT prepared different type of tour programs with possibility to
            make it individual to each tourists according to their desire. We
            are quite flexible and we will try make your stay pleasant and
            unforgettable.
          </p>
        </div>
      </div>
    </>
  );
};

export default Discover;
