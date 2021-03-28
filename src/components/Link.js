import React from "react";
import { Flex, Box, Spacer } from "@chakra-ui/react";
const Link = (props) => {
  const { link } = props;

  return (
    <Box h="100%" bg="blue.500">
      <Box>{link.description}</Box>
      <Box>{link.url}</Box>
    </Box>
  );
};

export default Link;
