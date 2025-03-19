import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      react: require.resolve("react"),
      "react/jsx-runtime": require.resolve("react/jsx-runtime"),
    },
  },
  optimizeDeps: {
    include: ["react", "react-dom"],
  },
  build: {
    rollupOptions: {
      external: ["react", "react-dom"],
    },
  },
});
