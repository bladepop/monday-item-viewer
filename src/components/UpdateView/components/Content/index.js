import React from "react";
import PropTypes from 'prop-types';
import ReadOnlyText from "./components/ReadOnlyText";
import ContentWrapper from "./components/ContentWrapper";


const Content = ({ html }) => (
  <ContentWrapper>
    <ReadOnlyText html={html} />
  </ContentWrapper>
);

Content.propTypes = {
  html: PropTypes.string.isRequired,
}

export default Content;
