import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// GitHub Pages serves project sites from https://<user>.github.io/<REPO_NAME>/
// If you rename the repository, change REPO_NAME below (it must match exactly).
const REPO_NAME = 'prompt-x';

export default defineConfig(({ command }) => ({
  plugins: [react()],
  // Local dev uses "/", production builds use "/<REPO_NAME>/".
  base: command === 'build' ? `/${REPO_NAME}/` : '/',
}));
