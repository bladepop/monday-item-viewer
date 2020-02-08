import React from "react";
import PropTypes from "prop-types";

const ReadOnlyText = ({html}) => <div dangerouslySetInnerHTML={{ __html: html}}></div>;

ReadOnlyText.propTypes = {
    html: PropTypes.string.isRequired,
}

export default ReadOnlyText;