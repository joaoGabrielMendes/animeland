const {
  Box,
  Image,
  Grid,
  Flex,
  Container,
  Heading,
  Text,
} = require("@chakra-ui/react");

function AnimeInfoCard({ title, img, synopsis, genres, status }) {
  return (
    <Flex
      justifyContent="center"
      alignItems="top"
      maxWidth="1400px"
      flexWrap="wrap"
      padding="10"
    >
      <Image boxSize="400px" objectFit="contain" src={img} padding="4" />
      <Grid templateRows="2">
        <Box>
          <Container padding="0">
            <Heading size="lg"> {title}</Heading>
          </Container>
          <Text fontSize="sm" fontWeight="light">
            {genres + ""}
          </Text>
          <Text color="green">{status}</Text>
        </Box>
        <Container fontStyle="italic" fontWeight="light" padding="0">
          {synopsis}
        </Container>
      </Grid>
    </Flex>
  );
}

export default AnimeInfoCard;
