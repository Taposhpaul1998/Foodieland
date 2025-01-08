import { defineConfig } from "vite";
import { resolve } from 'path';


export default defineConfig({
    build: {
        rollupOptions: {
            input: {
                main: resolve(__dirname, "index.html"),
                resipes: resolve(__dirname, "src/pages/resipes.html"),
                resipeDetails: resolve(__dirname, "src/pages/resipeDetails.html"),
                blog: resolve(__dirname, "src/pages/blog.html"),
                blogDetails: resolve(__dirname, "src/pages/blogDetails.html"),
                contact: resolve(__dirname, "src/pages/contact.html"),
                about: resolve(__dirname, "src/pages/about.html"),
            }
        }
    }
})