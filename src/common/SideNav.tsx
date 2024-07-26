import React from "react";
import Icon, { IconType } from "./Icon";
import { Link, useNavigate } from "react-router-dom";
import { twMerge } from "tailwind-merge";

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
              "flex gap-x-2 items-center text-base py-1 pr-3",
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
            {item.expansion && <Icon icon="chevronRight" />}
          </button>
        ))}
      </section>
    </nav>
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
    link: "/",
    tooltip: "Home | Portfolio",
  },
  {
    name: "Swap",
    subtitle: "Cross Chain",
    icon: "shuffle",
    link: "/",
    tooltip: "Home | Portfolio",
  },
  {
    name: "Bridge",
    icon: "keyboardOptionKey",
    link: "/",
    tooltip: "Home | Portfolio",
  },
  {
    name: "Trade",
    icon: "monitoring",
    link: "/",
    tooltip: "Home | Portfolio",
  },
  {
    name: "Staking",
    icon: "lockReset",
    link: "/",
    tooltip: "Home | Portfolio",
  },
  {
    name: "Tokens",
    icon: "paid",
    link: "/",
    tooltip: "Home | Portfolio",
  },
  {
    name: "NFTs",
    icon: "package2",
    link: "/",
    tooltip: "Home | Portfolio",
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
