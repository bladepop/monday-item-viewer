import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Button from '../Button';

const FlexRow = styled.div`
  display: ${({hide}) => hide ? 'none' : 'flex'};
  justify-content: space-between;
  padding: 0 16px;
  align-items: center;
  border-bottom: 1px solid #e6e9ef;
  box-sizing: border-box;
  height: ${({height}) => height};
`;

const FlexItem = styled.div`
  display: ${({hide}) => hide ? 'none' : 'flex'};
  align-items: center;
`;

const StepIndicator = styled.div`
  margin: 0 8px;
  width: 64px;
  text-align: center;
`;

const BrandLogo = styled.div`
  display: flex;
  align-items: center;
`;

const BrandText = styled.div`
  color: #bbbbbb;
  font-size: 12px;
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
  },
  hide,
  compact,
  height,
  ...rest
}) => (
  <FlexRow hide={hide} height={height} {...rest}>
    <FlexItem>
      <Button onClick={decrementItemIndex} disabled={itemIndex === 1}>
        {" "}
        {"<<"} Previous Item
      </Button>
      <StepIndicator>
        {itemsLength ? `${itemIndex}/${itemsLength}` : "0/0"}
      </StepIndicator>
      <Button onClick={incrementItemIndex} disabled={itemIndex === itemsLength}>
        Next Item {">>"}
      </Button>
    </FlexItem>
    <FlexItem hide={compact}>
      <BrandLogo>
        <BrandText>Use the list on the left to select an item you'd like to read</BrandText>
      </BrandLogo>
    </FlexItem>
    <FlexItem>
      <Button onClick={decremetUpdateIndex} disabled={updateIndex === 1}>
        {" "}
        {"<<"} Previous Update
      </Button>
      <StepIndicator>
        {itemsLength ? `${updateIndex}/${updatesLength}` : "0/0"}
      </StepIndicator>
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
  options: PropTypes.object.isRequired,
  hide: PropTypes.bool,
  compact: PropTypes.bool,
};

export default ActionBar;
