import { Box, Heading, LightMode } from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

function Episodes() {
  const { episodeId } = useParams();
  const [episode, setepisode] = useState([]);
  function getEpisode() {
    axios(`https://gogoanime.consumet.org/vidcdn/watch/${episodeId}`).then(
      (res) => {
        setepisode(res.data);
      }
    );
  }

  useEffect(() => {
    getEpisode();
  }, []);

  const openInNewTab = (url) => {
    const newWindow = window.open(url, "_blank", "noopener,noreferrer");
    if (newWindow) newWindow.opener = null;
  };

  return (
    <Heading>
      <Link o="#" onClick={() => openInNewTab(episode.Referer)}>
        link
      </Link>
    </Heading>
  );
}

export default Episodes;
