import React from "react";
import { render } from "@testing-library/react";
import App from "./App";
import useMondayBoardItems from './hooks/useMondayBoardItems';

Object.defineProperty(window, "matchMedia", {
  writable: true,
  value: jest.fn().mockImplementation(query => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(), // deprecated
    removeListener: jest.fn(), // deprecated
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn()
  }))
});

jest.mock("./hooks/useMondayBoardItems", () => jest.fn());


test("renders the loading", () => {
  useMondayBoardItems.mockImplementation(() => [[], false]);
  const { getByText } = render(<App />);
  const loadingElement = getByText(/Loading board content/i);
  expect(loadingElement).toBeInTheDocument();
});

test("renders the app", () => {
  useMondayBoardItems.mockImplementation(() => [[{
    "id": "123456",
    "group": {
      "id": "group_id",
      "color": "#037f4c",
      "title": "Group Title"
    },
    "name": "Unique Item Name #12345",
    "updates": [
      {
        "id": "998877",
        "body": "<p><strong>My Update Text #44342</strong></p>",
        "createdAt": "2019-08-26T09:47:37Z",
        "creator": {
          "name": "Update Creator",
          "photoThumbUrl": "https://cdn1.monday.com/dapulse_default_photo.png"
        }
      },
      {
        "id": "887766",
        "body": "<p>Previous Update</p>",
        "createdAt": "2019-08-21T21:36:49Z",
        "creator": {
          "name": "Update Creator",
          "photoThumbUrl": "https://cdn1.monday.com/dapulse_default_photo.png"
        }
      }
    ]
  }], true]);

  const { getAllByText, getByText } = render(<App />);
  const itemTitleElements = getAllByText(/Unique Item Name #12345/i);
  const updateContentElement = getByText(/My Update Text #44342/i);

  expect(updateContentElement).toBeInTheDocument();
  expect(itemTitleElements.length).toBe(2)
  itemTitleElements.map((element) => expect(element).toBeInTheDocument());
});
