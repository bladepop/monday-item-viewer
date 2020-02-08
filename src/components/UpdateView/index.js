import React from "react";
import styled from "styled-components";
import PropTypes from 'prop-types';

import Title from "./components/Title";
import Details from "./components/Details";
import Content from "./components/Content";

export const UpdateViewWrapper = styled.div`
  margin: 0 auto;
  max-width: 680px;
`;

const UpdateView = ({ title, update, handleChange, updates, readTime }) => (
  <UpdateViewWrapper>
    <Title>{title}</Title>
    <Details {...{ update, handleChange, updates, readTime }} />
    <Content html={update.body} />
  </UpdateViewWrapper>
);

UpdateView.propTypes = {
    title: PropTypes.string,
    update: PropTypes.shape({ body: PropTypes.string }),
    handleChange: PropTypes.func,
    updates: PropTypes.arrayOf(PropTypes.shape({ createdAt: PropTypes.string })),
    readTime: PropTypes.number
};

export default UpdateView;
