import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Select = styled.select`
    border: none;
    background: #f7f7f7;
    padding: 12px 10px;    
    color: #565656;
    height: 48px;
    font-family: Roboto, serif;
    width: 200px;

    &:active, &:focus {
        outline: none;
    }
`;
const Option = styled.option`
    color: #565656;
    background: #f7f7f7;
    font-family: Roboto, serif;
`;

const UpdateSelector = ({ handleChange, updates, selectedValue }) => (
    <Select onChange={handleChange} value={selectedValue}>
      {updates.map(update => (
        <Option key={update.createdAt} value={update.createdAt}>
          {new Date(update.createdAt).toLocaleString()}
        </Option>
      ))}
    </Select>
);

UpdateSelector.propTypes = {
    selectedValue: PropTypes.string.isRequired,
    updates: PropTypes.arrayOf(PropTypes.shape({
        createdAt: PropTypes.string,
    })).isRequired,
    handleChange: PropTypes.func,
}

UpdateSelector.defaultProps = {
    updates: [],
}

export default UpdateSelector;