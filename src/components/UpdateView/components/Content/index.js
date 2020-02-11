import React from "react";
import PropTypes from "prop-types";
import ReadOnlyText from "./components/ReadOnlyText";
import Editor from "./components/Editor";
import ContentWrapper from "./components/ContentWrapper";

const Content = ({ html, isEditing, onChange }) => (
  <ContentWrapper>
    {isEditing ? <Editor html={html} onChange={onChange} /> : <ReadOnlyText html={html} />}
  </ContentWrapper>
);

Content.propTypes = {
  html: PropTypes.string.isRequired,
  isEditing: PropTypes.bool,
  onChange: PropTypes.func,
};

export default Content;
