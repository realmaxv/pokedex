import { createBrowserRouter, RouterProvider } from "react-router";
import "./App.css";
import RootLayout from "./layouts/RootLayout";
import HomePage from "./pages/HomePage";
import PokeTypePage from "./pages/PokeTypePage";
import SingePokemonPage from "./pages/SingePokemonPage";
import WrongPage from "./pages/WrongPage";

const router = createBrowserRouter([
  {
    Component: RootLayout,
    children: [
      { path: "/", Component: HomePage },
      { path: "/poketype", Component: PokeTypePage },
      { path: "/singlepokemon", Component: SingePokemonPage },
      { path: "*", Component: WrongPage },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
