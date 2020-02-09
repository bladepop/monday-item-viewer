import styled from "styled-components";

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

    h1, h1 * {
      font-size: 32px;
    }

    h2, h2 * {
      font-size: 30px;
    }

    h3, h3 * {
      font-size: 28px;
    }

    h4, h4 * {
      font-size: 26px;
    }

    table {
        width: 100%;
        border-left: 1px solid #969696;
        border-top: 1px solid #969696;
        border-spacing: 0;
        margin: 8px 0;

        td {
            border-right: 1px solid #969696;
            border-bottom: 1px solid #969696;
            padding: 4px 12px;
        }
    }

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
      background: rgb(245, 245, 245);;
      padding: 24px;

      &, & * {  
        font-size: 14px;
        font-family: monospace;
        overflow: auto;
        white-space: pre !important;
      }
    }

    

    blockquote {
      border-left: 4px solid #c4c4c4;
      padding-left: 24px;
      margin-left: 4px;
      &, & * {
        color: #5d5d5d;
      }
    }

    img {
      @media screen and (min-width: 600px) {
        margin: 25px 115px;
      }
      max-width: 100vw;
      box-shadow: 0 0 10px 0px #8c8c8c;
    }

    strong {
      font-weight: 500;
    }
  }
`;

export default ContentWrapper;