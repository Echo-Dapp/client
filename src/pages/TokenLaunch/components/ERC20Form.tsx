import React, { useEffect, useState } from "react";
import DataForm from "../../../common/DataForm";
import TitledInput from "../../../common/TitledInput";
import ToggleInput from "../../../common/ToggleInput";
import { useAccount, useWalletClient } from "wagmi";
import contractDefinitions from "../../../contracts";

export default function ERC20Form() {
  const [valid, setValid] = useState(false);

  const { data: client } = useWalletClient();
  const { address } = useAccount();

  function createNewToken(data: any) {
    if (!client || address) return;

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

    client.deployContract({
      ...contractDefinitions.tokenERC20,
      args: [
        name,
        symbol,
        decimals,
        owner || address,
        initialSupply,
        maxSupply || 0,
        mintable ? true : false,
        burnable ? true : false,
        maxTokensPerWallet || 0,
      ],
    });
  }

  return (
    <DataForm
      callback={createNewToken}
      className="w-[40%] flex flex-col gap-y-8"
      setValidity={setValid}
    >
      <TitledInput
        title="Token Name"
        type="text"
        name="name"
        maxLength={32}
        placeholder="e. g. Super Cool Token"
        required
      />

      <TitledInput
        title="Symbol (TICKER)"
        name="symbol"
        placeholder="e. g. COOL"
        required
      />

      <div className="flex gap-x-5">
        <div className="basis-1/2">
          <TitledInput
            title="Initial Supply"
            name="initialSupply"
            type="number"
            min={1}
            step={1}
            placeholder="e. g. 21,000,000"
            required
          />
        </div>

        <div className="basis-1/2">
          <TitledInput
            title="Decimals (1 - 18)"
            name="decimals"
            min={1}
            max={18}
            step={1}
            placeholder="e. g. 18"
          />
        </div>
      </div>

      <div className="flex flex-wrap gap-5 mb-2">
        <div className="w-1/2">
          <ToggleInput
            name="burnable"
            title="Burnable"
            tooltip="Enables token burning after token creation to decrease total supply."
          />
        </div>
        <div>
          <ToggleInput
            name="mintable"
            title="Mintable"
            tooltip="Enables additional token minting after token creation to increase total supply."
          />
        </div>
      </div>

      <TitledInput
        title="Owner"
        name="owner"
        placeholder="e. g. 0x..."
        subtitle="[Optional] - By default you are the owner. Note: if you change the owner to an address that you can not control, you will not be able to make any changes to the token after its creation"
      />
      <TitledInput
        title="Maximum Supply"
        name="maxSupply"
        type="number"
        min={1}
        step={1}
        placeholder="e. g. 1,000,000,000"
        subtitle="[Optional] - You can set the maximum total supply of the token, this sets a limit for minting. Limit cannot be changed after the initial token creation."
      />
      <TitledInput
        title="Maximum Tokens per wallet"
        name="maxTokensPerWallet"
        min={1}
        step={1}
        placeholder="e. g. 200"
        subtitle="[Optional] - You can set a maximum token balance per individual address. Limit can be increased after initial token creation."
      />

      <button
        type="submit"
        className="w-1/3 py-3 bg-primary rounded disabled:opacity-50"
        disabled={!valid}
      >
        Create Token
      </button>
    </DataForm>
  );
}