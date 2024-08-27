import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import { Box } from "@chakra-ui/react";

const Layout = () => {
  return (
    <Box px={5} pb={5} transition="padding .5s">
      <Navbar />
      <Outlet />
    </Box>
  );
};
export default Layout;
