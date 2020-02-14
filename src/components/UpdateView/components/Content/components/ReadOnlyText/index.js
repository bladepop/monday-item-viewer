import React, { useMemo } from "react";
import PropTypes from "prop-types";

const ReadOnlyText = ({ html }) => {
  const formattedHtml = useMemo(() => {
    return html.replace(/```(.+?)```/gm, '<span class="inline-code">$1</span>');
  }, [html]);

  return <div dangerouslySetInnerHTML={{ __html: formattedHtml }}></div>;
};

ReadOnlyText.propTypes = {
  html: PropTypes.string.isRequired
};

export default ReadOnlyText;
