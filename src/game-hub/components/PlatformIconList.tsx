import {
  FaWindows,
  FaPlaystation,
  FaXbox,
  FaApple,
  FaLinux,
  FaAndroid,
} from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import { SiNintendo } from "react-icons/si";
import { BsGlobe } from "react-icons/bs";
import { Platform } from "../services/game-service";
import { HStack, Icon, Text } from "@chakra-ui/react";
import { IconType } from "react-icons";

export interface Props {
  platforms: Platform[];
}

const PlatformIconList = ({ platforms }: Props) => {
  const iconMap: { [key: string]: IconType } = {
    //name:PlayStation
    //slug:playstation
    pc: FaWindows,
    FaPlaystation: FaPlaystation,
    xbox: FaXbox,
    nintendo: SiNintendo,
    mac: FaApple,
    linux: FaLinux,
    ios: MdPhoneIphone,
    web: BsGlobe,
    android: FaAndroid,
  };
  return (
    <>
      <HStack marginY="10px">
        {platforms.map((item) => (
          <Icon key={item.id} color="gray.500" as={iconMap[item.slug]} />
        ))}
      </HStack>
    </>
  );
};

export default PlatformIconList;
