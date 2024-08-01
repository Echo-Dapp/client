import React, { useState } from "react";
import Icon from "../../common/Icon";
import { twMerge } from "tailwind-merge";

export default function BridgePage() {
  const chains = [
    {
      name: "Base",
      logo: "/public/icons/base.png",
      token: "ETH",
    },
    {
      name: "EduChain",
      logo: "/public/icons/eduChain.png",
      token: "WETH",
    },
    {
      name: "Ethereum",
      logo: "/public/icons/eth.png",
      token: "ETH",
    },
    {
      name: "Fraxtal",
      logo: "/public/icons/fraxtal.webp",
      token: "frxETH",
    },
    {
      name: "Optimism",
      logo: "/public/icons/optimism.png",
      token: "oETH",
    },
  ];

  const [transferFrom, setTransferFrom] = useState("");
  const [transferTo, setTransferTo] = useState("");
  const [isFromDropdownOpen, setIsFromDropdownOpen] = useState(false);
  const [isToDropdownOpen, setIsToDropdownOpen] = useState(false);
  const [isTransferToOther, setIsTransferToOther] = useState(false);
  const [destinationAddress, setDestinationAddress] = useState("");

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

  const getSelectedChainToken = (chainName: string) => {
    const chain = chains.find((c) => c.name === chainName);
    return chain ? chain.token : "Select chain first";
  };

  const isFormValid = () => {
    if (isTransferToOther) {
      return transferFrom && transferTo && destinationAddress;
    } else {
      return transferFrom && transferTo;
    }
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
            <div className="flex items-center gap-x-4 relative">
              <input
                className={twMerge("w-1/2 rounded-lg bg-transparent p-3 border border-front/20")}
                placeholder={getSelectedChainToken(transferFrom)}
                disabled={!transferFrom}
              />
              <div
                className="w-1/2 bg-transparent p-3 rounded-lg border border-front/20 cursor-pointer flex items-center"
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
                <div className="absolute left-1/2 transform -translate-x-1/2 w-1/2 bg-background rounded-lg shadow-lg z-10 mt-1 border border-front/20">
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
            <div className="flex items-center gap-x-4 relative">
              <input
                className={twMerge("w-1/2 rounded-lg bg-transparent p-3 border border-front/20")}
                placeholder={getSelectedChainToken(transferTo)}
                disabled={!transferTo}
              />
              <div
                className="w-1/2 bg-transparent p-3 rounded-lg border border-front/20 cursor-pointer flex items-center"
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
                <div className="absolute left-1/2 transform -translate-x-1/2 w-1/2 bg-background rounded-lg shadow-lg z-10 mt-1 border border-front/20">
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
              className="bg-transparent rounded-lg p-3 border border-front/20"
              placeholder="Destination address"
              value={destinationAddress}
              onChange={(e) => setDestinationAddress(e.target.value)}
            />
          )}
        </div>
        <button
          className={`mt-4 self-end py-2 px-4 rounded-md bg-primary ${
            isFormValid() ? "" : "opacity-60 cursor-not-allowed"
          }`}
          disabled={!isFormValid()}
        >
          Begin new transfer
        </button>
      </div>
      <div>
        <div className="absolute bottom-0 right-0 w-32 aspect-square bg-secondary/10" />
        <div className="absolute bottom-0 right-64 w-32 aspect-square bg-primary/10" />
        <div className="absolute bottom-48 right-64 w-32 aspect-square bg-secondary/5" />
        <div className="absolute bottom-16 right-96 w-32  aspect-square bg-primary/5" />
        <div className="absolute bottom-16 right-32 w-32 aspect-square bg-primary/10" />
        <div className="absolute bottom-96 right-0 w-32  aspect-square bg-secondary/5" />
        <div className="absolute bottom-48 right-0 w-32  aspect-square bg-primary/10" />
        <div className="absolute bottom-96 right-64 w-32  aspect-square bg-primary/5" />
        <div className="absolute bottom-64 right-32 w-32  aspect-square bg-primary/10" />
        <div className="absolute bottom-64 right-96 w-32  aspect-square bg-primary/5" />
      </div>
    </div>
  );
}
