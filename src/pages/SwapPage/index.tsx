import { useState } from "react";
import Icon from "../../common/Icon";
import DataForm from "../../common/DataForm";
import { twMerge } from "tailwind-merge";
import Swap from "./components/Swap";
import Liquidity from "./components/Liquidity";

export default function () {
  const [component, setComponent] = useState<"SWAP" | "LIQUIDITY">("SWAP");
  return (
    <div className="h-full w-full flex items-center justify-center">
      <div className="p-4 w-[32vw] bg-foreground rounded-2xl">
        <div className="flex w-full justify-between">
          <div className="flex gap-x-3 text-secondary/60 font-semibold">
            <button
              className={twMerge(
                "duration-150 ease-i cursor-pointern",
                component == "SWAP" ? "text-secondary" : ""
              )}
              onClick={() => setComponent("SWAP")}
            >
              Swap
            </button>
            <button
              className={twMerge(
                "duration-150 ease-i cursor-pointern",
                component == "LIQUIDITY" ? "text-secondary" : ""
              )}
              onClick={() => setComponent("LIQUIDITY")}
            >
              Liquidity
            </button>
          </div>
          <div className="flex text-[1.5rem] gap-x-3">
            <Icon icon="refresh" />
            <Icon icon="tune" />
          </div>
        </div>
        {component == "SWAP" && <Swap />}
        {component == "LIQUIDITY" && <Liquidity />}
      </div>
    </div>
  );
}
