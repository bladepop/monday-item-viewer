import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { scrollBarStyle } from  '../../helpers/commonStyles';

const ListWrapper = styled.div`
  flex-grow: 1;
  max-width: 260px;
  height: calc(100vh - 90px);
  overflow-y: auto;
  overflow-x: hidden;
  padding: 12px;
  margin: 0;

  ${scrollBarStyle}

`;

export default ListWrapper;