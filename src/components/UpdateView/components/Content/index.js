import React from "react";
import PropTypes from "prop-types";
import ReadOnlyText from "./components/ReadOnlyText";
import MarkdownText from "./components/MarkdownText";
import Editor from "./components/Editor";
import ContentWrapper from "./components/ContentWrapper";

const MARKDOWN_SHABANG = "#!markdown";

const renderContent = ({ html, isEditing, onChange, text }) => {
  if (isEditing) {
    return <Editor html={html} onChange={onChange} />;
  }
  if (text && text.startsWith(MARKDOWN_SHABANG)) {
    return <MarkdownText text={text} shabang={MARKDOWN_SHABANG} />;
  }
  return <ReadOnlyText html={html} />;
};

const Content = ({ html, isEditing, onChange, text }) => {
  return (
    <ContentWrapper>
      {renderContent({ html, isEditing, onChange, text })}
    </ContentWrapper>
  );
};

Content.propTypes = {
  html: PropTypes.string.isRequired,
  isEditing: PropTypes.bool,
  onChange: PropTypes.func
};

export default Content;
