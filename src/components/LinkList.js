import React, { useState, useEffect } from "react";
import Link from "./Link";
import { useQuery, gql } from "@apollo/client";
import { Container, Button, ListGroup } from "react-bootstrap";

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
  const [links, setLinks] = useState([]);
  const { data } = useQuery(FEED_QUERY);

  if (!data) {
    throw new Error("No data from Apollos", data);
  }

  console.log("data", data);

  useEffect(() => {
    setLinks(data.feed.links);
  });

  console.log("links", links);

  return (
    <ListGroup>
      {links && links.map((link) => <Link key={link.id} link={link} />)}
    </ListGroup>
  );
};

export default LinkList;
