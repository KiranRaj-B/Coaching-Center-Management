export const API_ENDPOINT = '';

export const PATHS = {
  HOME: '/',
  SIGNIN: '/signin',
  SIGNUP: '/signup',
  DASHBOARD: '/dashboard',
} as const;

export const LOCAL_STORAGE_KEYS = {
  AUTH_TOKEN: 'authToken',
  USER_DATA: 'userData',
  STUDENTS: 'students',
} as const;