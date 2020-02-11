import React from "react";
import PropTypes from "prop-types";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.bubble.css";

const Editor = ({ html, onChange }) => <ReactQuill value={html} theme={"bubble"} onChange={onChange} />;

Editor.propTypes = {
  html: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Editor;
