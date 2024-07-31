import React from "react";
import Icon, { IconType } from "./Icon";
import { Link, useNavigate } from "react-router-dom";
import { twMerge } from "tailwind-merge";
import FlexSeparator from "./FlexSeparator";

export default function () {
  const navigate = useNavigate();

  return (
    <nav className="h-screen pl-[2vw] pr-[1.5vw] flex flex-col pt-10">
      <div className="flex text-xl gap-x-2 items-center">
        <img src="/logo.png" className="w-[2em]" />
        <div className="">
          <h1 className="bg-gradient-to-br from-primary to-secondary text-transparent bg-clip-text font-bold tracking-wide">
            ECHO
          </h1>
          <p className="text-xs text-mute">Open Campus</p>
        </div>
      </div>

      <figure className="border border-mute/30 mb-5 mt-6 scale-x-[115%]" />

      <section className="flex flex-col gap-y-6">
        {navItems.map((item, key) => (
          <button
            key={key}
            id={item.id}
            title={item.tooltip}
            onClick={() => {
              if (item.link) navigate(item.link);
              if (item.action) item.action();
            }}
            className={twMerge(
              "flex gap-x-2 items-center relative text-base py-1 pr-3 group",
              item.className
            )}
          >
            <Icon icon={item.icon} className="text-[1.5em]" />
            <div className="flex flex-col relative">
              <span>{item.name}</span>
              <span className="text-mute/70 text-[10px] absolute whitespace-nowrap top-full -translate-y-[90%] left-full translate-x-2">
                {item.subtitle}
              </span>
            </div>
            {item.expansion && (
              <Icon
                icon="chevronRight"
                className="text-2xl absolute top-1/2 -translate-y-1/2 right-0 duration-150 opacity-60 group-hover:opacity-100 group-hover:translate-x-[10%]"
              />
            )}

            {item.expansion && (
              <div
                className="absolute bg-foreground left-full z-[999] top-1/2 -translate-y-1/2 border border-mute/20 rounded opacity-0 pointer-events-none
              group-hover:opacity-100 group-hover:pointer-events-auto duration-500 group-hover:duration-200 translate-x-1/4 group-hover:translate-x-0"
              >
                {item.expansion}
              </div>
            )}
          </button>
        ))}
      </section>
    </nav>
  );
}

function LinksExpansion(props: {
  items: Array<{ name: string; link: string; icon: IconType }>;
}) {
  return (
    <section className="flex flex-col gap-y-4 px-2 py-4">
      {props.items.map((item, key) => (
        <Link
          key={key}
          className="flex gap-x-2 items-center relative text-base group hover:bg-mute/30 px-2 py-2 rounded"
          to={item.link}
        >
          <Icon icon={item.icon} className="text-[1.5em]" />
          <div className="flex flex-col relative whitespace-nowrap">
            {item.name}
          </div>
        </Link>
      ))}
    </section>
  );
}

type NavItem = {
  name: string;
  subtitle?: string;
  icon: IconType;
  tooltip?: string;
  id?: string;
  className?: string;
  link?: string;
  action?: () => void;
  expansion?: React.ReactNode;
};

const navItems: NavItem[] = [
  {
    name: "Dashboard",
    icon: "analytics",
    link: "/",
    tooltip: "Home | Portfolio",
  },
  {
    name: "Swap",
    icon: "swapHoriz",
    link: "/swap",
    tooltip: "Swap Tokens",
  },
  {
    name: "Swap",
    subtitle: "Cross Chain",
    icon: "shuffle",
    link: "/",
    tooltip: "Cross Chain Swap",
  },
  {
    name: "Bridge",
    icon: "keyboardOptionKey",
    link: "/",
    tooltip: "Bridge Assets through EduChain",
  },
  {
    name: "Trade",
    icon: "monitoring",
    link: "/",
    tooltip: "Trade Tokens on EduChain",
  },
  {
    name: "Staking",
    icon: "lockReset",
    link: "/",
    tooltip: "Stake Assets",
  },
  {
    name: "Tokens",
    icon: "paid",
    expansion: (
      <LinksExpansion
        items={[
          { name: "Launch Token", icon: "pokerChip", link: "/token/launch" },
          { name: "Distrubute Token", icon: "send", link: "/" },
          { name: "Manage Tokens", icon: "manufacturing", link: "/" },
          { name: "Browse Tokens", icon: "database", link: "/" },
        ]}
      />
    ),
  },
  {
    name: "NFTs",
    icon: "package2",
    expansion: (
      <LinksExpansion
        items={[
          { name: "Launch NFT", icon: "libraryAdd", link: "/nft/launch" },
          { name: "Distrubute NFTs", icon: "send", link: "/" },
          { name: "NFT Marketplace", icon: "store", link: "/" },
        ]}
      />
    ),
  },
  {
    name: "Explore",
    icon: "explore",
    link: "/",
    tooltip: "Home | Portfolio",
  },
  {
    name: "Buy Crypto",
    icon: "currencyExchange",
    action: () => {
      (window as any).moonpayBuy();
    },
    tooltip: "Home | Portfolio",
  },
];
