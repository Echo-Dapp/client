import { useAccount } from "wagmi";
import EduChart from "./components/EduChart";

export default function () {
  return (
    <div className="pt-10 p-page">
      <section className="flex">
        <div className="basis-1/2">
          <EduChart />
        </div>

        <div className="flex-1 bg- p-2"></div>
      </section>
    </div>
  );
}
