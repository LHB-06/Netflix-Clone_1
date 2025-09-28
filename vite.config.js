import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite"; // 추가
import react from "@vitejs/plugin-react-swc";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()], // tailwindcss() 추가
});
