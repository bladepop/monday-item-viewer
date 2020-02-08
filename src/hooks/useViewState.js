import { useReducer } from "react";
import useReadTime from "./useReadTime";

const useViewState = (items) => {
  const [{ itemIndex, updateIndex }, setViewState] = useReducer(
    (state, newState) => ({ ...state, ...newState }),
    { itemIndex: 0, updateIndex: 0 }
  );

  const item = items[itemIndex];
  const updates = item ? item.updates : [];
  const update = updates.length ? updates[updateIndex] : null;
  const updateBody = update ? update.body : "";

  const readTime = useReadTime(updateBody);

  const handleChange = event => {
    for (let i = 0; i < updates.length; i++) {
      if (updates[i].createdAt === event.target.value) {
        setViewState({ updateIndex: i });
      }
    }
  };

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
    title,
    updates,
    update,
    updateBody,
    readTime,
    handleChange,
    itemIndex,
    updateIndex,
    decrementItemIndex,
    incrementItemIndex,
    decremetUpdateIndex,
    incrementUpdateIndex
  };
};

export default useViewState;
