import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// If you plan to deploy to GitHub Pages, set `base` to your repo name
export default defineConfig({
  plugins: [react()],
  base: "/Netflix-Clone-2025/",
});
