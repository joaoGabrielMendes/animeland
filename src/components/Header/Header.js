import { Flex, Spacer, Center, IconButton, Text } from "@chakra-ui/react";
import { IconContext } from "react-icons";
import {
  HiOutlineUser,
  HiSearch,
  HiOutlineHome,
  HiOutlineViewList,
} from "react-icons/hi";

import { GiCardRandom } from "react-icons/gi";

function Header() {
  return (
    <IconContext.Provider value={{ size: "1.4em" }}>
      <Flex maxWidth={"1000px"} margin="0 auto" padding={"10px"}>
        <Center>
          <Text fontSize={"2xl"}>AnimeLand</Text>
        </Center>
        <Spacer />
        <Center>
          <IconButton variant="" icon={<HiOutlineHome />} />
          <IconButton variant="" icon={<HiOutlineUser />} />
          <IconButton variant="" icon={<HiOutlineViewList />} />
        </Center>
        <Spacer />
        <Center>
          <IconButton variant="" icon={<HiSearch />} />
          <IconButton variant="" icon={<GiCardRandom />} />
        </Center>
      </Flex>
    </IconContext.Provider>
  );
}

export default Header;
