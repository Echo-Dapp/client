import React, { ReactNode, createContext, useContext, useState } from "react";

interface GlobalContextType {
  modalState: {
    modal: ReactNode;
    setModal: React.Dispatch<React.SetStateAction<React.ReactNode>>;
  };

  storeState: {
    store: Record<string, any>;
    setStore: React.Dispatch<React.SetStateAction<Record<string, any>>>;
  };
}

const GlobalContext = createContext<GlobalContextType>({} as GlobalContextType);

export function GlobalContextProvider({ children }: { children: ReactNode }) {
  const [modal, setModal] = useState<ReactNode | null>();
  const [store, setStore] = useState<Record<string, any>>({});

  const value = {
    modalState: { modal, setModal },
    storeState: { store, setStore },
  };

  return (
    <GlobalContext.Provider value={value}>{children}</GlobalContext.Provider>
  );
}

export default function useGlobalContext() {
  return useContext(GlobalContext);
}
