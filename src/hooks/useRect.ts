import React, { useEffect, useRef, useState } from "react";
import { getCoords } from "../utils";

export default function (element: React.MutableRefObject<HTMLElement>) {
  const [rect, setRect] = useState<DOMRect>();
  const flag = useRef(false);

  useEffect(() => {
    if (!flag.current) {
      update();
    }

    return () => {
      flag.current = false;
    };
  }, [flag]);

  function update() {
    setRect(element.current.getBoundingClientRect());
    flag.current = true;
  }

  return [rect, update] as const;
}
