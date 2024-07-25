import { configureChains, createConfig } from "wagmi";
import { bscTestnet, Chain } from "viem/chains";
import { InjectedConnector } from "wagmi/connectors/injected";
import { WalletConnectConnector } from "wagmi/connectors/walletConnect";
import { publicProvider } from "wagmi/providers/public";

const openCampusTestnet: Chain = {
  id: 0xa045c,
  name: "Open Campus Codex Sepolia",
  network: "Sepolia",
  nativeCurrency: { symbol: "EDU", name: "EDU", decimals: 18 },
  rpcUrls: {
    default: {
      http: ["https://open-campus-codex-sepolia.drpc.org"],
      webSocket: ["wss://open-campus-codex-sepolia.drpc.org"],
    },
    public: {
      http: ["https://open-campus-codex-sepolia.drpc.org"],
      webSocket: ["wss://open-campus-codex-sepolia.drpc.org"],
    },
  },
  testnet: true,
  blockExplorers: {
    default: {
      name: "blockscout",
      url: "https://opencampus-codex.blockscout.com",
    },
  },
};

const primaryChain = openCampusTestnet;

const { chains, publicClient, webSocketPublicClient } = configureChains(
  [primaryChain],
  [publicProvider()]
);

const wagmiConfig = createConfig({
  autoConnect: true,
  logger: { warn: (msg) => console.warn(msg) },
  connectors: [
    new InjectedConnector({ chains }),
    new WalletConnectConnector({
      options: {
        projectId: "756f8ad5a4c44ce4fbd9897445a10187",
        qrModalOptions: { themeMode: "dark" },
        metadata: {
          name: "Echo",
          description: "Everything Open Campus",
          icons: ["/favicon.ico"],
          url: window.location.hostname,
        },
      },
      chains: [primaryChain],
    }),
  ],
  publicClient,
  webSocketPublicClient,
});

export default wagmiConfig;
export { publicClient, webSocketPublicClient };
