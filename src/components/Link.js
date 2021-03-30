import React from "react";
import { Flex, Box, Spacer, ListItem, ListIcon } from "@chakra-ui/react";
import { IoIosNavigate } from "react-icons/io";

const Link = (props) => {
  const { link } = props;

  return (
    <ListItem>
      <ListIcon as={IoIosNavigate} color="green.500" />
      {link.description}
      {link.url}
    </ListItem>
  );
};

export default Link;
