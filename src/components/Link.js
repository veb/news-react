import React from "react";
import ListGroup from "react-bootstrap/ListGroup";
import { IoIosNavigate } from "react-icons/io";

const Link = (props) => {
  const { link } = props;

  return (
    <div>
      <p>{link.description}</p>
      <p>{link.url}</p>
    </div>
  );

  return (
    <ListGroup.ListItem>
      {link.description}
      <br />
      {link.url}
    </ListGroup.ListItem>
  );
};

export default Link;
