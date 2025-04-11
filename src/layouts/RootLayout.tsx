import { Outlet } from "react-router";
import Header from "../components/Header";

function RootLayout() {
  return (
    <main className="">
      <Outlet />
    </main>
  );
}

export default RootLayout;
