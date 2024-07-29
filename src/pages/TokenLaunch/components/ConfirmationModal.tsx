import { useAccount, useWaitForTransaction, useWalletClient } from "wagmi";
import contractDefinitions from "../../../contracts";
import { formatEvmAddress } from "../../../utils";
import useModal from "../../../hooks/useModal";
import { useEffect, useState } from "react";

export default function (props: { data: any }) {
  const { data: client } = useWalletClient();
  const { address } = useAccount();
  const { data } = props;

  const [loading, setLoading] = useState(false);

  const [hash, setHash] = useState<`0x${string}`>();

  const { data: deployTx } = useWaitForTransaction({ hash: hash });

  async function createNewToken() {
    if (!client || !address) return;

    setLoading(true);

    const {
      name,
      symbol,
      initialSupply,
      decimals,
      burnable,
      mintable,
      owner,
      maxSupply,
      maxTokensPerWallet,
    } = data;

    const txHash = await client.deployContract({
      ...contractDefinitions.tokenERC20,
      args: [
        name,
        symbol,
        decimals || 18,
        owner || address,
        initialSupply,
        maxSupply || 0,
        mintable ? true : false,
        burnable ? true : false,
        maxTokensPerWallet || 0,
      ],
    });

    setHash(txHash);
  }

  const modal = useModal();

  useEffect(() => {
    if (deployTx?.contractAddress) {
      modal.hide();
      client?.watchAsset({
        options: {
          address: deployTx.contractAddress,
          decimals: data.decimals,
          symbol: data.symbol,
        },
        type: "ERC20",
      });
    }
  }, [deployTx]);

  return (
    <div className="p-5 bg-foreground rounded-md flex flex-col gap-y-3 relative overflow-hidden">
      {loading && (
        <figure className="absolute-cover z-1 bg-mute/20 animate-pulse pointer-events-none" />
      )}

      <h1 className="mb-2 font-medium text-xl">
        Token{" "}
        <span className="text-secondary font-light italic">
          {data.name} ({data.symbol})
        </span>{" "}
        will be created with initial supply of {data.initialSupply}
      </h1>

      <p className="text-sm text-mute">
        {"•"} This token will be created on the Open Campus Codex network
      </p>
      <p className="text-sm text-mute">
        {"•"} All tokens, after the initial mint will be sent to your wallet
      </p>
      <p className="text-sm text-mute">
        {"•"} It will be an Ownable ERC20 token with{" "}
        <span className="text-pink-400">
          {formatEvmAddress(data.owner || address)}
        </span>{" "}
        as the owner address
      </p>
      <p className="text-xs text-red-400 -mt-3 pl-3">
        If you do not control this address, you will not be able to manage this
        token
      </p>

      <p className="text-sm text-mute">
        {"•"} You will receive a popup in you wallet to watch the newly created
        token
      </p>

      <div className="flex gap-x-3 mt-2">
        <button
          onClick={() => modal.hide()}
          className="flex-1 bg-red-500 rounded-md text-black py-2 font-medium"
        >
          Cancel
        </button>

        <button
          onClick={() => createNewToken()}
          className="flex-1 bg-gradient-to-br from-primary to-secondary font-medium rounded-md text-black py-2"
          disabled={loading}
        >
          Confirm
        </button>
      </div>
    </div>
  );
}
