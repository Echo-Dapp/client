import useGlobalContext from "../contexts/globalContext";

export default function useStore() {
  const { storeState } = useGlobalContext();

  function get(key: string) {
    return storeState.store[key];
  }

  function set(key: string, value: any) {
    storeState.setStore((p) => ({ ...p, [key]: value }));
  }

  return { get, set };
}
