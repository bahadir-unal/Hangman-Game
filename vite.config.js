import react from '@vitejs/plugin-react';

export default {
  plugins: [react()],
  optimizeDeps: {
    include: ["src/**/*.js", "src/**/*.jsx"],
  },
};
