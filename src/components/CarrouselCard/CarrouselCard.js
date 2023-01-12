import { Box, Center, Heading, Wrap } from "@chakra-ui/layout";
import axios from "axios";
import { useEffect, useState } from "react";
import AnimeCard from "../AnimeCard/AnimeCard";

function CarrouselCard() {
  const [topAnime, setTopAnime] = useState([[]]);
  function getTopAnime() {
    axios("https://gogoanime.consumet.org/popular").then((res) => {
      setTopAnime(res.data);
    });
  }

  useEffect(() => {
    getTopAnime();
  }, []);

  return (
    <Box paddingTop={"10"} paddingBottom="10">
      <Center maxWidth="1400" margin="auto" padding={5}>
        <Heading size="md">Popular Anime</Heading>
      </Center>

      <Wrap justify="center" maxWidth={1400} margin="auto">
        {topAnime.slice(0, 14).map((iten) => (
          <AnimeCard
            title={String(iten.animeTitle).slice(0, 20)}
            image={iten.animeImg}
          />
        ))}
      </Wrap>
    </Box>
  );
}

export default CarrouselCard;
