function generateContract(
  name: string,
  ticker: string,
  owner: string,
  intialSupply: number,
  imports: string[],
  functions: string[],
  parents: string[]
) {
  return `// SPDX-License-Identifier: MIT

    pragma solidity ^0.8.20;

    import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
    import "@openzeppelin/contracts/access/Ownable.sol";
    ${imports.map((imp) => `import ${imp};\n`)}

    contract ${name} is ERC20, Ownable, ${parents.join(", ")} {
        constructor()
            ERC20("${name}", "${ticker}")
            Ownable(${owner})
        {
            _mint(msg.sender, ${intialSupply} * 10 ** decimals());
        }

    ${functions.map((fnc) => `${fnc}\n\n`)}
}
`;
}

export default function (config: {
  name: string;
  ticker: string;
  owner: string;
  initialSupply: number;
  mintable?: boolean;
  burnable?: boolean;
  decimals?: number;
}) {
  const functions = [];
  const imports = [];
  const parents = [];

  config.mintable &&
    functions.push(`
    function mint(address to, uint256 amount) public onlyOwner {
        _mint(to, amount);
    }`);

  config.burnable &&
    imports.push(
      `"@openzeppelin/contracts/token/ERC20/extensions/ERC20Burnable.sol"`
    );
  config.burnable && parents.push("ERC20Burnable");

  functions.push(`
    function decimals() public view override returns (uint8) {
        return ${config.decimals || 18};
    }`);

  return generateContract(
    config.name,
    config.ticker,
    config.owner,
    config.initialSupply,
    imports,
    functions,
    parents
  );
}
