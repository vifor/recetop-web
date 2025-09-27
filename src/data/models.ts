// src/data/models.ts
export const POSSIBLE_CATEGORIES = ["Postre", "Plato principal", "Panaderia", "Bebida"] as const;
export type RecipeCategory = typeof POSSIBLE_CATEGORIES[number];

export interface Recipe {
  id: string; 
  name: string; 
  imageUrl: string; 
  ingredients: string[]; 
  steps: string[];
  categories: RecipeCategory[]; 
  
  duration: number;
  difficulty: 'Fácil' | 'Media' | 'Difícil';
}