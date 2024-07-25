const address = "0x10950e0bA6AaA592490b8E3D31160c8a63854426" as const;

const abi = [
  {
    inputs: [],
    name: "up",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "val",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
] as const;

export default { address, abi };
