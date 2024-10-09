import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";

const __dirname = new URL(".", import.meta.url).pathname;

// https://vitejs.dev/config/
export default defineConfig({
  base: "/",
  plugins: [react(), svgr()],

  build: {
    // lib: {
    //   entry: "../../index.html", // Ajuste aqui se necessário
    //   name: "core-package",
    //   fileName: "index",
    // },
    rollupOptions: {
      external: ["react", "react-router", "react-router-dom"],
      output: {
        globals: {
          react: "React",
        },
      },
    },
  },
});
