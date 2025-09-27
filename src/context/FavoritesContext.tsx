'use client';

import { createContext, useContext, useState, ReactNode } from 'react';

interface FavoritesContextType {
  favoriteIds: string[]; 
  addFavorite: (id: string) => void; 
  removeFavorite: (id: string) => void;
  isFavorite: (id: string) => boolean; 
}

const FavoritesContext = createContext<FavoritesContextType | undefined>(undefined);


export function FavoritesProvider({ children }: { children: ReactNode }) {
  const [favoriteIds, setFavoriteIds] = useState<string[]>([]); // <-- CAMBIO: de number[] a string[]
 

  const addFavorite = (id: string) => {
    setFavoriteIds((prevIds) => [...prevIds, id]);
  };

  const removeFavorite = (id: string) => {
    setFavoriteIds((prevIds) => prevIds.filter((favId) => favId !== id));
  };

  const isFavorite = (id: string) => {
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