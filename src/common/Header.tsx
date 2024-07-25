import { ConnectButton } from "@particle-network/connectkit";
import FlexSeparator from "./FlexSeparator";

import "../assets/styles/particle.css";
import { useEffect, useRef } from "react";
import useRect from "../hooks/useRect";
import useStore from "../hooks/useStore";

export default function () {
  const headerRef = useRef() as React.MutableRefObject<HTMLDivElement>;

  const [headerRect, updateHeaderRect] = useRect(headerRef);

  const store = useStore();

  useEffect(() => {
    setTimeout(() => {
      updateHeaderRect();
      store.set("header-height", headerRect?.height);
    }, 1000);
  }, [headerRect]);

  return (
    <header
      ref={headerRef}
      className="absolute top-0 left-0 w-full bg-foreground/30 backdrop-blur-md z-[999] py-3 flex pr-[4vw]"
    >
      <FlexSeparator />
      <ConnectButton />
    </header>
  );
}
