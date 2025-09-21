// src/context/FavoritesContext.tsx
'use client';

import { createContext, useContext, useState, ReactNode } from 'react';

// 1. Definimos la "forma" de nuestro contexto
interface FavoritesContextType {
  favoriteIds: number[];
  addFavorite: (id: number) => void;
  removeFavorite: (id: number) => void;
  isFavorite: (id: number) => boolean;
}

// 2. Creamos el contexto
const FavoritesContext = createContext<FavoritesContextType | undefined>(undefined);

// 3. Creamos el Proveedor
export function FavoritesProvider({ children }: { children: ReactNode }) {
  const [favoriteIds, setFavoriteIds] = useState<number[]>([]);

  const addFavorite = (id: number) => {
    setFavoriteIds((prevIds) => [...prevIds, id]);
  };

  const removeFavorite = (id: number) => {
    setFavoriteIds((prevIds) => prevIds.filter((favId) => favId !== id));
  };

  const isFavorite = (id: number) => {
    return favoriteIds.includes(id);
  };

  const value = { favoriteIds, addFavorite, removeFavorite, isFavorite };

  return (
    <FavoritesContext.Provider value={value}>
      {children}
    </FavoritesContext.Provider>
  );
}

// 4. Creamos el Hook personalizado
export function useFavorites() {
  const context = useContext(FavoritesContext);
  if (context === undefined) {
    throw new Error('useFavorites must be used within a FavoritesProvider');
  }
  return context;
}