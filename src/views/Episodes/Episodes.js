import { Box, Center, Heading, Text } from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

function Episodes() {
  const { episodeId } = useParams();
  const [episode, setEpisode] = useState([]);

  async function getEpisode() {
    try {
      const res = await axios(
        `https://gogoanime.consumet.org/vidcdn/watch/${episodeId}`
      );
      
      setEpisode(res.data);
    } catch (error) {
      console.log("Something went wrong!");
    }
  }

  useEffect(() => {
    getEpisode();
  }, []);

  const openInNewTab = (url) => {
    const newWindow = window.open(url, "_blank", "noopener,noreferrer");
    if (newWindow) newWindow.opener = null;
  };

  return (
    <Box>
      <Header />

      <Center padding="10">
        <Link o="#" onClick={() => openInNewTab(episode.Referer)}>
          <Text color="blue" fontSize="2xl">
            Link
          </Text>
        </Link>
      </Center>
      <Footer />
    </Box>
  );
}

export default Episodes;
