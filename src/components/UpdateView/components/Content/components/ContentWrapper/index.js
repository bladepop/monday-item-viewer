import styled from "styled-components";
import codeHighlightCss from "./codeHighlightCss";

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

    span.inline-code {
      padding: 0.2rem 0.4rem;
      font-size: 90%;
      color: #bd4147;
      background-color: #f8f9fa;
      border-radius: 0.25rem;
    }

    h1,
    h2,
    h3,
    h4 {
      margin: 0;
    }

    h1,
    h1 * {
      font-size: 32px !important;
    }

    h2,
    h2 * {
      font-size: 30px !important;
    }

    h3,
    h3 * {
      font-size: 28px !important;
    }

    h4,
    h4 * {
      font-size: 26px !important;
    }

    table {
      width: 100%;
      border-left: 1px solid #d0d0d0;
      border-top: 1px solid #d0d0d0;
      border-spacing: 0;
      margin: 8px 0;

      th {
        padding-left: 8px;
        border-bottom: 1px solid #d0d0d0;
        border-right: 1px solid #d0d0d0;
        background: #f1f1f1;
        text-align: left;
        font-weight: 400;
      }

      td {
        border-right: 1px solid #d0d0d0;
        border-bottom: 1px solid #d0d0d0;
        padding: 4px 12px;
      }
    }

    .text-center {
      text-align: center;
    }

    .ql-editor {
      padding: 0 !important;

      ol,
      ul {
        padding-left: 0.5em;
      }

      ul {
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
    }

    p {
      margin-top: 18.5px;
      margin-bottom: 18.5px;
      margin-block-start: 0;
    }

    &::selection {
      background: #fbcb00; /* WebKit/Blink Browsers */
    }

    pre code.hljs.hljs {
      ${codeHighlightCss}
    }

    code {
      display: inline;
      padding: 0;
    }

    pre {
      background: rgb(245, 245, 245) !important;
      padding: 24px !important;
      border-radius: 16px !important;

      &,
      & * {
        color: rgba(0, 0, 0, 0.84);
        font-size: 14px;
        font-family: monospace;
        overflow: auto !important;
        white-space: pre !important;
      }
    }

    blockquote {
      border-left: 4px solid #c4c4c4 !important;
      padding-left: 24px !important;
      margin-left: 4px !important;
      margin-bottom: 15px !important;
      margin-top: 15px !important;
      &,
      & * {
        color: #5d5d5d;
      }
    }

    img {
      max-width: 90%;
      margin: 25px auto;
      display: block;
      box-shadow: 0 0 10px 0px #8c8c8c;
    }

    strong,
    b {
      font-weight: 500;
    }
  }
`;

export default ContentWrapper;
