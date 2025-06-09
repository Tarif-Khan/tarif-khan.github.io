import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: "/tarif-khan.github.io/",
  plugins: [react()],
});