import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
    build: {
        lib: {
            entry: resolve(__dirname, 'src/index.js'),
            name: 'CtnisterDesign',
            fileName: (format) => `index.${format === 'es' ? 'mjs' : 'js'}`,
            formats: ['es', 'umd']
        },
        rollupOptions: {
            external: [],
            output: {
                globals: {}
            }
        },
        cssCodeSplit: false
    },
    server: {
        open: '/index.html'
    }
});