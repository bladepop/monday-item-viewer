import React, { useRef } from "react";
import "typeface-roboto";

import useMondayBoardItems from "./hooks/useMondayBoardItems";
// import useMondayBoardItems from "./hooks/mockData";
import useViewState from "./hooks/useViewState";
import useScrollToTop from "./hooks/useScrollToTop";

import AppContainer from "./components/AppContainer";
import ActionBar from "./components/ActionBar";
import UpdateView from "./components/UpdateView";
import ItemsList from "./components/ItemsList";
import Loader from "./components/Loader";
import { FlexLayout, ListWrapper, UpdateWrapper } from "./components/Layout";

import { CLIENT_ID } from "./config";

function App() {
  // Data Provider
  const [items, isItemsReady] = useMondayBoardItems(CLIENT_ID);
  const appContainerEl = useRef(null);
  const scrollToTop = useScrollToTop(appContainerEl.current);

  // View State Manager
  const {
    item,
    groups,
    title,
    updates,
    update,
    readTime,
    selectItem,
    selectUpdate,
    itemIndex,
    updateIndex,
    decrementItemIndex,
    incrementItemIndex,
    decremetUpdateIndex,
    incrementUpdateIndex
  } = useViewState(items);

  if (!isItemsReady) {
    return <Loader text={"Loading board content"} />;
  }

  const onSelectItem = item => {
    selectItem(item);
    scrollToTop();
  };

  // View
  return (
    <AppContainer ref={appContainerEl}>
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
      <FlexLayout>
        <ListWrapper>
          <ItemsList
            items={items}
            groups={groups}
            selectedItem={item}
            handleChange={onSelectItem}
          />
        </ListWrapper>
        <UpdateWrapper>
          <UpdateView
            handleChange={event => selectUpdate(event.target.value)}
            title={title}
            readTime={readTime}
            update={update}
            updates={updates}
          />
        </UpdateWrapper>
      </FlexLayout>
    </AppContainer>
  );
}

export default App;
