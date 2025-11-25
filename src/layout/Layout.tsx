import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";

export default function Layout() {
  return (
    <>
      <aside className="aside">
        <Header />
      </aside>
      <Outlet />
    </>
  );
}
