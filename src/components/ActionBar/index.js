import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const FlexRow = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 16px;
    align-items: center;
    border-bottom: 1px solid #e6e9ef;
`;

const FlexItem = styled.div`
    display: flex;
    align-items: center;
`;

const StepIndicator = styled.div`
    margin: 0 8px;
    width: 64px;
    text-align: center;
`;

const Button = styled.button`
    height: 32px;
    border: 0;
    background: #009AFF;
    color: white;
    padding: 8px 16px;
    border-radius: 240px;
    cursor: pointer;

    &:focus {
        outline: none;
    }

    &:hover {
        background: #0083d9;
    }

    &:active {
        background: #03a9f4;
    }

    &:disabled {
        background: #d4d4d4;
        color: #5d5d5d;
        cursor: not-allowed;
    }
`;

const BrandLogo = styled.div`
    font-size: 12px;
    color: #bbbbbb;
`;

const ActionBar = ({
  options: {
    decrementItemIndex,
    incrementItemIndex,
    decremetUpdateIndex,
    incrementUpdateIndex,
    itemIndex,
    updateIndex,
    itemsLength,
    updatesLength
  }
}) => (
  <FlexRow>
    <FlexItem>
      <Button onClick={decrementItemIndex} disabled={itemIndex === 1}>
        {" "}
        {"<<"} Previous Item
      </Button>
      <StepIndicator>{itemsLength ? `${itemIndex}/${itemsLength}` : "0/0"}</StepIndicator>
      <Button onClick={incrementItemIndex} disabled={itemIndex === itemsLength}>
        Next Item {">>"}
      </Button>
    </FlexItem>
    <FlexItem>
        <BrandLogo>Clean Reader</BrandLogo>
    </FlexItem>
    <FlexItem>
      <Button onClick={decremetUpdateIndex} disabled={updateIndex === 1}>
        {" "}
        {"<<"} Previous Update
      </Button>
      <StepIndicator>{itemsLength ? `${updateIndex}/${updatesLength}` : "0/0"}</StepIndicator>
      <Button
        onClick={incrementUpdateIndex}
        disabled={updateIndex === updatesLength}
      >
        Next Update {">>"}
      </Button>
    </FlexItem>
  </FlexRow>
);

ActionBar.propTypes = {
  options: PropTypes.object.isRequired
};

export default ActionBar;
