import { useMemo } from "react";

const useScrollToTop = element => {
  const scrollToTopMemo = useMemo(() => {
    let scrollAnimation = null;
    const scrollToTop = () => {
      if (element == null) {
        clearTimeout(scrollAnimation);
        return;
      };
      var position = element.scrollTop;
      if (position) {
        element.scrollBy(0, -Math.max(1, Math.floor(position / 10)));
        scrollAnimation = setTimeout(scrollToTop, 30);
      } else clearTimeout(scrollAnimation);
    };
    return scrollToTop;
  }, [element]);
  return scrollToTopMemo;
};

export default useScrollToTop;