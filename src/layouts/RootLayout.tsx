import { Outlet } from "react-router";

function RootLayout() {
  return (
    <main className="bg-[#CCDADD] h-screen w-full">
      <Outlet />
    </main>
  );
}

export default RootLayout;
