import { Box, Center, Heading, Wrap } from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import AnimeCard from "../../components/AnimeCard/AnimeCard";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import Loader from "../../components/Loader/Loader";

function Search() {
  const [results, setResults] = useState([]);
  const { animeTitle } = useParams();

  function getResults() {
    try {
      axios(`https://gogoanime.consumet.org/search?keyw=${animeTitle}`).then(
        (res) => {
          setResults(res.data);
        }
      );
    } catch (error) {}
  }

  useEffect(() => {
    getResults();
  }, [results]);

  return (
    <>
      <Header />

      <Box paddingTop={"10"} paddingBottom="10">
        <Center maxWidth="1400" margin="auto" padding={5}>
          <Heading size="md">Results for "{animeTitle}"</Heading>
        </Center>

        <Wrap justify="center" maxWidth={1400} margin="auto">
          {results.length == 0 ? (
            <Box>
              <Loader />
            </Box>
          ) : (
            results.map((iten) => (
              <AnimeCard
                title={String(iten.animeTitle).slice(0, 20)}
                image={iten.animeImg}
                animeId={iten.animeId}
              />
            ))
          )}
        </Wrap>
      </Box>

      <Footer />
    </>
  );
}

export default Search;
