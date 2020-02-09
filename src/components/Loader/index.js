import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const LoaderWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const LoaderImage = styled.img`
  height: 90px;
  width: 90px;
`;

const LoaderText = styled.span`
  font-size: 18px;
`;

const Loader = ({ text }) => (
  <LoaderWrapper>
    <LoaderImage src="https://cdn7.monday.com/images/loader/loader.gif" />
    <LoaderText>{text}</LoaderText>
  </LoaderWrapper>
);

export default Loader;