import React from "react";
import styled from "styled-components";

import AuthorBar from "./components/AuthorBar";
import UpdateSelector from "./components/UpdateSelector";

import Button from "../../../Button";

const DetailsBarWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 32px;
`;

const DetailsActionsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const EditButton = styled(Button)`
  margin-left: 16px;
`;

const CancelButton = styled(EditButton)`
  margin-left: 16px;
  background: #c4c4c4;
  color: grey;
  &:hover {
    color: white;
    background: #f73d56;
  }
`;

const Details = ({
  update,
  handleChange,
  updates,
  readTime,
  onEditStartClick,
  onEditCancelClick,
  onEditSaveClick,
  isEditing
}) => (
  <DetailsBarWrapper>
    <AuthorBar
      name={update.creator.name}
      photoThumbUrl={update.creator.photoThumbUrl}
      readTime={readTime}
    />
    <DetailsActionsWrapper>
      <UpdateSelector
        handleChange={handleChange}
        updates={updates}
        selectedValue={update.id}
      />

      {isEditing ? (
        <React.Fragment>
          <CancelButton onClick={onEditCancelClick}>Cancel</CancelButton>
          <EditButton onClick={onEditSaveClick}>Save</EditButton>
        </React.Fragment>
      ) : (
        <EditButton onClick={onEditStartClick}>Edit</EditButton>
      )}
    </DetailsActionsWrapper>
  </DetailsBarWrapper>
);

//TODO: Add proptypes

export default Details;
