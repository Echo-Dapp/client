import DataForm from "../../common/DataForm";
import TitledInput from "../../common/TitledInput";
import ToggleInput from "../../common/ToggleInput";

export default function () {
  return (
    <div className="p-page pt-10">
      <h1 className="text-2xl font-medium">Create ERC20 Token</h1>

      <div className="flex flex-col w-full items-center pt-10">
        <DataForm
          callback={console.log}
          className="w-[40%] flex flex-col gap-y-8"
        >
          <TitledInput
            title="Token Name"
            placeholder="e. g. Super Cool Token"
            required
          />

          <TitledInput
            title="Symbol (TICKER)"
            placeholder="e. g. COOL"
            required
          />

          <div className="flex gap-x-5">
            <div className="basis-1/2">
              <TitledInput
                title="Initial Supply"
                placeholder="e. g. 21,000,000"
                required
              />
            </div>

            <div className="basis-1/2">
              <TitledInput title="Decimals (1 - 18)" placeholder="e. g. 18" />
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
            placeholder="e. g. 0x..."
            subtitle="[Optional] - By default you are the owner. Note: if you change the owner to an address that you can not control, you will not be able to make any changes to the token after its creation"
          />
          <TitledInput
            title="Maximum Supply"
            placeholder="e. g. 1,000,000,000"
            subtitle="[Optional] - You can set the maximum total supply of the token, this sets a limit for minting. Limit cannot be changed after the initial token creation."
          />
          <TitledInput
            title="Maximum Tokens per wallet"
            placeholder="e. g. 200"
            subtitle="[Optional] - You can set a maximum token balance per individual address. Limit can be increased after initial token creation."
          />
        </DataForm>
      </div>
    </div>
  );
}
