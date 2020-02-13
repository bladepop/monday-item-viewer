import React, { useMemo } from "react";
import PropTypes from "prop-types";
import Markdown from "react-markdown";
import toc from "remark-toc"
import CodeBlock from "./code-block";

const ReadOnlyText = ({html, text}) => {
    
    if (text.startsWith("#!markdown")){
        return <div>
            <Markdown
                    source={text}
                    skipHtml={false}
                    escapeHtml={true}
                    renderers={{code: CodeBlock}}
                    plugins={[toc]}
                />
      </div>
    }
    
    const formattedHtml = useMemo(() => {
        return html.replace(/```(.+?)```/gm, '<span class="inline-code">$1</span>');
    },  [html]);

    return (
        <div dangerouslySetInnerHTML={{ __html: formattedHtml}}></div>
    );
};

ReadOnlyText.propTypes = {
    html: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
}

export default ReadOnlyText;
