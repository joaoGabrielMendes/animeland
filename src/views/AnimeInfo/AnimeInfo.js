import { Box } from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import AnimeInfoCard from "../../components/AnimeInfoCard/AnimeInfoCard";

function AnimeInfo() {
  const { animeId } = useParams();
  const [animeInfo, setAnimeInfo] = useState([]);

  function getAnimeInfo() {
    axios(`https://gogoanime.consumet.org/anime-details/${animeId}`).then(
      (res) => {
        setAnimeInfo(res.data);
      }
    );
  }

  useEffect(() => {
    getAnimeInfo();
  }, []);

  return (
    <>
      <Header />
      <AnimeInfoCard
        title={animeInfo.animeTitle}
        img={animeInfo.animeImg}
        synopsis={animeInfo.synopsis}
        genres={animeInfo.genres}
        status={animeInfo.status}
      />
    </>
  );
}

export default AnimeInfo;