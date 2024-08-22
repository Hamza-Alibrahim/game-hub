/* eslint-disable react-hooks/exhaustive-deps */
import {
  HStack,
  Input,
  Switch,
  Image,
  useColorMode,
  InputGroup,
  InputLeftElement,
} from "@chakra-ui/react";
import { Search2Icon, MoonIcon, SunIcon } from "@chakra-ui/icons";
import Logo from "../assets/logo.webp";
import { useEffect, useState } from "react";

interface Props {
  setTitle: (val: string) => void;
}

const Navbar = ({ setTitle }: Props) => {
  const [name, setName] = useState("");
  const { colorMode, toggleColorMode } = useColorMode();
  useEffect(() => {
    const x = setTimeout(() => {
      setTitle(name);
    }, 500);
    return () => clearTimeout(x);
  }, [name]);

  return (
    <HStack py="10px">
      <Image src={Logo} boxSize="60px" cursor="pointer" />
      <InputGroup>
        <InputLeftElement children={<Search2Icon />} />
        <Input
          value={name}
          onChange={(e) => setName(e.target.value)}
          borderRadius={20}
          spellCheck={false}
          placeholder="Search game..."
          variant="filled"
        />
      </InputGroup>
      <HStack align="center" gap={2}>
        <Switch
          colorScheme="green"
          onChange={toggleColorMode}
          isChecked={colorMode === "dark"}
        />
        {colorMode === "dark" ? (
          <MoonIcon boxSize={5} />
        ) : (
          <SunIcon boxSize={5} />
        )}
      </HStack>
    </HStack>
  );
};
export default Navbar;
