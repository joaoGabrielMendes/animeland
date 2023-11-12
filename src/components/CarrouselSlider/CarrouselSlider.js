import { useState, useEffect } from "react";
import axios from "axios";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Box } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const SliderConfig = {
  dots: false,
  arrows: false,
  infinite: true,
  speed: 100,
  slidesToShow: 10,
  slidesToScroll: 10,
  autoplay: true,
  speed: 8000,
  autoplaySpeed: 20,
  cssEase: "linear",
};

function CarrouselSlider() {
  const [topAiring, setTopAiring] = useState([]);
  const [topAiring2, setTopAiring2] = useState([]);
  async function getTopAiring() {
    try {
      const res = await axios("https://gogoanime.consumet.org/top-airing");

      setTopAiring(res.data);
    } catch (error) {
      console.log("Something went wrong!");
    }
  }

  async function getTopAiring2() {
    try {
      const res = await axios(
        "https://gogoanime.consumet.org/top-airing?page=2"
      );

      setTopAiring2(res.data);
    } catch (error) {
      console.log("Something went wrong!");
    }
  }

  useEffect(() => {
    getTopAiring();
    getTopAiring2();
  }, []);

  return (
    <Box>
      <Slider {...SliderConfig}>
        {topAiring.map((iten) => (
          <Link to={`/animes/${iten.animeId}`}>
            <img alt="cover" src={iten.animeImg} />
          </Link>
        ))}
        {topAiring2.map((iten) => (
          <Link to={`/animes/${iten.animeId}`}>
            <img alt="cover" src={iten.animeImg} />
          </Link>
        ))}
      </Slider>
    </Box>
  );
}

export default CarrouselSlider;
