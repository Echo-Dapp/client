import React, { useEffect, useRef, useState } from "react";
import { getCoords } from "../utils";

export default function (element: React.MutableRefObject<HTMLElement>) {
  const [rect, setRect] = useState<DOMRect>();
  const flag = useRef(false);

  useEffect(() => {
    if (!flag.current) {
      setRect(element.current.getBoundingClientRect());
      flag.current = true;
    }

    return () => {
      flag.current = false;
    };
  }, [flag]);

  return rect;
}
