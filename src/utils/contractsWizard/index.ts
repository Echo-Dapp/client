import ERC20 from "./ERC20";
// import compiler from "../compiler";
//@ts-ignore

const compileSolidity = (sourceCode: string) => {
  const input = {
    language: "Solidity",
    sources: {
      "contract.sol": {
        content: sourceCode,
      },
    },
    settings: {
      outputSelection: {
        "*": {
          "*": ["abi", "evm.bytecode"],
        },
      },
    },
  };

  const output = {} as any; //JSON.parse(solc.compile(JSON.stringify(input)));

  const contractName = Object.keys(output.contracts["contract.sol"])[0];
  const abi = output.contracts["contract.sol"][contractName].abi;
  const bytecode =
    output.contracts["contract.sol"][contractName].evm.bytecode.object;

  return { abi, bytecode };
};

export default { ERC20, compileSolidity };
