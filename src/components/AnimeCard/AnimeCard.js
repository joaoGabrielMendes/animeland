import { Card, CardBody } from "@chakra-ui/card";
import { Center, Heading, Image, Stack, StackDivider } from "@chakra-ui/react";
import { Link } from "react-router-dom";

function AnimeCard({ image, title, animeId }) {
  return (
    <Card maxW="170px">
      <Link to={`/animes/${animeId}`}>
        <CardBody>
          <Stack divider={<StackDivider />} spacing="2">
            <Image
              src={image}
              boxSize="200px"
              objectFit="contain"
              alt="anime cover"
              borderRadius="10"
            />
            <Center>
              <Heading size="sm">{title}</Heading>
            </Center>
          </Stack>
        </CardBody>
      </Link>
    </Card>
  );
}

export default AnimeCard;
