import React, { useState } from "react";
import { useMutation, gql } from "@apollo/client";

const CREATE_LINK_MUTATION = gql`
  mutation PostMutation($description: String!, $url: String!) {
    post(description: $description, url: $url) {
      id
      # createdAt
      url
      description
    }
  }
`;

const CreateLink = () => {
  const [formState, setFormState] = useState({
    description: "",
    url: "",
  });

  const [createLink] = useMutation(CREATE_LINK_MUTATION, {
    variables: {
      description: formState.description,
      url: formState.url,
    },
  });

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          createLink();
        }}
      >
        <div>
          <input
            className="formDescription"
            value={formState.description}
            onChange={(e) => {
              setFormState({
                ...formState,
                description: e.target.value,
              });
            }}
            type="text"
            placeholder="A new description for the link"
          />
          <input
            className="formUrl"
            value={formState.url}
            onChange={(e) => {
              setFormState({
                ...formState,
                url: e.target.value,
              });
            }}
            type="text"
            placeholder="The URL"
          />
        </div>
        <button type="submit">Submit Link</button>
      </form>
    </div>
  );
};

export default CreateLink;
