import React, { useState } from "react";
import Icon from "../../../common/Icon";

interface LiquidityMemberProps {
  token: TradingPairEntry;
  buyAmount?: number;
  max?: number;
  label?: string;
  buying?: boolean;
}

type TradingPairEntry = {
  name: string;
  image: string;
  balance: number;
  symbol: string;
};

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

export default function Liquidity() {
  const [component, setComponent] = useState(true);
  return (
    <div className="mt-4 border-t border-front/40 pt-4">
      <div className="flex justify-between items-end text-lg">
        {component ? <h1>Your Liquidity</h1> : <h1>Add Liquidity</h1>}
        <button
          className="w-max h-max relative bg-gradient-to-r to-primary from-secondary rounded-lg py-2 px-3 text-sm"
          onClick={() => setComponent(!component)}
        >
          <figure className="bg-black absolute-cover z-0 top-0 right-0 scale-[98%] rounded-inherit" />
          <span className="relative z-1">
            {component ? "Add Liquidity" : "Your Liquidity"}
          </span>
        </button>
      </div>
      {component ? (
        <div className="mt-4 border border-front p-4 rounded-lg items-center flex justify-center">
          No Liquidity found
        </div>
      ) : (
        <div className="mt-6 flex flex-col items-center gap-y-4">
          <p className="bg-secondary/20 text-secondary p-2 rounded-lg font-medium text-sm">
            Tip: When you add liquidity, you will receive pool tokens
            representing your position. These tokens automatically earn fees
            proportional to your share of the pool, and can be redeemed at any
            time.
          </p>
          <LiquidityMember token={tradingPair[0]} />
          <Icon icon="add" className="text-2xl text-front/60" />
          <LiquidityMember token={tradingPair[1]} />
          <div className="border border-front/20 rounded-lg bg-background w-full">
            <p className="text-sm p-4">Prices and Pool share</p>
            <div className="flex items-center justify-around text-center py-4 border-t border-front/20 rounded-lg">
              <div>
                <p>0.0023</p>
                <h1 className="text-sm">ETH per SOL</h1>
              </div>
              <div>
                <p>32.98</p>
                <h1 className="text-sm">ETH per SOL</h1>
              </div>
              <div>
                <p>0.01%</p>
                <h1 className="text-sm">Share of the pool</h1>
              </div>
            </div>
          </div>
          <button className="rounded-lg text-center w-full bg-gradient-to-r py-2 from-primary/20 to-secondary/20">
            Enter an amount
          </button>
        </div>
      )}
    </div>
  );
}

function LiquidityMember(props: LiquidityMemberProps) {
  const { token } = props;
  return (
    <div className="flex flex-col gap-y-1 border border-front/20 p-3 rounded-lg w-full">
      <div className="flex justify-between">
        <input
          className="focus-within:outline-none border-none bg-transparent text-2xl"
          placeholder="0"
        />
        <div className="flex gap-x-2 items-center bg-background px-3 py-2 rounded-3xl">
          <img
            src={token.image}
            alt={token.name}
            className="w-[1.5vw] rounded-full"
          />
          <h1 className="font-bold">{token.symbol}</h1>
          <Icon icon="arrow_forward" />
        </div>
      </div>
      <p className="text-sm font-light text-front text-end mt-1">
        Balance: {token.balance}
        <span className="bg-secondary/10 text-secondary px-2 ml-2">MAX</span>
      </p>
    </div>
  );
}
