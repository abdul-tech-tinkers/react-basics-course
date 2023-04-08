import { HStack, Image, Heading } from "@chakra-ui/react";
import logo from "../../assets/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";

const NavBar = () => {
  return (
    <HStack justifyContent="space-between" padding="10px">
      <Image src={logo} boxSize="60px" />
      <Heading>React Game Hub</Heading>
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
