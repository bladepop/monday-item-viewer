import React, { useState } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

import Title from "./components/Title";
import Details from "./components/Details";
import Content from "./components/Content";

export const UpdateViewWrapper = styled.div`
  max-width: 680px;
  width: 100vw;
  margin-top: 40px;
  margin-bottom: 150px;
`;

const useEditState = (value, onSave = () => true) => {
  const [isEditing, setEdit] = useState(false);
  const [editedValue, setEditedValue] = useState(value);
  const startEdit = () => setEdit(true);
  const cancelEdit = () => {
    setEdit(false);
    setEditedValue(value);
  };
  const saveEdit = () => onSave(editedValue) && cancelEdit();

  return [value, editedValue, setEditedValue, isEditing, startEdit, cancelEdit, saveEdit];
};

const UpdateView = ({ title, update, handleChange, updates, readTime, onSave, showEdit }) => {
  const body = update ? update.body : "";
  const [value, editedValue, setEditedValue, isEditing, startEdit, cancelEdit, saveEdit] = useEditState(body, onSave);

  return (
    <UpdateViewWrapper>
      <Title>{title}</Title>
      <Details
        {...{ update, handleChange, updates, readTime, isEditing, showEdit }}
        onEditStartClick={startEdit}
        onEditCancelClick={cancelEdit}
        onEditSaveClick={saveEdit}
      />
      <Content html={isEditing ? editedValue : value} isEditing={isEditing} onChange={setEditedValue} />
    </UpdateViewWrapper>
  );
};

UpdateView.propTypes = {
  title: PropTypes.string,
  update: PropTypes.shape({ body: PropTypes.string }),
  handleChange: PropTypes.func,
  updates: PropTypes.arrayOf(PropTypes.shape({ createdAt: PropTypes.string })),
  readTime: PropTypes.number,
  onSave: PropTypes.func,
};

UpdateView.defaultProps = {
  title: "There are no updates for this item..."
}

export default UpdateView;
