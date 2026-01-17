// FastAPI Backend Configuration
export const API_CONFIG = {
  BASE_URL: import.meta.env.VITE_API_BASE_URL || "https://hackwins-project.vercel.app",
  ENDPOINTS: {
    HEALTH: "/health",
    PREDICT: "/predict",
  },
  TIMEOUT: 30000, // 30 seconds
};
