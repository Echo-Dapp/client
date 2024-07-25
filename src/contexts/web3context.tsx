import React, { createContext, useContext } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { createConfig, custom, WagmiProvider } from "wagmi";
import { useParticleProvider } from "@particle-network/connectkit";
import { bscTestnet } from "viem/chains";

interface Web3ContextType {}

const Web3Context = createContext<Web3ContextType>({} as Web3ContextType);

export function Web3Provider({ children }: { children: React.ReactNode }) {
  const provider = useParticleProvider();
  const queryClient = new QueryClient();

  const wagmiConfig = createConfig({
    chains: [bscTestnet],
    transports: { [bscTestnet.id]: custom(provider as any) },
  });
  return (
    <>
      <WagmiProvider config={wagmiConfig}>
        <QueryClientProvider client={queryClient}>
          <Wrapper>{children}</Wrapper>
        </QueryClientProvider>
      </WagmiProvider>
    </>
  );
}

function Wrapper({ children }: { children: React.ReactNode }) {
  const value = {};

  return <Web3Context.Provider value={value}>{children}</Web3Context.Provider>;
}

export default function useWeb3() {
  return useContext(Web3Context);
}
