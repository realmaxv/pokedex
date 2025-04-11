import { Outlet } from "react-router";

function RootLayout() {
  return (
    <main className="md:flex md:items-center scroll-smooth  md:justify-center md:my-20 md:rounded-3xl ">
      <Outlet />
    </main>
  );
}

export default RootLayout;
