import { defineConfig } from "vite";
import tailwindcss from '@tailwindcss/vite';
// import { createSvgIconsPlugin } from 'vite-plugin-svg-icons';
import path from "path";
import createSvgSpritePlugin from 'vite-plugin-svg-sprite';

export default defineConfig ( {
  resolve: {
    alias: {
      "@": path.resolve ( __dirname, "./src" ),
    },
  },
  plugins: [
    createSvgSpritePlugin ( {
      // Опции для использования в разных фреймворках
      exportType: 'vanilla', // or 'react' or 'vue'
      // Укажите, какие файлы SVG будут включены в спрайт.
      // Например, все .svg-файлы в папке src/icons/
      include: '@/icons/*.svg'
    } ),
    // createSvgIconsPlugin ( {
    //   iconDirs: [ path.resolve ( process.cwd (), 'src/icons' ) ],
    //   symbolId: 'icon-[name]', // ID для спрайта будет 'icon-home', 'icon-settings' и т.д.
    // } ),
    tailwindcss (),
  ],
} )
