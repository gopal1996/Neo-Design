import path from "node:path";
import type { UserConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

export default {
  build: {
    lib: {
      entry: path.resolve(__dirname, "src/index.ts"),
      name: "neo-design-library",
      fileName: `index`,
    },
    rollupOptions: {
      external: ["react", "react-dom"],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
        },
      },
    },
    sourcemap: true,
    emptyOutDir: true,
  },
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
} satisfies UserConfig;
