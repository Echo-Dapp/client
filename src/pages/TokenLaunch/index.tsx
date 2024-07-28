import ERC20Form from "./components/ERC20Form";

export default function () {
  return (
    <div className="p-page py-10">
      <h1 className="text-2xl font-medium">Create ERC20 Token</h1>

      <div className="flex flex-col w-full items-center pt-10">
        <ERC20Form />
      </div>
    </div>
  );
}
