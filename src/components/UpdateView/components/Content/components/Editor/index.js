import React from "react";
import PropTypes from "prop-types";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.bubble.css";

const Editor = ({ html }) => <ReactQuill value={html} theme={"bubble"} />;

Editor.propTypes = {
  html: PropTypes.string.isRequired
};

export default Editor;
