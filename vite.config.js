import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

export default defineConfig({
  plugins: [react()],
  base: "/Netflix-Clone-2025/", // must match repo name exactly
  build: {
    outDir: "dist", // This is mandatory for gh-pages deployment
  },
});
