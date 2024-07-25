import useFetch from "../hooks/useFetch";
import { Stats } from "../types";
import ConnectWallet from "./ConnectWallet";
import FlexSeparator from "./FlexSeparator";
import { useRef } from "react";
import Icon from "./Icon";

export default function () {
  const headerRef = useRef() as React.MutableRefObject<HTMLDivElement>;
  const [stats] = useFetch<Stats>(
    "https://opencampus-codex.blockscout.com/api/v2/stats",
    { cacheTimeout: 300 }
  );

  return (
    <header
      ref={headerRef}
      className="relative w-full bg-transparent z-[999] py-3 flex pr-[4vw] items-center gap-x-5"
    >
      <FlexSeparator />

      <div className="flex text-sm items-center text-green-400">
        <Icon icon="gas" className="text-2xl mr-1" />
        {stats?.gas_prices.average || "--"} Gwei
      </div>

      <ConnectWallet />
    </header>
  );
}
