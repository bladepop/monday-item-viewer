import React, { useMemo } from "react";
import PropTypes from "prop-types";
import Markdown from "react-markdown";
import toc from "remark-toc";
import CodeBlock from "./code-block";

const useStripShabang = (text, shabang) =>
  useMemo(() => text.substring(shabang.length), [text, shabang]);

const ReadOnlyText = ({ text, shabang }) => {
  const textWithoutShabang = useStripShabang(text, shabang);
  return (
    <div>
      <Markdown
        source={textWithoutShabang}
        skipHtml={false}
        escapeHtml={true}
        renderers={{ code: CodeBlock }}
        plugins={[toc]}
      />
    </div>
  );
};

ReadOnlyText.propTypes = {
  text: PropTypes.string.isRequired,
  shabang: PropTypes.string.isRequired
};

export default ReadOnlyText;
