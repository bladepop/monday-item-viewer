import { useReducer, useMemo } from "react";
import useReadTime from "./useReadTime";

const useViewState = items => {
  const [{ itemIndex, updateIndex }, setViewState] = useReducer(
    (state, newState) => ({ ...state, ...newState }),
    { itemIndex: 0, updateIndex: 0 }
  );

  const item = items[itemIndex];
  const updates = item ? item.updates : [];
  const update = updates.length ? updates[updateIndex] : null;
  const updateBody = update ? update.body : "";

  const readTime = useReadTime(updateBody);

  // TODO: Use ID instead of creation time
  const selectUpdate = updateCreationTime => {
    for (let i = 0; i < updates.length; i++) {
      if (updates[i].createdAt === updateCreationTime) {
        setViewState({ updateIndex: i });
      }
    }
  };

  // TODO: Use ID instead of name
  const selectItem = itemName => {
    for (let i = 0; i < items.length; i++) {
      if (items[i].name === itemName) {
        setViewState({ itemIndex: i, updateIndex: 0 });
      }
    }
  };

  const groups = useMemo(
    () =>
      items.reduce((accumulator, item) => {
        // console.log(item);
        // debugger;
        accumulator[item.group.id] = accumulator[item.group.id] || {
          ...item.group,
          items: []
        };
        accumulator[item.group.id].items.push(item);
        return accumulator;
      }, {}),
    [items]
  );

  const decrementItemIndex = () =>
    setViewState({ itemIndex: itemIndex - 1, updateIndex: 0 });
  const incrementItemIndex = () =>
    setViewState({ itemIndex: itemIndex + 1, updateIndex: 0 });

  const decremetUpdateIndex = () =>
    setViewState({ updateIndex: updateIndex - 1 });
  const incrementUpdateIndex = () =>
    setViewState({ updateIndex: updateIndex + 1 });

  const title = items.length ? item.name : "Loading...";

  return {
    item,
    groups,
    title,
    updates,
    update,
    updateBody,
    readTime,
    selectUpdate,
    selectItem,
    itemIndex,
    updateIndex,
    decrementItemIndex,
    incrementItemIndex,
    decremetUpdateIndex,
    incrementUpdateIndex
  };
};

export default useViewState;
