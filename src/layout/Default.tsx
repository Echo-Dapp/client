import { Outlet } from "react-router-dom";
import Header from "../common/Header";
import Modal from "../common/Modal";
import SideNav from "../common/SideNav";

export default function Default() {
  return (
    <main className="relative">
      <Modal />

      <div className="flex bg-foreground">
        <SideNav />
        <div className="relative flex-1 h-screen flex flex-col">
          <Header />

          <article
            className="bg-background rounded-tl-xl border border-mute/25 overflow-y-scroll flex-1 scrollbar-main"
            role="application"
          >
            <Outlet />
          </article>
        </div>
      </div>
    </main>
  );
}
