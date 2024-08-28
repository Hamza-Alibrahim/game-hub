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
import useGameQuery from "../Store";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const setTitle = useGameQuery((s) => s.setTitle);
  const [name, setName] = useState("");
  const { colorMode, toggleColorMode } = useColorMode();
  const navigate = useNavigate();
  useEffect(() => {
    const x = setTimeout(() => {
      setTitle(name);
      navigate("/");
    }, 500);
    return () => clearTimeout(x);
  }, [name]);

  return (
    <HStack py="10px">
      <Link to="/">
        <Image src={Logo} boxSize="60px" cursor="pointer" minW="60px" />
      </Link>
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
