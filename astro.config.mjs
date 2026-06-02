// @ts-check
import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
    site: 'https://annehernandez22120.github.io/manualastro/',
    base: '/manualastro/',
    vite: {
        plugins: [tailwindcss()]
    }
});
