import { createBrowserRouter, RouterProvider } from "react-router";
import "./App.css";
import RootLayout from "./layouts/RootLayout";
import HomePage from "./pages/HomePage";
import PokeTypePage from "./pages/PokeTypePage";

import WrongPage from "./pages/WrongPage";
import SinglePokemonPage from "./pages/SinglePokemonPage";

const router = createBrowserRouter([
  {
    Component: RootLayout,
    children: [
      { path: "/", Component: HomePage },
      { path: "/poketype", Component: PokeTypePage },
      { path: "/singlepokemon", Component: SinglePokemonPage },
      { path: "*", Component: WrongPage },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
