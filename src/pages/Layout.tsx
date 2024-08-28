import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import { Box } from "@chakra-ui/react";

const Layout = () => {
  return (
    <Box maxW="1600px" m="auto">
      <Navbar />
      <Outlet />
    </Box>
  );
};
export default Layout;
