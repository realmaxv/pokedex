import { createBrowserRouter, RouterProvider } from "react-router";
import "./App.css";
import RootLayout from "./layouts/RootLayout";
import HomePage from "./pages/HomePage";
import PokeTypePage from "./pages/PokeTypePage";
import SinglePokemonPage from "./pages/SinglePokemonPage";

const router = createBrowserRouter([
  {
    Component: RootLayout,
    children: [
      { path: "/", Component: HomePage },
      { path: "/poketype", Component: PokeTypePage },
      { path: "/singlepokemon/:id", Component: SinglePokemonPage },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
