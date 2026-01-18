import { defineConfig } from "vite";
import preact from "@preact/preset-vite";
import { copyFileSync } from "fs";
import { join } from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [preact(),
     {
      name: 'copy-404',
      closeBundle() {
        const distPath = join(process.cwd(), 'dist');
        copyFileSync(join(distPath, 'index.html'), join(distPath, '404.html'));
      },
    },],
  base: '/',
});
