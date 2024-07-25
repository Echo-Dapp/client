import { Outlet } from "react-router-dom";
import Header from "../common/Header";
import Modal from "../common/Modal";
import SideNav from "../common/SideNav";
import useStore from "../hooks/useStore";

export default function Default() {
  const store = useStore();

  return (
    <main className="relative">
      <Modal />

      <div className="flex bg-foreground">
        <SideNav />
        <div className="relative flex-1 h-screen flex flex-col">
          <Header />

          <figure
            role="separator"
            style={{ height: store.get("header-height") }}
          />

          <article className="h-screen overflow-y-scroll flex-1">
            <div
              className="bg-background rounded-t-lg border border-mute/25 min-h-screen"
              role="application"
            >
              <Outlet />
            </div>
          </article>
        </div>
      </div>
    </main>
  );
}
