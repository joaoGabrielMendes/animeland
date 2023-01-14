import {
  Flex,
  Spacer,
  Center,
  IconButton,
  Text,
  Heading,
} from "@chakra-ui/react";
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
  return (
    <IconContext.Provider value={{ size: "1.4em" }}>
      <Flex maxWidth={"1400px"} margin="0 auto" padding={"20px"}>
        <Center>
          <Link to="/">
            <Heading fontSize={"3xl"}>AnimeLand</Heading>
          </Link>
        </Center>
        <Spacer />
        <Center>
          <Link to="/">
            <IconButton variant="" icon={<HiOutlineHome />} />
          </Link>
          <IconButton variant="" icon={<HiOutlineUser />} />
          <IconButton variant="" icon={<HiOutlineViewList />} />
        </Center>
        <Spacer />
        <Center>
          <IconButton variant="" icon={<HiSearch />} />
        </Center>
      </Flex>
    </IconContext.Provider>
  );
}

export default Header;
