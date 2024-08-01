import React, { useState, useEffect } from "react";
import Icon from "../../common/Icon";

export default function BridgePage() {
  const chains = [
    {
      name: "Ethereum",
      logo: "/public/icons/eth.png",
    },
    {
      name: "EduChain",
      logo: "/public/icons/eduChain.png",
    },
    {
      name: "Optimism",
      logo: "/public/icons/optimism.png",
    },
    {
      name: "fraxtal",
      logo: "/public/icons/fraxtal.webp",
    },
  ];

  const [transferFrom, setTransferFrom] = useState("");
  const [transferTo, setTransferTo] = useState("");
  const [isFromDropdownOpen, setIsFromDropdownOpen] = useState(false);
  const [isToDropdownOpen, setIsToDropdownOpen] = useState(false);
  const [isTransferToOther, setIsTransferToOther] = useState(false);

  const handleCheckboxChange = (event: { target: { checked: any } }) => {
    setIsTransferToOther(event.target.checked);
  };

  const handleTransferFromChange = (chain: { name: any; logo?: string }) => {
    setTransferFrom(chain.name);
    if (chain.name === transferTo) {
      setTransferTo("");
    }
    setIsFromDropdownOpen(false);
  };

  const handleTransferToChange = (chain: { name: any; logo?: string }) => {
    setTransferTo(chain.name);
    if (chain.name === transferFrom) {
      setTransferFrom("");
    }
    setIsToDropdownOpen(false);
  };

  const getSelectedChainLogo = (chainName: string) => {
    const chain = chains.find((c) => c.name === chainName);
    return chain ? chain.logo : "";
  };

  return (
    <div className="p-page my-24">
      <h1 className="text-3xl w-[50%] font-bold leading-[3rem]">
        Bridge between or send within Ethereum,
        <span className="text-secondary"> EduChain, </span>
        Fraxtal, Optimism!
      </h1>
      <div className="mt-8 w-[50%] bg-foreground p-6 rounded-lg flex flex-col">
        <div className="flex flex-col gap-y-6">
          <div className="flex flex-col gap-y-2">
            <h2>Transfer From</h2>
            <div className="relative">
              <div
                className="w-full bg-transparent p-3 rounded-lg border border-front/20 cursor-pointer flex items-center"
                onClick={() => setIsFromDropdownOpen(!isFromDropdownOpen)}
              >
                {transferFrom ? (
                  <>
                    <img
                      src={getSelectedChainLogo(transferFrom)}
                      alt={transferFrom}
                      className="w-6 h-6 mr-2 object-cover rounded-full"
                    />
                    {transferFrom}
                  </>
                ) : (
                  <div className="w-full flex justify-between items-center">
                    <span>Select chain</span>
                    <Icon icon="arrow_forward" className="text-xl rotate-90" />
                  </div>
                )}
              </div>
              {isFromDropdownOpen && (
                <div className="absolute w-full bg-background rounded-lg shadow-lg z-10 mt-1">
                  {chains.map((chain, i) => (
                    <div
                      key={i}
                      className={`p-3 cursor-pointer hover:bg-front/20 rounded-lg flex items-center ${
                        chain.name === transferTo
                          ? "opacity-50 cursor-not-allowed"
                          : ""
                      }`}
                      onClick={() =>
                        chain.name !== transferTo &&
                        handleTransferFromChange(chain)
                      }
                    >
                      <img
                        src={chain.logo}
                        alt={chain.name}
                        className="w-6 h-6 mr-2 object-cover rounded-full"
                      />
                      {chain.name}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
          <div className="flex flex-col gap-y-2">
            <h2>Transfer To</h2>
            <div className="relative">
              <div
                className="w-full bg-transparent p-3 rounded-lg border border-front/20 cursor-pointer flex items-center"
                onClick={() => setIsToDropdownOpen(!isToDropdownOpen)}
              >
                {transferTo ? (
                  <>
                    <img
                      src={getSelectedChainLogo(transferTo)}
                      alt={transferTo}
                      className="w-6 h-6 mr-2 object-cover rounded-full"
                    />
                    {transferTo}
                  </>
                ) : (
                  <div className="w-full flex justify-between items-center">
                    <span>Select chain</span>
                    <Icon icon="arrow_forward" className="text-xl rotate-90" />
                  </div>
                )}
              </div>
              {isToDropdownOpen && (
                <div className="absolute w-full bg-background rounded-lg shadow-lg z-10 mt-1">
                  {chains.map((chain, i) => (
                    <div
                      key={i}
                      className={`p-3 cursor-pointer hover:bg-front/20 rounded-lg flex items-center ${
                        chain.name === transferFrom
                          ? "opacity-50 cursor-not-allowed"
                          : ""
                      }`}
                      onClick={() =>
                        chain.name !== transferFrom &&
                        handleTransferToChange(chain)
                      }
                    >
                      <img
                        src={chain.logo}
                        alt={chain.name}
                        className="w-6 h-6 mr-2 object-cover rounded-full"
                      />
                      {chain.name}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
          <div className="flex gap-x-2">
            <input
              type="checkbox"
              className="w-[1vw]"
              checked={isTransferToOther}
              onChange={handleCheckboxChange}
            />
            <p>I'm transferring to an address other than my own</p>
          </div>
          {isTransferToOther && (
            <input
              className="bg-transparent rounded-lg p-3"
              placeholder="Destination address"
            />
          )}
        </div>
        <button className="mt-4 self-end bg-primary opacity-30 py-2 px-4 rounded-md">
          Begin new transfer
        </button>
      </div>
    </div>
  );
}
