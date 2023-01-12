import { Box, Center, Heading, Text } from "@chakra-ui/react";

function Footer() {
  return (
    <Box padding={10}>
      <Center>
        <Heading fontSize={"2xl"}>AnimeLand</Heading>
      </Center>
      <Center>
        <Text>© Copyright AnimeLand 2023 - All rights reserved</Text>
      </Center>
    </Box>
  );
}

export default Footer;
