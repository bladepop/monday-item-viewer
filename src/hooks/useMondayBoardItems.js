import { useEffect, useState, useCallback } from "react";
import monday from "monday-sdk";

const openItem = itemId => {
  monday.execute("openItemCard", { itemId });
};

const useMondayBoardItems = client_id => {
  const [context, setContext] = useState({});
  useEffect(() => {
    try {
      monday.init(client_id);
      monday.get("context").then(res => {
        setContext(res.data);
      });
    } catch (e) {
      console.log('monday sdk failed to load', e);
    }
    
  }, [client_id]);

  const [items, setItems] = useState([]);
  //TODO: Handle errors
  useEffect(() => {
    if (!context.boardId) return;
    monday
      .api(
        `query {
        boards(ids: [${context.boardId}]) {
          items {
            id
            name
            group {
              id
              color
              title
            }
            updates {
              id
              body
              textBody: text_body
              createdAt: created_at
              creator {
                name
                photoThumbUrl: photo_thumb
              }
            }
          }
        }
      }`
      )
      .then(res => {
        setItems(res.data.boards[0].items);
      });
  }, [context.boardId]);

  const memoizedCreateNewUpdate = useCallback(
    (itemId, updateContent) => {
      monday
        .api(
          `mutation {
        createdUpdate: create_update(body: "${updateContent}", item_id: ${itemId}) {
          id
          body
          createdAt: created_at
          creator {
            name
            photoThumbUrl: photo_thumb
          }
        }
      }
      `
        )
        .then(res => {
          const createdUpdate = res.data.createdUpdate;
          //TODO: Handle errors
          //TODO: Move to better data structure (key-value)
          const newItems = items.map(item => {
            let newItem = item;
            if (item.id === itemId) {
              newItem = { ...item, updates: [createdUpdate, ...item.updates] };
            }
            return newItem;
          });
          setItems(newItems);
        });
    },
    [items, setItems]
  );

  const isReady = items.length > 0;

  return [items, isReady, openItem, memoizedCreateNewUpdate];
};

export default useMondayBoardItems;
