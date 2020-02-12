import React from "react";
import styled from "styled-components";

import AuthorBar from "./components/AuthorBar";
import UpdateSelector from "./components/UpdateSelector";

import Button from "../../../Button";

const DEFAULT_AUTHOR_NAME = "No name";
const DEFAULT_AUTHOR_THUMB_IMAGE =
  "https://cdn1.monday.com/dapulse_default_photo.png";

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

const renderEditActions = (
  onEditStartClick,
  onEditCancelClick,
  onEditSaveClick,
  isEditing
) => {
  if (isEditing) {
    return (
      <React.Fragment>
        <CancelButton onClick={onEditCancelClick}>Cancel</CancelButton>
        <EditButton onClick={onEditSaveClick}>Save</EditButton>
      </React.Fragment>
    );
  } else {
    return <EditButton onClick={onEditStartClick}>Edit</EditButton>;
  }
};

const Details = ({
  update,
  handleChange,
  updates,
  readTime,
  onEditStartClick,
  onEditCancelClick,
  onEditSaveClick,
  isEditing,
  showEdit
}) => (
  <DetailsBarWrapper>
    <AuthorBar
      name={
        update && update.creator ? update.creator.name : DEFAULT_AUTHOR_NAME
      }
      photoThumbUrl={
        update && update.creator
          ? update.creator.photoThumbUrl
          : DEFAULT_AUTHOR_THUMB_IMAGE
      }
      readTime={readTime || 0}
    />
    <DetailsActionsWrapper>
      {updates.length ? (
        <UpdateSelector
          handleChange={handleChange}
          updates={updates}
          selectedValue={update ? update.id : null}
        />
      ) : null}

      {showEdit
        ? renderEditActions(
            onEditStartClick,
            onEditCancelClick,
            onEditSaveClick,
            isEditing
          )
        : null}
    </DetailsActionsWrapper>
  </DetailsBarWrapper>
);

//TODO: Add proptypes

export default Details;
