import { createBrowserRouter, RouterProvider } from "react-router";
import "./App.css";
import RootLayout from "./layouts/RootLayout";
import HomePage from "./pages/HomePage";
import PokeTypePage from "./pages/PokeTypePage";

import SinglePokemonPage from "./pages/SinglePokemonPage";
import WrongPage from "./pages/WrongPage";
import ComponentPage from "./pages/ComponentPage";


const router = createBrowserRouter([
  {
    Component: RootLayout,
    children: [
      { path: "/", Component: HomePage },
      { path: "/poketype", Component: PokeTypePage },
      { path: "/singlepokemon", Component: SinglePokemonPage },

      { path: "/components", Component: ComponentPage },

      { path: "*", Component: WrongPage },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
