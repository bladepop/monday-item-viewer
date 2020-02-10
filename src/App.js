import React, { useRef } from "react";
import "typeface-roboto";

import useMondayBoardItems from "./hooks/useMondayBoardItems";
// import useMondayBoardItems from "./hooks/mockData";
import useViewState from "./hooks/useViewState";
import useScrollToTop from "./hooks/useScrollToTop";
import useMedia from "./hooks/useMedia";

import AppContainer from "./components/AppContainer";
import ActionBar from "./components/ActionBar";
import UpdateView from "./components/UpdateView";
import ItemsList from "./components/ItemsList";
import Loader from "./components/Loader";
import { FlexLayout, ListWrapper, UpdateWrapper } from "./components/Layout";

import { CLIENT_ID } from "./config";

const VIEW_MODES = {
  MOBILE: "mobile",
  LEAN: "lean",
  FULL: "full"
};

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

  const viewMode = useMedia(
    ["(min-width: 1280px)", "(min-width: 1040px)", "(min-width: 800px)"],
    [VIEW_MODES.FULL, VIEW_MODES.LEAN, VIEW_MODES.MOBILE],
    VIEW_MODES.MOBILE
  );

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
        hide={viewMode === VIEW_MODES.FULL}
        compact={viewMode === VIEW_MODES.MOBILE}
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
        <ListWrapper hide={viewMode !== VIEW_MODES.FULL}>
          <ItemsList
            items={items}
            groups={groups}
            selectedItem={item}
            handleChange={onSelectItem}
          />
        </ListWrapper>
        <UpdateWrapper
          heightBuffer={viewMode === VIEW_MODES.FULL ? "0px" : "65px"}
          standAlone={viewMode === VIEW_MODES.FULL ? false : true}
        >
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
