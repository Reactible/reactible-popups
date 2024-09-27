import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import dts from "vite-plugin-dts";

export default defineConfig({
  plugins: [react(), dts()],
  build: {
    lib: {
      entry: "src/index.js", // The entry point of your library
      name: "ReactPopups",
      fileName: (format) => `react-popups.${format}.js`,
    },
    rollupOptions: {
      // Make sure to externalize dependencies that you don't want to bundle
      external: ["react", "react-dom"],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
        },
      },
    },
  },
});
