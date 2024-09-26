export const APP_BASE_PATH = import.meta.env.VITE_BASE_PATH || '';

export const API_POLLING_TIME =
  Number(import.meta.env.VITE_API_POLLING_TIME) || undefined;
export const API_TIME_OUT =
  Number(import.meta.env.VITE_API_TIME_OUT) || undefined;
