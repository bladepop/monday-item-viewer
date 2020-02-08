import React, { useReducer } from "react";
// import useMondayBoardItems from './hooks/useMondayBoardItems';
import useMondayBoardItems from "./hooks/mockData";
import useReadTime from './hooks/useReadTime';

import AppContainer from "./components/AppContainer";
import ActionBar from './components/ActionBar';
import UpdateView from './components/UpdateView';

import { CLIENT_ID } from './config';

function App() {
  // Data Provider
  const [items, isItemsReady] = useMondayBoardItems(CLIENT_ID);

  // View State Manager
  const [{ itemIndex, updateIndex }, setViewState] = useReducer(
    (state, newState) => ({ ...state, ...newState }),
    { itemIndex: 0, updateIndex: 0 }
  );

  const item = items[itemIndex];
  const updates = item ? item.updates : [];
  const update = updates.length ? updates[updateIndex] : null;
  const updateBody = update ? update.body : "";

  const readTime = useReadTime(updateBody);

  if (!isItemsReady) {
    return <div>Loading data...</div>;
  }

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

  // View

  return (
    <AppContainer>
      <ActionBar
        options={{
          decrementItemIndex,
          incrementItemIndex,
          decremetUpdateIndex,
          incrementUpdateIndex,
          itemIndex: itemIndex + 1,
          updateIndex: updateIndex + 1,
          itemsLength: items.length,
          updatesLength: updates.length
        }}
      />
      <UpdateView
         handleChange={handleChange}
         title={title}
         readTime={readTime}
         update={update}
         updates={updates}
      />
    </AppContainer>
  );
}

export default App;
