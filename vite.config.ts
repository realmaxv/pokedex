import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    VitePWA({
      registerType: "autoUpdate",
      manifest: {
        name: "Meine ADHS App",
        short_name: "ToDo",
        start_url: "/",
        display: "standalone",
        background_color: "#ffffff",
        theme_color: "#00bcd4",
        icons: [
          {
            src: "/icons/pokeball.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "/icons/pokeball.png",
            sizes: "512x512",
            type: "image/png",
          },
        ],
      },
    }),
  ],
});
