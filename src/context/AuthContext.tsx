// src/context/AuthContext.tsx
'use client'; // Este componente usará estado y se ejecutará en el cliente

import { createContext, useContext, useState, ReactNode } from 'react';

// 1. Definimos la "forma" de nuestro usuario y del contexto
interface User {
  name: string;
  email: string;
}

interface AuthContextType {
  user: User | null;
  login: () => void; // Por ahora, una función simple sin argumentos
  logout: () => void;
}

// 2. Creamos el contexto con un valor por defecto
const AuthContext = createContext<AuthContextType | undefined>(undefined);

// 3. Creamos el "Proveedor" (Provider) del contexto
// Este es el componente que envolverá nuestra aplicación y manejará el estado.
export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);

  // Lógica de nuestro login falso
  const login = () => {
    const mockUser = { name: 'Vicky', email: 'vicky@recetop.com' };
    setUser(mockUser);
  };

  // Lógica del logout
  const logout = () => {
    setUser(null);
  };

  const value = { user, login, logout };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

// 4. (La mejor práctica) Creamos un Hook personalizado para usar el contexto
// Esto evita tener que importar `useContext` y `AuthContext` en cada componente.
export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}