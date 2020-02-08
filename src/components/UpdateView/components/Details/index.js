import React from "react";
import styled from "styled-components";

import AuthorBar from "./components/AuthorBar";
import UpdateSelector from "./components/UpdateSelector";

const DetailsBarWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Details = ({ update, handleChange, updates, readTime }) => (
  <DetailsBarWrapper>
    <AuthorBar
      name={update.creator.name}
      photoThumbUrl={update.creator.photoThumbUrl}
      readTime={readTime}
    />
    <UpdateSelector
      handleChange={handleChange}
      updates={updates}
      selectedValue={update.createdAt}
    />
  </DetailsBarWrapper>
);

export default Details;
