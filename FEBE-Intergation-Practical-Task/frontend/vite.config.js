import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
// Export the configuration using the defineConfig helper provided by Vite
export default defineConfig({
  // Specify the Vite plugins to use, in this case, the React plugin
  plugins: [react()],

  // Configure the development server settings
  server: {
    // Set up a proxy to handle API requests during development
    proxy: {
      // All requests starting with /api will be forwarded to the target URL
      "/api": {
        // The target server that will handle the requests
        target: "http://localhost:8080",

        // This option changes the origin of the host header to the target URL
        changeOrigin: true
      },
    },
  },
})
