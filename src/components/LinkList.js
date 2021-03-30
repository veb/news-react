import React from "react";
import Link from "./Link";
import {
  Flex,
  Box,
  Spacer,
  SimpleGrid,
  Grid,
  HStack,
  List,
  ListItem,
  ListIcon,
  OrderedList,
  UnorderedList,
  MdCheckCircle,
} from "@chakra-ui/react";
import { useQuery, gql } from "@apollo/client";

const FEED_QUERY = gql`
  {
    feed(orderBy: { createdAt: asc }) {
      count
      links {
        id
        description
        url
      }
    }
  }
`;

const LinkList = () => {
  const { data } = useQuery(FEED_QUERY);
  console.log("data", data);

  let links = data.feed.links;
  console.log("links", links);

  return (
    <Flex>
      {data && (
        <List spacing={3}>
          {links.map((link) => (
            <Link key={link.id} link={link} />
          ))}
        </List>
      )}
    </Flex>
  );
};

export default LinkList;
