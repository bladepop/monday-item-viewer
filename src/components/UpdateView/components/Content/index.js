import React from "react";
import styled from "styled-components";
import ReadOnlyText from "./components/ReadOnlyText";

const ContentWrapper = styled.div`
  * {
    color: rgba(0, 0, 0, 0.84);
    font-size: 18.5px;
    font-family: Roboto, sans-serif;
    font-weight: 300;
    line-height: 1.58;
    white-space: normal !important;
    overflow-wrap: break-word;
    word-break: break-word;
    letter-spacing: -0.003em;
    -webkit-font-smoothing: antialiased;
    text-rendering: optimizeLegibility;

    .text-center {
      text-align: center;
      img {
        margin: 0;
      }
    }

    .ql-editor {
      padding: 0 !important;

      ol,
      ul {
        padding-left: 0.5em;
      }

      li::before {
        width: initial;
        vertical-align: middle;
        line-height: 24px;
        margin-left: -1em;
        margin-right: 0.8em;
        transform: scale(2);
      }
      li.ql-indent-1:not(.ql-direction-rtl) {
        padding-left: 3em;
      }
      li.ql-indent-2:not(.ql-direction-rtl) {
        padding-left: 4.5em;
      }
      li.ql-indent-3:not(.ql-direction-rtl) {
        padding-left: 6em;
      }
    }

    p {
      margin-top: 18.5px;
      margin-bottom: 18.5px;
    }

    &::selection {
      background: #fbcb00; /* WebKit/Blink Browsers */
    }

    pre {
      background: #f5f5f5;
      padding: 24px;
      font-size: 14px;
      font-family: monospace;
    }

    img {
      @media screen and (min-width: 600px) {
        margin: 25px 115px;
      }
      max-width: 100vw;
      box-shadow: 0 0 10px 0px #cecece;
    }

    strong {
      font-weight: 500;
    }
  }
`;

const Content = ({ html }) => (
  <ContentWrapper>
    <ReadOnlyText html={html} />
  </ContentWrapper>
);

//TODO: Add Proptypes

export default Content;
