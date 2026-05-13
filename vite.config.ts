import { defineConfig } from "@tanstack/react-start/config";
import tsconfigPaths from "vite-tsconfig-paths";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  deployment: {
    preset: "netlify",
  },
  vite: {
    plugins: [
      tailwindcss(),
      tsconfigPaths(),
    ],
  },
});
