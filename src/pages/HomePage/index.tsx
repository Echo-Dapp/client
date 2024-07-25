import { useAccount } from "wagmi";

export default function () {
  const { address } = useAccount();

  return (
    <div>
      <div className="p-page py-6 font-semibold">You are welcome {address}</div>
    </div>
  );
}
