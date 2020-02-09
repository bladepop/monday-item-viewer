import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { scrollBarStyle } from  '../../helpers/commonStyles';

const UpdateWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: calc(100vw - 500px);
  flex-grow: 1;
  height: calc(100vh - 65px);
  overflow-y: scroll;
  overflow-x: hidden;

  ${scrollBarStyle}
`;

export default UpdateWrapper;