import React, { useEffect, useRef, useState } from "react";
import { getCoords } from "../utils";

export default function (element: React.MutableRefObject<HTMLElement>) {
  const [rect, setRect] = useState<DOMRect>();
  const [flag, setFlag] = useState(false);

  useEffect(() => {
    if (!flag) {
      setRect(element.current.getBoundingClientRect());
      setFlag(true);
    }

    return () => {
      setFlag(false);
    };
  }, [flag]);

  function update() {
    setFlag(false);
  }

  return [rect, update] as const;
}
