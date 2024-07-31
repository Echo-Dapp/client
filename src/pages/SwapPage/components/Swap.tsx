import React, { useState } from "react";
import Icon from "../../../common/Icon";
import { twMerge } from "tailwind-merge";
import useApiResponse from "../../../hooks/useApiResponse";
import { useContractRead, useNetwork } from "wagmi";
import contractDefinitions from "../../../contracts";

type TradingPairEntry = {
  name: string;
  image: string;
  balance: number;
  symbol: string;
};

export default function Swap() {
  const [tradeState, setTradeState] = useState<"BUY" | "SELL">("BUY");
  const buying = tradeState == "BUY" ? 1 : 0;
  const selling = tradeState == "SELL" ? 1 : 0;

  const addresses = useContractRead({
    ...contractDefinitions.echoSwap,
    functionName: "allPairsLength",
  });

  console.log(addresses);

  const tradingPair = [
    {
      symbol: "ETH",
      name: "Ether",
      image:
        "https://www.shutterstock.com/image-vector/ethereum-eth-coin-icon-vector-260nw-2109686828.jpg",
      balance: 12000,
    },
    {
      symbol: "SOL",
      name: "Solana",
      image: "https://upload.wikimedia.org/wikipedia/en/b/b9/Solana_logo.png",
      balance: 1200,
    },
  ];
  return (
    <>
      <div className="flex flex-col items-center relative gap-y-2 mt-4">
        <div className="border border-front/20 p-4 rounded-2xl min-h-[15vh] w-full bg-background">
          <TradingPairMember
            token={tradingPair[selling]}
            max={Number(tradingPair[selling].balance)}
            label="Max"
            buying={true}
          />
        </div>

        <button
          className="p-1 scale-150 border w-max border-front/20 text-xs bg-background rounded-full rotate-90 absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2"
          onClick={() => {
            setTradeState((p) => (p === "BUY" ? "SELL" : "BUY"));
          }}
        >
          <Icon icon="arrow_forward" />
        </button>

        <div className="border border-front/20 p-4 rounded-lg min-h-[15vh] w-full">
          <TradingPairMember
            token={tradingPair[buying]}
            buyAmount={Number(tradingPair[selling].balance)}
            label="Balance"
          />
        </div>
      </div>
      <button
        className={twMerge(
          "w-full rounded-md py-2 font-semibold disabled:opacity-50 mt-4 bg-gradient-to-l from-primary to-secondary text-front"
        )}
      >
        Swap
      </button>
    </>
  );
}

interface TradingPairMemberProps {
  token: TradingPairEntry;
  buyAmount?: number;
  max?: number;
  label: string;
  buying?: boolean;
}

function TradingPairMember(props: TradingPairMemberProps) {
  const { token, label } = props;

  return (
    <>
      <div className="flex gap-x-2 justify-between w-full">
        <div className="flex flex-col gap-y-2">
          {props.buying ? (
            <p className="font-light">You Pay</p>
          ) : (
            <p className="font-light">You Get</p>
          )}
          <div className="flex gap-x-2 items-center h-max mt-2 mb-1">
            <img
              src={token.image}
              alt={token.name}
              className="w-[2vw] object-cover aspect-square rounded-full"
            />{" "}
            <h1 className="font-semibold">{token.symbol}</h1>
          </div>

          <p className="text-sm flex text-front/70 text-light">{token.name}</p>
        </div>
        <div className="flex flex-col gap-y-2 justify-end items-end">
          {props.buying && (
            <p className="text-sm font-medium text-end">
              Balance: 1000{" "}
              <span className="bg-secondary/10 text-secondary px-2">MAX</span>
            </p>
          )}
          <input
            className="bg-transparent text-2xl focus-within:outline-none text-end border-none"
            placeholder="0"
            value={props.buyAmount}
            min={0}
            onChange={(e) => {
              const amt = Number(e.target.value);
              if (props.max && amt > props.max) {
                e.target.value = props.max.toString();
              }
            }}
          />
          <p className="text-xs font-light text-front/80">~$1000</p>
        </div>
      </div>
    </>
  );
}
