import { useCallback, useEffect, useState } from "react";

const SCROLL_DISTANCE = 20; // additional distance to travel in direction

export const useVisibleOnUpScroll = () => {
  const [visible, setVisible] = useState(true);
  const [lastScrollYPos, setLastScrollYPos] = useState(-1);

  const handler = useCallback(() => {
    const currScrollYPos = window.scrollY;
    // up scroll -> lastScrollYPos > currScrollYPos
    if (lastScrollYPos > currScrollYPos + SCROLL_DISTANCE) {
      setVisible(true);
    }
    // down scroll -> lastScrollYPos < currScrollYPos
    if (currScrollYPos > lastScrollYPos + SCROLL_DISTANCE) {
      setVisible(false);
    }

    setLastScrollYPos(currScrollYPos);
  }, [lastScrollYPos]);

  useEffect(() => {
    setLastScrollYPos(window.scrollY);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handler);
    () => window.removeEventListener("scroll", handler);
  }, [handler]);

  return visible;
};
