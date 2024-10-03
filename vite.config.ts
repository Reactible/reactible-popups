import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import dts from 'vite-plugin-dts';
import { resolve } from 'path';

export default defineConfig(({ command }) => {
  if (command === 'serve') {
    // Configuration for development server (npm run dev)
    return {
      plugins: [react()],
      root: './example',
      server: {
        open: true,
      },
    };
  } else {
    // Configuration for building the library (npm run build)
    return {
      plugins: [
        react(),
        dts({
          insertTypesEntry: true,
        }),
      ],
      build: {
        lib: {
          entry: resolve(__dirname, 'src/index.ts'),
          name: 'ReactiblePopups',
          formats: ['es', 'umd'],
          fileName: format => `reactible-popups.${format}.js`,
        },
        rollupOptions: {
          external: ['react', 'react-dom'],
          output: {
            globals: {
              react: 'React',
              'react-dom': 'ReactDOM',
            },
          },
        },
        outDir: 'dist',
      },
    };
  }
});
