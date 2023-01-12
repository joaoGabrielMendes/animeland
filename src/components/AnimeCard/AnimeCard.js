import { Card, CardBody } from "@chakra-ui/card";
import { Center, Heading, Image, Stack, StackDivider } from "@chakra-ui/react";

function AnimeCard({ image, title }) {
  return (
    <Card maxW="170px">
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
    </Card>
  );
}

export default AnimeCard;
