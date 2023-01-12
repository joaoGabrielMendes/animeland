import { useState, useEffect } from "react";
import axios from "axios";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SliderConfig = {
  dots: true,
  arrows: false,
  infinite: true,
  speed: 500,
  slidesToShow: 10,
  slidesToScroll: 10,
};

function CarrouselSlider() {
  const [topAiring, setTopAiring] = useState([]);
  const [topAiring2, setTopAiring2] = useState([]);
  function getTopAiring() {
    axios("https://gogoanime.consumet.org/top-airing").then((res) => {
      setTopAiring(res.data);
    });
  }

  function getTopAiring2() {
    axios("https://gogoanime.consumet.org/top-airing?page=2").then((res) => {
      setTopAiring2(res.data);
    });
  }

  useEffect(() => {
    getTopAiring();
    getTopAiring2();
  }, []);

  return (
    <>
      <Slider {...SliderConfig}>
        {topAiring.map((iten) => (
          <img alt="cover" src={iten.animeImg} />
        ))}
        {topAiring2.map((iten) => (
          <img alt="cover" src={iten.animeImg} />
        ))}
      </Slider>
    </>
  );
}

export default CarrouselSlider;
