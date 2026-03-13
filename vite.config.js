import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
    build: {
        rollupOptions: {
            input: {
                main: resolve(__dirname, 'index.html'),
                about: resolve(__dirname, 'about.html'),
                college: resolve(__dirname, 'college.html'),
                contact: resolve(__dirname, 'contact.html'),
                filmlab: resolve(__dirname, 'film-lab.html'),
                gallery: resolve(__dirname, 'gallery.html'),
                partners: resolve(__dirname, 'partners.html'),
                programs: resolve(__dirname, 'programs.html'),
                school: resolve(__dirname, 'school.html'),
                submit: resolve(__dirname, 'submit.html'),
            }
        }
    }
});
