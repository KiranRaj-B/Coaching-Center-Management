export interface User {
    id: string;
    email: string;
    name: string;
  }
  
  export interface Student {
    id: string;
    name: string;
    email: string;
    course: string;
    joinDate: string;
    progress: number;
  }
  
  export interface AuthState {
    isAuthenticated: boolean;
    user: User | null;
    token: string | null;
  }