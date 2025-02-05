import { createContext, useContext, ReactNode } from 'react';
import { AuthState, User } from '../types';
import { useLocalStorage } from '../hooks/useLocalStorage';
import { LOCAL_STORAGE_KEYS } from '../config/constants';

interface AuthContextType extends AuthState {
  login: (token: string, user: User) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [authState, setAuthState] = useLocalStorage<AuthState>(LOCAL_STORAGE_KEYS.AUTH_TOKEN, {
    isAuthenticated: false,
    user: null,
    token: null,
  });

  const login = (token: string, user: User) => {
    setAuthState({ isAuthenticated: true, token, user });
  };

  const logout = () => {
    setAuthState({ isAuthenticated: false, token: null, user: null });
  };

  return (
    <AuthContext.Provider value={{ ...authState, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};