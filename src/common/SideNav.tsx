import React from "react";
import Icon, { IconType } from "./Icon";
import { Link } from "react-router-dom";

export default function () {
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

      <section className="flex flex-col gap-x-5">
        {navItems.map((item, key) => (
          <Link
            key={key}
            to={item.link}
            title={item.tooltip}
            className="flex gap-x-2 text-base"
          >
            <Icon icon={item.icon} className="text-[1.5em]" />
            <span>{item.name}</span>
          </Link>
        ))}
      </section>
    </nav>
  );
}

type NavItem = {
  name: string;
  subtitle?: string;
  icon: IconType;
  link: string;
  tooltip?: string;
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
    icon: "analytics",
    link: "/",
    tooltip: "Home | Portfolio",
  },
  {
    name: "Swap",
    subtitle: "Cross Chain",
    icon: "analytics",
    link: "/",
    tooltip: "Home | Portfolio",
  },
  {
    name: "Bridge",
    icon: "analytics",
    link: "/",
    tooltip: "Home | Portfolio",
  },
  {
    name: "Trade",
    icon: "analytics",
    link: "/",
    tooltip: "Home | Portfolio",
  },
  {
    name: "Staking",
    icon: "analytics",
    link: "/",
    tooltip: "Home | Portfolio",
  },
  {
    name: "Tokens",
    icon: "analytics",
    link: "/",
    tooltip: "Home | Portfolio",
  },
  {
    name: "NFTs",
    icon: "analytics",
    link: "/",
    tooltip: "Home | Portfolio",
  },
  {
    name: "Explore",
    icon: "analytics",
    link: "/",
    tooltip: "Home | Portfolio",
  },
  {
    name: "Buy Crypto",
    icon: "analytics",
    link: "/",
    tooltip: "Home | Portfolio",
  },
];
