import React from "react";
import styled from "styled-components";

const ItemWrapper = styled.div`
  font-weight: ${({ selected }) => (selected ? "400" : "300")};
  height: 32px;
  margin: 2px 0;
  background: ${({ selected }) => (selected ? "#e5f4ff" : "#f5f6f8")};
  overflow: hidden;
  white-space: nowrap;
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
  text-overflow: ellipsis;
  overflow: hidden;
  min-width: 0;
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
  color: ${({ color }) => color};
`;

const ItemsList = ({ groups, selectedItem, handleChange }) => (
  <React.Fragment>
    {Object.keys(groups).map(groupId => (
      <React.Fragment key={groupId}>
        <GroupTitle color={groups[groupId].color}>
          {groups[groupId].title}
        </GroupTitle>
        <React.Fragment>
          {groups[groupId].items.map(item => (
            <Item
              key={item.id}
              selected={item === selectedItem}
              name={item.name}
              color={item.group.color}
              onClick={() => handleChange(item.id)}
            />
          ))}
        </React.Fragment>
      </React.Fragment>
    ))}
  </React.Fragment>
);

export default ItemsList;
