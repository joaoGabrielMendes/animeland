import { Box } from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

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
    <Box>
      <h1>{animeInfo.animeTitle}</h1>
      <img src={animeInfo.animeImg} />
    </Box>
  );
}

export default AnimeInfo;
