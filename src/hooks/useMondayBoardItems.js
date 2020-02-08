import { useEffect, useState } from "react";
import monday from "monday-sdk";

const useMondayBoardItems = (client_id) => {
  const [context, setContext] = useState({});
  useEffect(() => {
    monday.init(client_id);
    monday.get("context").then(res => {
      setContext(res.data);
    });
  }, [client_id]);

  const [items, setItems] = useState([]);

  useEffect(() => {
    if (!context.boardId) return;
    monday
      .api(
        `query {
        boards(ids: [${context.boardId}]) {
          items {
            name
            updates {
              body
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

  const isReady = items.length > 0;

  return [items, isReady];
};

export default useMondayBoardItems;