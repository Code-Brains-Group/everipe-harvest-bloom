import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { tanstackRouterVite } from "@tanstack/router-plugin/vite";
import { tanstackStartVite } from "@tanstack/react-start/vite";
import tsconfigPaths from "vite-tsconfig-paths";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [
    tanstackRouterVite(),
    tanstackStartVite({
      deployment: {
        preset: "netlify",
      },
    }),
    react(),
    tailwindcss(),
    tsconfigPaths(),
  ],
});
