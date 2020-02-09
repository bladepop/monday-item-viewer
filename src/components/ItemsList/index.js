import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const ListWrapper = styled.div`
  flex-grow: 1;
  height: 100%;
  /* background: #fbfbfb; */
  margin: 16px;
  max-width: 260px;
`;
const ListHeader = styled.div`
  font-size: 20px;
  font-weight: 200;
  padding: 8px 0;
  /* background: #eaeaea; */
`;

const ItemWrapper = styled.div`
  font-weight: ${({ selected }) => (selected ? "400" : "300")};
  height: 32px;
  margin: 2px 0;
  background: ${({ selected }) => (selected ? "#e5f4ff" : "#f5f6f8")};
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  cursor: pointer;
  display: flex;
  flex-direction: row;
  align-items: center;
  transition: transform 0.1s ease-in;

  &:hover {
    color: #1f76c2;
    transform: translateX(5px);
  }
`;

const ItemName = styled.div`
  font-size: 14px;
`;

const ItemColor = styled.div`
  height: 100%;
  flex-basis: 8px;
  background: ${({ color }) => color};
  margin-right: 8px;
  flex-shrink: 0;
`;

const Item = ({ name, selected, color, onClick }) => (
  <ItemWrapper selected={selected} onClick={onClick}>
    <ItemColor color={color} />
    <ItemName>{name}</ItemName>
  </ItemWrapper>
);

const GroupTitle = styled.div`
    margin-top: 16px;
    margin-bottom: 8px;
    font-size: 16px;
    font-weight: 300;
    overflow: hidden;
    white-space: nowrap;
`;

const ItemsList = ({ groups, selectedItem, handleChange }) => (
  <ListWrapper>
    {/* <ListHeader>Search...</ListHeader> */}
    {Object.keys(groups).map(groupId => (
      <React.Fragment key={groupId}>
        <GroupTitle>{groups[groupId].title}</GroupTitle>
        <React.Fragment>
          {groups[groupId].items.map(item => (
            <Item
              key={item.id}
              selected={item === selectedItem}
              name={item.name}
              color={item.group.color}
              onClick={() => handleChange(item.name)}
            />
          ))}
        </React.Fragment>
      </React.Fragment>
    ))}
  </ListWrapper>
);

export default ItemsList;
