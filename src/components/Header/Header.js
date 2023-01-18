import {
  Flex,
  Spacer,
  Center,
  IconButton,
  Text,
  Heading,
  Textarea,
  Box,
  Button,
  Input,
} from "@chakra-ui/react";
import { useState } from "react";
import { IconContext } from "react-icons";
import {
  HiOutlineUser,
  HiSearch,
  HiOutlineHome,
  HiOutlineViewList,
} from "react-icons/hi";

//import { GiCardRandom } from "react-icons/gi";
import { Link } from "react-router-dom";

function Header() {
  const [search, setSearch] = useState("");

  let handleInputChange = (e) => {
    let inputValue = e.target.value;
    setSearch(inputValue);
  };

  const openInNewTab = (url) => {
    const newWindow = window.open(url, "_blank", "noopener,noreferrer");
    if (newWindow) newWindow.opener = null;
  };

  return (
    <IconContext.Provider value={{ size: "1.4em" }}>
      <Flex maxWidth={"1400px"} margin="0 auto" padding={"20px"}>
        <Center padding="3">
          <Link to="/">
            <Heading fontSize={"3xl"}>AnimeLand</Heading>
          </Link>
        </Center>

        <Spacer />

        <Center padding="1">
          <Box>
            <Input
              placeholder=""
              resize="none"
              size="xs"
              value={search}
              onChange={handleInputChange}
            />
          </Box>
          <Link to={`/search/${search}`}>
            <IconButton variant="" icon={<HiSearch />} padding="2" />
          </Link>
        </Center>
      </Flex>
    </IconContext.Provider>
  );
}

export default Header;
