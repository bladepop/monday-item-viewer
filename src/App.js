import React, { useReducer } from "react";
// import useMondayBoardItems from './hooks/useMondayBoardItems';
import useMondayBoardItems from "./hooks/mockData";
import useViewState from "./hooks/useViewState";

import AppContainer from "./components/AppContainer";
import ActionBar from "./components/ActionBar";
import UpdateView from "./components/UpdateView";

import { CLIENT_ID } from "./config";

function App() {
  // Data Provider
  const [items, isItemsReady] = useMondayBoardItems(CLIENT_ID);

  // View State Manager
  const {
    title,
    updates,
    update,
    readTime,
    handleChange,
    itemIndex,
    updateIndex,
    decrementItemIndex,
    incrementItemIndex,
    decremetUpdateIndex,
    incrementUpdateIndex
  } = useViewState(items);

  if (!isItemsReady) {
    return <div>Loading data...</div>;
  }

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
