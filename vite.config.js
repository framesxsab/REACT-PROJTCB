import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    host: "localhost",
    strictPort: true,
    hmr: {
      host: "localhost",
      port: 5173,
      clientPort: 5173,
    },
  },
});
