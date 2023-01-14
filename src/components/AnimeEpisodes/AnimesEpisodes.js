import { Box, Card, Center, Image, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

function AnimeEpisodes({ episode, img, episodeId }) {
  return (
    <Link to={`/episodes/${episodeId}`}>
      <Card
        bg="transparent"
        display="grid"
        justifyItems="center"
        _before={{
          content: '""',
          width: "50px",
          height: "50px",
          backgroundImage:
            "url('https://www.freepnglogos.com/uploads/play-button-png/play-button-blank-blank-and-pbs-animated-interviews-10.png')",
          backgroundPosition: "center",
          backgroundSize: "50px",
          backgroundRepeat: "no-repeat",
          position: "relative",
          bottom: "-100",
          zIndex: 2,
        }}
      >
        <Image
          boxSize="160"
          objectFit="cover"
          borderRadius="30px"
          opacity="90%"
          src={img}
        />

        <Box padding="1.5">
          <Text>Episode {episode}</Text>
        </Box>
      </Card>
    </Link>
  );
}

export default AnimeEpisodes;
