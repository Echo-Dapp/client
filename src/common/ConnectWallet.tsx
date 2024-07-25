import React from "react";
import { useAccount, useBalance, useConnect, useDisconnect } from "wagmi";
import useModal from "../hooks/useModal";
import Icon from "./Icon";
import FlexSeparator from "./FlexSeparator";
import { formatEvmAddress } from "../utils";
import { formatEther } from "viem";

export default function ConnectWallet() {
  const { isLoading, status } = useConnect();
  const { disconnect } = useDisconnect();
  const { address } = useAccount();

  const modal = useModal();

  const balance = useBalance({ address: address });

  return (
    <div className="">
      {!address && (
        <button
          className="bg-primary px-5 py-2 text-sm font-semibold rounded-full duration-200 hover:scale-[102%] disabled:cursor-progress disabled:opacity-80"
          onClick={() => modal.show(<ConnectorsModal />)}
          disabled={isLoading || status === "loading"}
        >
          Connect Wallet
        </button>
      )}

      {address && (
        <div className="flex gap-x-3">
          <button
            className="bg-foreground hover:bg-black duration-300 hover:shadow-[0px_0px_8px_cyan] px-3 py-2 text-sm font-medium rounded-lg relative flex gap-x-2"
            title="Your EDU balance | Click to get Test EDU"
            onClick={() =>
              window.open("https://drpc.org/faucet/open-campus-codex", "_blank")
            }
          >
            <figure className="absolute-cover -z-1 bg-gradient-to-tl from-primary to-secondary rounded-inherit scale-[102.3%]" />

            <img src="/icons/coin.svg" className="aspect-square h-[1.5em]" />
            {balance.data?.value ? formatEther(balance.data.value) : "..."}
          </button>

          <button
            className="bg-mute/30 px-5 py-2 text-sm font-medium rounded-lg"
            title={address}
            onClick={() => {
              if (confirm("Disconnect ? ")) disconnect();
            }}
          >
            {formatEvmAddress(address)}
          </button>
        </div>
      )}
    </div>
  );
}

function ConnectorsModal() {
  const modal = useModal();
  const { connectors } = useConnect();

  return (
    <div className="bg-foreground border border-mute/30 p-3 rounded-lg">
      <div className="flex">
        <FlexSeparator />

        <button onClick={modal.hide}>
          <Icon
            icon="close"
            className="text-2xl text-red-500 hover:scale-105"
          />
        </button>
      </div>

      <div className="flex flex-col py-2 gap-y-3 px-1">
        {connectors.map((connecter, key) => (
          <button
            key={key}
            onClick={() => {
              connecter.connect();
              modal.hide();
            }}
            className="flex text-lg items-center gap-x-2 px-5 rounded-md hover:bg-mute/10 py-1 duration-150"
          >
            <img
              src={getConnectorImage(connecter.name)}
              className="h-[2.2em] aspect-square"
            />
            {connecter.name}
          </button>
        ))}
      </div>
    </div>
  );
}

function getConnectorImage(connectorName: string) {
  if (connectorName.toLowerCase() === "metamask") return "/icons/metamask.png";
  if (connectorName.toLowerCase() === "walletconnect")
    return "/icons/walletconnect.svg";
  return "/icons/Eth-g.png";
}
