import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: '/',
  plugins: [react()],
  build: {
    chunkSizeWarningLimit: 2000,
    minify: false, // Avoid warnings for large chunks
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes("node_modules")) {
            if (id.includes("react")) return "react-vendor";
            if (id.includes("@mui")) return "mui-vendor";
            if (id.includes("three")) return "three-vendor";
            return "vendor"; // General vendor chunk
          }
        },
      },
    },
  },
  esbuild: {
    drop: ["console", "debugger"], // Removes console logs in production
  },
});
