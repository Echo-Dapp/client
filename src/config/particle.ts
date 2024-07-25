import { ChainInfo, BNBChainTestnet } from "@particle-network/chains";
import { evmWallets } from "@particle-network/connectors";

const eduChain: ChainInfo = {
  id: 34443,
  name: "Edu Chain",
  chainType: "evm",
  icon: "https://www.opencampus.xyz/static/media/coin-logo.39cbd6c42530e57817a5b98ac7621ca7.svg",
  nativeIcon:
    "https://www.opencampus.xyz/static/media/coin-logo.39cbd6c42530e57817a5b98ac7621ca7.svg",
  fullname: "Edu Chain | Open Campus Network",
  network: "Testnet",
  website: "https://opencampus.xyz",
  nativeCurrency: {
    name: "EDU",
    symbol: "EDU",
    decimals: 18,
  },
  rpcUrl: "wss://mode.drpc.org",
  faucetUrl: "https://opencampus.xyz",
  blockExplorerUrl: "https://opencampus.xyz",
  features: [],
};

const primaryNetwork = BNBChainTestnet;

const particleConfig = {
  projectId: import.meta.env.VITE_PARTICLE_PROJECT_ID,
  clientKey: import.meta.env.VITE_PARTICLE_CLIENT_KEY,
  appId: import.meta.env.VITE_PARTICLE_APP_ID,
  chains: [primaryNetwork],
  connectors: [
    ...evmWallets({
      projectId: import.meta.env.VITE_WALLETCONNECT_ID || "",
      showQrModal: true,
    }),
  ],
  erc4337: {
    name: "SIMPLE",
    version: "1.0.0",
  },
  wallet: {
    customStyle: {
      supportChains: [primaryNetwork],
    },
  },
};

export default particleConfig;
